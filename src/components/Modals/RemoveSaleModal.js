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

const RemoveSaleModal = ({
  isOpen,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      title="Remove from sale"
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
    >
      <div className={classes.root}>
        <Body1 color="secondary">
          Do you really want to remove your item from sale? You can put it on sale anytime
        </Body1>
      </div>
    </ModalLayout>
  );
};

RemoveSaleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

RemoveSaleModal.defaultProps = {
};

export default RemoveSaleModal;
