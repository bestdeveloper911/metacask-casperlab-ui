import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PublishIcon from '@material-ui/icons/Publish';

import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';
import Tiny from '../Typography/Tiny';
import IconWithSpinner from '../Buttons/LoadingButton';
import SubmitButton from '../Buttons/SubmitButton';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0, 0),
  },
  icon: {
    backgroundColor: theme.palette.surface[2],
    marginRight: theme.spacing(2.25),
    '& .MuiIcon-root': {
      color: theme.palette.text.primary,
    },
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  button: {
    width: '100%',
  },
}));

const AcceptBidStartModal = ({
  isOpen,
  handleClose,
}) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ModalLayout
      title="Follow steps"
      isOpen={isOpen}
      handleClose={handleClose}
      isActionShow={false}
    >
      <div className={classes.root}>
        <Box
          display="flex"
          alignItems="center"
          marginBottom={2}
        >
          <IconWithSpinner
            className={classes.icon}
            icon={<PublishIcon />}
            isLoading={isLoading}
          />
          <div>
            <Body1 className={classes.title}>Accept bid</Body1>
            <Tiny>Send transaction with your wallet</Tiny>
          </div>
        </Box>

        <SubmitButton
          className={classes.button}
          size="large"
          label="Start now"
          isLoading={isLoading}
          handleClick={() => setIsLoading(true)}
        />
      </div>
    </ModalLayout>
  );
};

AcceptBidStartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

AcceptBidStartModal.defaultProps = {
};

export default AcceptBidStartModal;
