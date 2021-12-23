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

const SubTitle1 = forwardRef(({ color, className, ...rest }, ref) => {
  const classes = useStyles({ color });

  return (
    <Typography
      className={clsx(classes.root, className)}
      variant="subtitle1"
      innerRef={ref}
      {...rest}
    />
  );
});

SubTitle1.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
};

SubTitle1.defaultProps = {
  className: '',
  color: 'secondary',
};

export default SubTitle1;
