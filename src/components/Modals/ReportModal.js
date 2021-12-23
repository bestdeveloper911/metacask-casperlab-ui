import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';
import InputField from '../Forms/InputField';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3.5),
    paddingTop: theme.spacing(2),
  },
  inputWrapper: {
    marginTop: theme.spacing(3.75),
  },
  input: {
    padding: 15,
  },
}));

const ReportModal = ({
  isOpen,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      title="Report"
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
      submitTitle="Send now"
    >
      <div className={classes.root}>
        <Body1 color="secondary">
          Describe why you think this item should be removed from marketplace
        </Body1>

        <InputField
          wrapperClass={classes.inputWrapper}
          className={classes.input}
          isMulti
          row={4}
          label="Message"
          placeholder="Tell us the details"
        />
      </div>
    </ModalLayout>
  );
};

ReportModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

ReportModal.defaultProps = {
};

export default ReportModal;
