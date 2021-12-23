import once from 'lodash/once';

import SnackbarStore from './SnackbarStore';
import ViewModeStore from './ViewModeStore';
import AuthStore from './AuthStore';
import ProfileStore from './ProfileStore';
import PriceStore from './PriceStore';
import CasperNetwork from './CasperNetwork';

const SNACKBARSTORE = 'SnackbarStore';
const VIEWMODESTORE = 'ViewModeStore';
const AUTHSTORE = 'AuthStore';
const PROFILESTORE = 'ProfileStore';
const PRICESTORE = 'PriceStore';
const CASPERNETWORK = 'CasperNetwork';

export const STORE_KEYS = {
  SNACKBARSTORE,
  VIEWMODESTORE,
  AUTHSTORE,
  PROFILESTORE,
  PRICESTORE,
  CASPERNETWORK,
};

export default once(() => {
  const snackbarStore = SnackbarStore();
  const viewModeStore = ViewModeStore();
  const authStore = AuthStore(snackbarStore);
  const priceStore = PriceStore();
  const casperNetwork = CasperNetwork(priceStore);
  const profileStore = ProfileStore(casperNetwork);

  return {
    [STORE_KEYS.SNACKBARSTORE]: snackbarStore,
    [STORE_KEYS.VIEWMODESTORE]: viewModeStore,
    [STORE_KEYS.AUTHSTORE]: authStore,
    [STORE_KEYS.PROFILESTORE]: profileStore,
    [STORE_KEYS.PRICESTORE]: priceStore,
    [STORE_KEYS.CASPERNETWORK]: casperNetwork,
  };
});
