import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import Divider from '@material-ui/core/Divider';

import ModalLayout from '../ModalLayout';
import Body1 from '../Typography/Body1';
import Body2 from '../Typography/Body2';
import IconWithSpinner from '../Buttons/LoadingButton';
import ToggleSwitch from '../Forms/ToggleSwitch';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3.5),
    paddingTop: theme.spacing(2),
  },
  icon: {
    backgroundColor: theme.palette.info.main,
    marginRight: theme.spacing(2),
    '& .MuiIcon-root': {
      color: theme.palette.text.primary,
    },
  },
  content: {
    flex: 1,
  },
  title: {
    marginBottom: theme.spacing(0.5),
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0',
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  info: {
    paddingTop: theme.spacing(1.5),
  },
}));

const PutOnSaleModal = ({
  isOpen,
  handleClose,
  handleContinue,
}) => {
  const classes = useStyles();

  return (
    <ModalLayout
      title="Put on sale"
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickCancel={handleClose}
      handleClickSubmit={handleContinue}
      submitTitle="Continue"
    >
      <div className={classes.root}>
        <Box
          display="flex"
          marginBottom={2}
        >
          <IconWithSpinner
            className={classes.icon}
            icon={<MonetizationOnOutlinedIcon />}
          />
          <div className={classes.content}>
            <Body1 className={classes.title}>Instant sale price</Body1>
            <Body2 color="secondary">
              Enter the price for which the item will be instanly sold
            </Body2>
          </div>
          <ToggleSwitch size="small" />
        </Box>

        <div className={classes.info}>
          <div className={classes.row}>
            <Body1 color="secondary" component="span">Enter your price</Body1>
            <Body1 component="span">CSPR</Body1>
          </div>
          <Divider className={classes.divider} />
          <div className={classes.row}>
            <Body1 color="secondary" component="span">Service fee</Body1>
            <Body1 component="span">1.5 %</Body1>
          </div>
          <div className={classes.row}>
            <Body1 color="secondary" component="span">Total bid amount</Body1>
            <Body1 component="span">0 CSPR</Body1>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

PutOnSaleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleContinue: PropTypes.func,
};

PutOnSaleModal.defaultProps = {
  handleContinue: () => {},
};

export default PutOnSaleModal;
