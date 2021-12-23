import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceWalletSharpIcon from '@material-ui/icons/AccountBalanceWalletSharp';

import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  iconWrapper: {
    width: 80,
    height: 80,
    background: theme.palette.info.main,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    '& svg': {
      color: theme.palette.info.contrastText,
    },
  },
}));

const PlaceBidConnectWalletModal = ({
  isOpen,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      submitTitle="Connect wallet"
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
    >
      <div className={classes.root}>
        <div className={classes.iconWrapper}>
          <AccountBalanceWalletSharpIcon />
        </div>
        <Body1>
          You need to connect your wallet first to sign messages and send transaction to Ethereum network
        </Body1>
      </div>
    </ModalLayout>
  );
};

PlaceBidConnectWalletModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

PlaceBidConnectWalletModal.defaultProps = {
};

export default PlaceBidConnectWalletModal;
