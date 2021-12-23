import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import OutlinedButton from './Buttons/OutlinedButton';
import FilledButton from './Buttons/FilledButton';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '26px 0 16px',
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    lineHeight: '30px',
    margin: 0,
  },
  content: {
    padding: 0,
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    '& button': {
      width: '100%',
      margin: 0,
    },
    '& button:nth-child(2)': {
      marginTop: 8,
    },
  },
  closeBtn: {
    padding: 6,
    border: `2px solid ${theme.palette.surface[1]}`,
    '& svg': {
      color: theme.palette.surface[3],
    },
  },
}));

const CustomDialog = withStyles((theme) => ({
  paper: {
    width: '100%',
    maxWidth: 450,
    borderRadius: theme.shape.cardBorderRadius,
    background: theme.palette.surface[0],
    boxShadow: 'none',
    padding: '5px 33px 31px',
    position: 'relative',
  },
}))(Dialog);

const ModalLayout = ({
  handleClose,
  handleClickSubmit,
  handleClickCancel,
  title,
  submitTitle,
  cancelTitle,
  children,
  variant,
  isActionShow,
  isOpen,
  isSubmitButtonShow,
  isCancelButtonShow,
}) => {
  const classes = useStyles();

  return (
    <CustomDialog
      className={classes.root}
      open={isOpen}
    >
      <div className={classes.titleWrapper}>
        <div>
          {title && (
            <h2 className={classes.title}>{title}</h2>
          )}
        </div>
        <IconButton
          className={classes.closeBtn}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <DialogContent className={classes.content}>
        {children}
      </DialogContent>
      {isActionShow && (
        <div className={classes.actions}>
          {isSubmitButtonShow && (
            <FilledButton
              size="large"
              label={submitTitle}
              handleClick={handleClickSubmit}
              color={variant}
            />
          )}
          {isCancelButtonShow && (
            <OutlinedButton
              size="large"
              label={cancelTitle}
              handleClick={handleClickCancel}
            />
          )}
        </div>
      )}
    </CustomDialog>
  );
};

ModalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isActionShow: PropTypes.bool,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  handleClickSubmit: PropTypes.func,
  handleClickCancel: PropTypes.func,
  isSubmitButtonShow: PropTypes.bool,
  isCancelButtonShow: PropTypes.bool,
  title: PropTypes.string,
  submitTitle: PropTypes.string,
  cancelTitle: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'error']),
};

ModalLayout.defaultProps = {
  handleClose: () => {},
  handleClickSubmit: () => {},
  handleClickCancel: () => {},
  isActionShow: true,
  isOpen: false,
  isSubmitButtonShow: true,
  isCancelButtonShow: true,
  title: '',
  submitTitle: 'Success',
  cancelTitle: 'Cancel',
  variant: 'primary',
};

export default ModalLayout;
