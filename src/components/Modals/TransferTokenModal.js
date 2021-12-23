import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';
import SubTitle1 from '../Typography/Subtitle1';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  input: {
    '& input': {
      padding: theme.spacing(2.5, 0, 1.75),
    },
  },
}));

const TransferTokenModal = ({
  isOpen,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      title="Transfer token"
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
      submitTitle="Continue"
    >
      <div className={classes.root}>
        <Body1 color="secondary">
          You can transfer tokens from your address to another
        </Body1>

        <Box marginTop={4} marginBottom={1}>
          <SubTitle1 color="primary">Receiver address</SubTitle1>
          <TextField
            className={classes.input}
            fullWidth
            placeholder="Paste address"
          />
        </Box>
      </div>
    </ModalLayout>
  );
};

TransferTokenModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

TransferTokenModal.defaultProps = {
};

export default TransferTokenModal;
