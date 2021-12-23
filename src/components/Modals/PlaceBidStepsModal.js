import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ModalLayout from '../ModalLayout';
import FollowStepItem from '../Widgets/FollowStepItem';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3.75),
  },
}));

const PlaceBidStepsModal = ({
  isOpen,
  handleClose,
  handleSuccess,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      title="Follow steps"
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
      isActionShow={false}
    >
      <div className={classes.root}>
        <FollowStepItem
          className={classes.item}
          status="success"
        />
        <FollowStepItem
          className={classes.item}
          status="failed"
        />
        <FollowStepItem
          handleClick={handleSuccess}
          status="ready"
        />
      </div>
    </ModalLayout>
  );
};

PlaceBidStepsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func,
};

PlaceBidStepsModal.defaultProps = {
  handleSuccess: () => {},
};

export default PlaceBidStepsModal;
