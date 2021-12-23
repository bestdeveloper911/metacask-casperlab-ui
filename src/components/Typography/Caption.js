import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
  },
}));

const Caption = forwardRef(({ className, ...rest }, ref) => {
  const classes = useStyles();

  return (
    <Typography
      className={clsx(classes.root, className)}
      variant="caption"
      innerRef={ref}
      {...rest}
    />
  );
});

Caption.propTypes = {
  className: PropTypes.string,
};

Caption.defaultProps = {
  className: '',
};

export default Caption;
