import { action, observable } from 'mobx';
import { EC_ACCOUNT_NOT_FOUND } from '../constants/error_codes';
import {
  createAccount,
  createSignature,
  getAccount,
  updateAccount,
  uploadFile,
} from '../lib/rest';

class ProfileStore {
  @observable unregistered = true;

  @observable id;

  @observable userName;

  @observable bio;

  @observable portfolio;

  @observable twitter;

  @observable registered;

  @observable lastSeen;

  @observable balance = undefined;

  // @observable myCollectibleTokens;

  // @observable balanceOfCSPR = 0;
  constructor(network) {
    this.network = network;
  }

  @action.bound get = async (id, requireVerification = false) => {
    if (!id) {
      throw Error('No id!');
    }
    console.log(`Getting user account ${id}...`);
    getAccount(id, requireVerification ? await createSignature(id) : {})
      .then((dt) => {
        console.log(`Got account: ${JSON.stringify(dt)}`);
        this.setProperties(dt);
        this.unregistered = false;
        // Get the balance
        this.getBalance(id);
      })
      .catch((e) => {
        console.log(`error: ${JSON.stringify(e)}`);
        this.id = id;
        this.resetProperties();
        if (e && e.code) {
          if (e.code === EC_ACCOUNT_NOT_FOUND) {
            this.userName = 'Unregistered';
            this.unregistered = true;
            return;
          }
        }
        this.unregistered = false;
        this.userName = 'Unknown';
      });
  };

  setProperties = (dt) => {
    this.id = dt.id;
    this.userName = dt.userName;
    this.email = dt.email;
    this.bio = dt.bio;
    this.twitter = dt.twitter;
    this.portfolio = dt.portfolio;
    this.registered = dt.registered;
    this.lastSeen = dt.lastSeen;
  }

  resetProperties = () => {
    this.email = undefined;
    this.userName = undefined;
    this.bio = undefined;
    this.twitter = undefined;
    this.portfolio = undefined;
    this.registered = undefined;
    this.lastSeen = undefined;
  }

  @action.bound getMyCollectibleTokenBalance = () => new Promise((resolve) => {
    resolve(false);
    // getMyCollectibleToken()
    //   .then((response) => {
    //     if (response.status) {
    //       this.myCollectibleTokens = response.tokens || [];
    //       resolve(true);
    //     } else {
    //       console.log('Failed to load profile data.');
    //       this.myCollectibleTokens = [];
    //       resolve(false);
    //     }
    //   })
    //   .catch(() => {
    //     resolve(false);
    //   });
  });

  @action.bound update = (id, params, headers) => new Promise((resolve, reject) => {
    updateAccount(id, params, headers)
      .then((dt) => {
        console.log(`Got updated: ${JSON.stringify(dt)}`);
        this.bio = dt.bio;
        this.portfolio = dt.bio;
        this.twitter = dt.twitter;
        this.lastSeen = dt.lastSeen;
        resolve(dt);
      })
      .catch((e) => {
        console.log(`error: ${JSON.stringify(e)}`);
        reject(e);
      });
  });

  @action.bound signup = async (id, params, headers) => new Promise((resolve, reject) => {
    createAccount(id, params, headers)
      .then((data) => {
        console.log(`Created account: ${JSON.stringify(data)}`);
        this.setProperties(data);
        this.unregistered = false;
        resolve(data);
      })
      .catch((e) => {
        console.log(`error: ${JSON.stringify(e)}`);
        this.id = params.id;
        this.userName = 'Unregistered';
        this.unregistered = true;
        reject(e);
      });
  });

  @action.bound getBalance = (id) => {
    this.network.getBalance(id, (v) => {
      this.balance = v;
      console.log(`Got balance: ${JSON.stringify(this.balance)}`);
    }, () => {
      this.balance = undefined;
    });
  };
  // getCSPRBalance()
  //   .then((response) => {
  //     this.balanceOfCSPR = response?.balance || 0;
  //   });
  // }

  @action.bound uploadProfilePhoto = (file, data, headers) => new Promise((resolve, reject) => {
    console.log(`Uploading file: ${file} > ${JSON.stringify(headers)}`);
    uploadFile(file, data, headers)
      .then((d) => {
        resolve(d);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export default (casperNetwork) => new ProfileStore(casperNetwork);
