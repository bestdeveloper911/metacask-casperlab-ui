import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.surface[2]}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      color: theme.palette.surface[3],
    },
  },
  medium: {
    padding: 6,
  },
  large: {
    padding: 11,
  },
}));

const IconCircleButton = ({
  className,
  children,
  size,
  handleClick,
}) => {
  const classes = useStyles();

  return (
    <IconButton
      className={clsx(classes.root, classes[size], className)}
      onClick={handleClick}
    >
      {children}
    </IconButton>
  );
};

IconCircleButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['medium', 'large']),
  handleClick: PropTypes.func,
};

IconCircleButton.defaultProps = {
  size: 'medium',
  className: '',
  handleClick: () => {},
};

export default IconCircleButton;
