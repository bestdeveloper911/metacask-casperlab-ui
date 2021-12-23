import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.hint,
  },
}));

const TinyBold = forwardRef(({ className, ...rest }, ref) => {
  const classes = useStyles();

  return (
    <Typography
      className={clsx(classes.root, className)}
      variant="h5"
      innerRef={ref}
      {...rest}
    />
  );
});

TinyBold.propTypes = {
  className: PropTypes.string,
};

TinyBold.defaultProps = {
  className: '',
};

export default TinyBold;
