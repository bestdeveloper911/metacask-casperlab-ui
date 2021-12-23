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

const Tiny = forwardRef(({ className, ...rest }, ref) => {
  const classes = useStyles();

  return (
    <Typography
      className={clsx(classes.root, className)}
      variant="h6"
      innerRef={ref}
      {...rest}
    />
  );
});

Tiny.propTypes = {
  className: PropTypes.string,
};

Tiny.defaultProps = {
  className: '',
};

export default Tiny;
