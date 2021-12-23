import { action, observable } from 'mobx';
import { CasperClient, CLPublicKey } from 'casper-js-sdk';
import { NodeResolver } from '@metacask/token-client/dist/node-resolver';
import { getNodes } from '../lib/rest';
import { CASPER_CHAIN } from '../constants/config';

class CasperNetwork {
  @observable nodes = [];

  loading = true;

  balanceCallback = undefined;

  constructor(priceStore) {
    this.priceStore = priceStore;

    getNodes(CASPER_CHAIN)
      .then((n) => {
        this.nodes = n.map((v) => v.id);
        console.log(`Received nodes: ${this.nodes}`);
        this.resolver = new NodeResolver(this.nodes, CASPER_CHAIN);
        this.loading = false;
        if (this.balanceCallback) {
          this.balanceCallback()
            .then((d) => d);
        }
      })
      .catch((e) => {
        console.log(`Failed to get nodes: ${JSON.stringify(e)}`);
        this.loading = false;
      });
  }

  @action.bound getBalance = async (id, resolve, reject) => {
    if (this.loading) {
      this.balanceCallback = async () => this.getNetworkBalance(id, resolve, reject);
    } else {
      this.getNetworkBalance(id, resolve, reject).then((d) => d);
    }
  };

  getNetworkBalance(id, resolve, reject) {
    const client = new CasperClient(this.resolver.getAddress());
    const account = CLPublicKey.fromHex(id);
    return client.balanceOfByPublicKey(account)
      .then((balance) => {
        const cspr = Number(balance._hex) / 10 ** 9;
        resolve({
          tokens: Number(cspr).toFixed(4),
          usd: Number(cspr / this.priceStore.csprUsd).toFixed(2),
          currency: 'CSPR',
          symbol: '/assets/images/icon_casperlab.png',
        });
      })
      .catch((e) => {
        console.log(`Failed to get CSPR balance for: ${id}, ${e}`);
        reject(e);
      });
  }
}

export default (priceStore) => new CasperNetwork(priceStore);
