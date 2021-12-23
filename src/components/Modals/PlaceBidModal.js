import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';
import SubTitle1 from '../Typography/Subtitle1';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2.5),
    paddingTop: theme.spacing(2),
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(1.5, 0),
  },
  label: {
    letterSpacing: 2,
  },
  subtitle: {
    fontWeight: 500,
    color: theme.palette.text.primary,
    marginTop: 30,
    marginBottom: 17,
  },
}));

const PlaceBidModal = ({
  isOpen,
  handleClose,
  handleClickBid,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      title="Bid"
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
      handleClickSubmit={handleClickBid}
      submitTitle="Bid"
    >
      <div className={classes.root}>
        <Body1>
          You are about to place a bit for
          <span className={classes.label}>&nbsp;CASK from Metacask</span>
        </Body1>
        <SubTitle1 className={classes.subtitle}>
          Your bid
        </SubTitle1>

        <div className={classes.row}>
          <Body1 color="secondary">Enter bid</Body1>
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
          <Body1 color="secondary">Total bid amount</Body1>
          <Body1>0 CSPR</Body1>
        </div>
      </div>
    </ModalLayout>
  );
};

PlaceBidModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleClickBid: PropTypes.func,
};

PlaceBidModal.defaultProps = {
  handleClickBid: () => {},
};

export default PlaceBidModal;
