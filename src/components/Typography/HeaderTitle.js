import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    lineHeight: '50px',
  },
}));

const HeaderTitle = forwardRef(({ className, ...rest }, ref) => {
  const classes = useStyles();

  return (
    <Typography
      className={clsx(classes.root, className)}
      variant="h1"
      innerRef={ref}
      {...rest}
    />
  );
});

HeaderTitle.propTypes = {
  className: PropTypes.string,
};

HeaderTitle.defaultProps = {
  className: '',
};

export default HeaderTitle;
