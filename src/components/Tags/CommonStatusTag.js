import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 11,
    borderRadius: 5,
    textTransform: 'uppercase',
    letterSpacing: -0.2,
    fontWeight: 'bold',
    padding: '7px 10px',
    marginRight: 6,
  },
  white: {
    background: 'white',
  },
  info: {
    background: theme.palette.info.main,
    color: theme.palette.info.contrastText,
  },
}));

const CommonStatusTag = ({
  className,
  variant,
  label,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className, {
      [classes.white]: variant === 'white',
      [classes.info]: variant === 'info',
    })}
    >
      {label}
    </div>
  );
};

CommonStatusTag.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['white', 'info']),
  label: PropTypes.string.isRequired,
};

CommonStatusTag.defaultProps = {
  className: '',
  variant: 'white',
};

export default CommonStatusTag;
