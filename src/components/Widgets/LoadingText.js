import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import LoaderIndicator from '../Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.primary,
    fontWeight: 500,
    letterSpacing: 1,
    fontSize: 15,
  },
  indicator: {
    marginLeft: 14,
  },
}));

const LoadingText = ({
  className,
  isLoading,
  label,
}) => {
  const classes = useStyles();

  return isLoading ? (
    <div className={clsx(classes.root, className)}>
      {label}
      <LoaderIndicator className={classes.indicator} />
    </div>
  ) : null;
};

LoadingText.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  label: PropTypes.string,
};

LoadingText.defaultProps = {
  className: '',
  isLoading: false,
  label: 'Loading',
};

export default LoadingText;
