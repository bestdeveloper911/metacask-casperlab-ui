import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  loader: {
    backgroundColor: 'transparent !important',
  },
}));

const IconWithSpinner = ({
  icon,
  className,
  isLoading,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className, {
      [classes.loader]: isLoading,
    })}
    >
      {isLoading ? (
        <CircularProgress
          className={classes.spinner}
          disableShrink
          size="100%"
        />
      ) : icon}
    </div>
  );
};

IconWithSpinner.propTypes = {
  icon: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

IconWithSpinner.defaultProps = {
  className: '',
  isLoading: false,
};

export default IconWithSpinner;
