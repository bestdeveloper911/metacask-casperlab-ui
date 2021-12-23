import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';
import ErrorAlert from '../Widgets/ErrorAlert';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 15,
    paddingBottom: 31,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(1.5, 0),
  },
  label: {
    letterSpacing: 2,
  },
  info: {
    margin: theme.spacing(4, 0),
  },
}));

const PurchaseCheckOutModal = ({
  isOpen,
  handleClose,
  handleCheckout,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      title="Checkout"
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
      handleClickSubmit={handleCheckout}
      submitTitle="I understand, continue"
    >
      <div className={classes.root}>
        <Body1>
          You are about to purchase
          <span className={classes.label}>&nbsp;CASK&nbsp;</span>
          from Metacask
        </Body1>
        <div className={classes.info}>
          <div className={classes.row}>
            <Body1>0.007</Body1>
            <Body1>CSPR</Body1>
          </div>
          <Divider />
          <div className={classes.row}>
            <Body1 color="secondary">Your balance</Body1>
            <Body1>8498 CSPR</Body1>
          </div>
          <div className={classes.row}>
            <Body1 color="secondary">Service fee</Body1>
            <Body1>0 CSPR</Body1>
          </div>
          <div className={classes.row}>
            <Body1 color="secondary">You will pay</Body1>
            <Body1>7000 CSPR</Body1>
          </div>
        </div>

        <ErrorAlert
          description="Purchase this item at your own risk"
          title="This creator is not verified"
        />
      </div>
    </ModalLayout>
  );
};

PurchaseCheckOutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func,
};

PurchaseCheckOutModal.defaultProps = {
  handleCheckout: () => {},
};

export default PurchaseCheckOutModal;
