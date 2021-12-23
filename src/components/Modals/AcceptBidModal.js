import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';
import SubTitle1 from '../Typography/Subtitle1';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0, 2.5),
  },
  icon: {
    marginRight: theme.spacing(1.75),
    width: 50,
    height: 50,
    background: theme.palette.success.main,
    display: 'inline-block',
    borderRadius: '50%',
    flexShrink: 0,
  },
  title: {
    marginTop: theme.spacing(3.5),
    marginBottom: theme.spacing(2.25),
  },
  label: {
    letterSpacing: 2,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1.5),
  },
  info: {
    paddingTop: theme.spacing(1.75),
  },
}));

const AcceptBidModal = ({
  isOpen,
  handleClose,
  handleSubmit,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
      handleClickSubmit={handleSubmit}
      submitTitle="Accept bid"
    >
      <div className={classes.root}>
        <Box display="flex" alignItems="center">
          <span className={classes.icon} />
          <div>
            <Body1>
              You are about to accept a bid for
            </Body1>
            <Body1>
              <span className={classes.label}>CASK</span>
              &nbsp;from Metacask
            </Body1>
          </div>
        </Box>

        <SubTitle1 className={classes.title} color="primary">
          14600 CSPR for 1 edition
        </SubTitle1>

        <Divider />

        <div className={classes.info}>
          <div className={classes.row}>
            <Body1 color="secondary" component="span">Service fee</Body1>
            <Body1 component="span">0 CSPR</Body1>
          </div>
          <div className={classes.row}>
            <Body1 color="secondary" component="span">Total bid amount</Body1>
            <Body1 component="span">14600 CSPR</Body1>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

AcceptBidModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
};

AcceptBidModal.defaultProps = {
  handleSubmit: () => {},
};

export default AcceptBidModal;
