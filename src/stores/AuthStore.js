/* eslint-disable */
import { Signer } from "casper-js-sdk";
import { observable, action } from 'mobx';

class AuthStore {
  @observable connected = false;

  @observable activeKey = undefined;

  hSignerInt = null;

  constructor(snackbar) {
    this.snackbar = snackbar;
    console.log(`AuthStore;: CTOR: ${this.activeKey} `);
    try {
      window.addEventListener('signer:connected', async (msg) => {
        // this.signerLocked = !msg.detail.isUnlocked;
        this.connected = true;
        this.setActiveKey(msg.detail.activeKey);
        console.log(`}} connected: ${this.connected} --> ${this.activeKey}`);
        // this.handleLogin();
      });
      // nisi: This event is not triggered!
      window.addEventListener('signer:disconnected', msg => {
        // this.signerLocked = !msg.detail.isUnlocked;
        this.connected = false;
        this.setActiveKey(msg.detail.activeKey);
      });
      // // nisi: Not sure what this is
      // window.addEventListener('signer:tabUpdated', msg => {
      //   this.signerLocked = !msg.detail.isUnlocked;
      //   this.connected = msg.detail.isConnected;
      //   this.activeKey = msg.detail.activeKey;
      // });
      window.addEventListener('signer:activeKeyChanged', msg => {
        // this.signerLocked = !msg.detail.isUnlocked;
        // this.connected = msg.detail.isConnected;
        this.setActiveKey(msg.detail.activeKey);
        window.location.href = '/';
        console.log(`}} activeKeyChanged: ${this.connected} --> ${this.activeKey}`);
      });
      window.addEventListener('signer:locked', msg => {
        // this.signerLocked = !msg.detail.isUnlocked;
        // this.actKey = msg.detail.activeKey;
        console.log(`}} locked: ${this.connected} --> ${this.activeKey}`);
      });
      window.addEventListener('signer:unlocked', msg => {
        // this.signerLocked = !msg.detail.isUnlocked;
        this.connected = msg.detail.isConnected;
        this.setActiveKey(msg.detail.activeKey);
        console.log(`}} unlocked: ${this.connected} --> ${this.activeKey}`);
      });
      window.addEventListener('signer:initialState', msg => {
        // this.signerLocked = !msg.detail.isUnlocked;
        if (msg.detail.isConnected) {
          this.connected = msg.detail.isConnected;
        }
        this.setActiveKey(msg.detail.activeKey);
      });
    } catch (e) {
      console.log(e);
    }
    // clearInterval(this.hSignerInt);
    // this.hSignerInt = setInterval(this.checkCasperSigner, 5000);
  }

  setActiveKey = (key) => {
    if (key) {
      this.activeKey = key;
      window.localStorage.setItem('activeKey', key);
    }
  }

  // nisi: This is required to detect the case where the site is deleted
  // in the connections list!
  checkCasperSigner = async () => {
    try {
      const connected = await Signer.isConnected();
      if (this.connected !== connected) {
        this.connected = connected;
        try {
          this.activeKey = await Signer.getActivePublicKey();
        } catch (e) {
          this.activeKey = undefined;
        }
      }
    } catch (err) {
      this.connected = false;
      this.activeKey = undefined;
    }
  }

  @action.bound connectSigner = async() => {
      if (!this.connected) {
        try {
          Signer.sendConnectionRequest();
        } catch (err) {
          console.log(`Failed to connect to Casper Signer: ${err}`);
          if (!window.casperlabsHelper) {
            this.snackbar.showSnackMsg('Please install Casper Signer Extension first!', true);
          }
        }
      }
  };

  /**
   *  Logout
   */
  @action.bound logout() {
    try {
      window.localStorage.removeItem('activeKey');
      Signer.disconnectFromSite();
      window.location.href = '/';
    } catch (e) {
      console.log(`Failed to request disconnect: ${e}`);
    }
  }
}

export default (snackbar) => new AuthStore(snackbar);
