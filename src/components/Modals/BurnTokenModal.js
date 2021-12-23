import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(2),
  },
}));

const BurnTokenModal = ({
  isOpen,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      title="Burn token"
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
      variant="error"
      submitTitle="Continue"
    >
      <div className={classes.root}>
        <Body1 color="secondary">
          Are you sure to burn this token? This action cannot be undone. Token will be transferred to zero address
        </Body1>
      </div>
    </ModalLayout>
  );
};

BurnTokenModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

BurnTokenModal.defaultProps = {
};

export default BurnTokenModal;
