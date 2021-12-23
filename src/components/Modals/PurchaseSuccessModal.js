import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';
import Title from '../Typography/Title';
import IconCircleButton from '../Buttons/IconCircleButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 48,
  },
  top: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 70,
    '& h1': {
      fontSize: 46,
      marginRight: 12,
    },
  },
  label: {
    letterSpacing: 2,
    textDecoration: 'underline',
  },
  infoLabel: {
    color: theme.palette.info.main,
  },
  description: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    maxWidth: '82%',
  },
  info: {
    border: `1px solid ${theme.palette.surface[2]}`,
    padding: theme.spacing(2, 2.875),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(4),
    width: '100%',
  },
  row: {
    padding: theme.spacing(0.75, 0),
    display: 'flex',
    justifyContent: 'space-between',
  },
  sites: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    maxWidth: 250,
    width: '100%',
  },
}));

const PurchaseSuccessModal = ({
  isOpen,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
      isActionShow={false}
    >
      <div className={classes.root}>
        <div className={classes.top}>
          <Title component="h1">Yay!</Title>
          <img src="/assets/images/flower.png" alt="flower" />
        </div>

        <Body1 className={classes.description}>
          You successfully purchased&nbsp;
          <span className={classes.label}>
            CASK
          </span>
          &nbsp;from Metacask
        </Body1>

        <div className={classes.info}>
          <div className={classes.row}>
            <Body1 color="secondary">Status</Body1>
            <Body1 color="secondary">Transaction ID</Body1>
          </div>
          <div className={classes.row}>
            <Body1 className={classes.infoLabel}>Processing</Body1>
            <Body1 color="secondary">0msx836903...87r398</Body1>
          </div>
        </div>

        <Body1 component="span">
          Time to show-off
        </Body1>

        <div className={classes.sites}>
          <IconCircleButton size="large">
            <FacebookIcon />
          </IconCircleButton>
          <IconCircleButton size="large">
            <TwitterIcon />
          </IconCircleButton>
          <IconCircleButton size="large">
            <InstagramIcon />
          </IconCircleButton>
          <IconCircleButton size="large">
            <PinterestIcon />
          </IconCircleButton>
        </div>
      </div>
    </ModalLayout>
  );
};

PurchaseSuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

PurchaseSuccessModal.defaultProps = {
};

export default PurchaseSuccessModal;
