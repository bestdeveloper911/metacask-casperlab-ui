import { observable, action } from 'mobx';

class ViewModeStore {
  @observable viewMode = 'balance';

  @observable headMode = 'WALLET'; // TRADE, WALLET, BOT, SETTINGS

  @action.bound setViewMode(mode) {
    this.viewMode = mode;

    if (mode === 'balance' || mode === 'history' || mode === 'exchanges') {
      this.setHeadMode('WALLET');
    } else if (mode === 'tradingview' || mode === 'arbitrage') {
      this.setHeadMode('BOT');
    } else if (mode === 'profile' || mode === 'security') {
      this.setHeadMode('SETTINGS');
    }
  }

  @action.bound setHeadMode(mode) {
    this.headMode = mode;
  }
}

export default () => new ViewModeStore();
