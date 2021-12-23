import { action, observable } from 'mobx';

class PriceStore {
  @observable lastUpdate = new Date().getTime();

  @observable csprUsd = 1;

  constructor() {
    this.getCoinPriceRequest();
  }

  @action.bound getCoinPriceRequest = () => {

    // getCoinPrice()
    //   .then((data) => {
    //     this.rateOfCSPR = data.rate || 0;
    //   });
  };
}

export default () => new PriceStore();
