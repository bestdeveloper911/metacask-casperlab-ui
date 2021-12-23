import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PublishIcon from '@material-ui/icons/Publish';
import Avatar from '@material-ui/core/Avatar';

import IconWithSpinner from '../Buttons/LoadingButton';
import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';
import Body2 from '../Typography/Body2';
import ErrorAlert from '../Widgets/ErrorAlert';

import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(2.25),
  },
  icon: {
    backgroundColor: theme.palette.surface[2],
    marginRight: theme.spacing(2.5),
    width: theme.spacing(5),
    height: theme.spacing(5),
    '& .MuiIcon-root': {
      color: theme.palette.text.primary,
    },
  },
  title: {
    marginBottom: theme.spacing(0),
  },
  avatar: {
    width: 50,
    height: 50,
  },
}));

const PurchaseStepsModal = ({
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
      handleClickSubmit={handleSuccess}
      submitTitle="I understand, continue"
    >
      <div className={classes.root}>
        <Box
          display="flex"
          alignItems="center"
          marginBottom={4.25}
        >
          <IconWithSpinner
            className={classes.icon}
            icon={<PublishIcon />}
            isLoading
          />
          <div>
            <Body1 className={classes.title}>Accept bid</Body1>
            <Body2 color="secondary">Send transaction with your wallet</Body2>
          </div>
        </Box>

        <ErrorAlert
          description="Purchase this item at your own risk"
          title="This creator is not verified"
          avatar={(
            <Avatar
              className={classes.avatar}
              src={`${resourcePath.user}11.jpg`}
            />
          )}
        />
      </div>
    </ModalLayout>
  );
};

PurchaseStepsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func,
};

PurchaseStepsModal.defaultProps = {
  handleSuccess: () => {},
};

export default PurchaseStepsModal;
