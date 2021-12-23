import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    fontSize: 45,
  },
}));

const PageTitle = forwardRef(({ className, ...rest }, ref) => {
  const classes = useStyles();

  return (
    <Typography
      className={clsx(classes.root, className)}
      variant="h2"
      innerRef={ref}
      {...rest}
    />
  );
});

PageTitle.propTypes = {
  className: PropTypes.string,
};

PageTitle.defaultProps = {
  className: '',
};

export default PageTitle;
