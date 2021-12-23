/* eslint-disable */
import React from 'react';
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import {
  Signer,
} from 'casper-js-sdk';

import OutlinedButton from '../../components/Buttons/OutlinedButton';
import {STORE_KEYS} from "../../stores";
import {truncateString} from "../../utils";

const CasperSigner = (props) => {
  const {
    connected, actKey: activeKey, signerLocked, className,
  } = props;

  const connectToSigner = async () => {
    try {
      console.log('>>> SENDING CONNECTION REQUEST');
      Signer.sendConnectionRequest();
    } catch (e) {
      console.log(e);
    }
  }

  return (!signerLocked && activeKey) ? (
    <div>Connected with: { truncateString(activeKey, 3, 3) }</div>
  ) : (
    <OutlinedButton
      className={className}
      label={connected ? "Unlock Wallet" : "Connect Wallet"}
      handleClick={() => connectToSigner()}
    />
  );
};

export default compose(
  inject(STORE_KEYS.AUTHSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.AUTHSTORE]: {
         connected,
         actKey,
         signerLocked,
       },
     }) => ({
      connected,
      actKey,
      signerLocked,
    }),
  ),
)(CasperSigner);
