import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    color: (props) => (theme.palette.text[props.color]),
  },
}));

const Body2 = forwardRef(({ color, className, ...rest }, ref) => {
  const classes = useStyles({ color });

  return (
    <Typography
      className={clsx(classes.root, className)}
      variant="body2"
      innerRef={ref}
      {...rest}
    />
  );
});

Body2.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
};

Body2.defaultProps = {
  className: '',
  color: 'primary',
};

export default Body2;
