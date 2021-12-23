import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';

import IconWithSpinner from '../Buttons/LoadingButton';
import Body1 from '../Typography/Body1';
import Tiny from '../Typography/Tiny';
import SubmitButton from '../Buttons/SubmitButton';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  content: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    background: `${theme.palette.surface[0]}90`,
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(2.5),
  },
  ready: {
    background: theme.palette.surface[2],
    '& svg': {
      color: theme.palette.surface[3],
    },
  },
  success: {
    background: theme.palette.success.main,
    '& svg': {
      color: 'white',
    },
  },
  failed: {
    border: `2px solid ${theme.palette.error.main}`,
    color: theme.palette.error.main,
  },
  button: {
    width: '100%',
  },
  helperText: {
    marginTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(0.75),
  },
  primary: {
    color: theme.palette.secondary.main,
  },
}));

const FollowStepItem = ({
  status,
  disabled,
  className,
  handleClick,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.content}>
        <IconWithSpinner
          className={clsx(classes.icon, classes[status])}
          icon={status === 'ready' ? (
            <CreateIcon />
          ) : (
            <DoneIcon />
          )}
        />
        <div>
          <Body1 className={classes.title}>Deposit CSPR</Body1>
          <Tiny>Send transaction with your wallet</Tiny>
        </div>
      </div>
      <SubmitButton
        status={status}
        label="Start now"
        size="large"
        className={classes.button}
        handleClick={handleClick}
      />
      {status === 'failed' && (
        <Tiny className={classes.helperText}>
          Something went wrong, please&nbsp;
          <span className={classes.primary}>
            try again
          </span>
        </Tiny>
      )}
      {disabled && <div className={classes.overlay} />}
    </div>
  );
};

FollowStepItem.propTypes = {
  status: PropTypes.oneOf(['ready', 'success', 'failed']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

FollowStepItem.defaultProps = {
  status: 'ready',
  disabled: false,
  className: '',
  handleClick: () => {},
};

export default FollowStepItem;
