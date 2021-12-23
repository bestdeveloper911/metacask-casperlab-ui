import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

const SubTitle2 = forwardRef(({ className, ...rest }, ref) => {
  const classes = useStyles();

  return (
    <Typography
      className={clsx(classes.root, className)}
      variant="subtitle2"
      innerRef={ref}
      {...rest}
    />
  );
});

SubTitle2.propTypes = {
  className: PropTypes.string,
};

SubTitle2.defaultProps = {
  className: '',
};

export default SubTitle2;
