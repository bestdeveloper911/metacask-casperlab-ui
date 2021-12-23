import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import LoaderIndicator from '../Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&.Mui-disabled': {
      background: `${theme.palette.primary.main}a0`,
    },
    boxShadow: 'none',
  },
  spinner: {
    width: 20,
    height: 20,
  },
  success: {
    backgroundColor: theme.palette.surface[2],
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.surface[2],
      color: theme.palette.text.primary,
    },
  },
  failed: {
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.surface[2]}`,
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: 'transparent',
      border: `2px solid ${theme.palette.surface[2]}`,
      color: theme.palette.error.main,
    },
  },
}));

const SubmitButton = ({
  className,
  label,
  size,
  isLoading,
  status,
  handleClick,
}) => {
  const classes = useStyles();
  const text = useMemo(() => {
    if (status === 'success') return 'Done';
    if (status === 'failed') return 'Canceled';
    return label;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Button
      className={clsx(classes.root, className, classes[status])}
      variant="contained"
      color="primary"
      size={size}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <LoaderIndicator className={classes.spinner} />
      ) : text}
    </Button>
  );
};

SubmitButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isLoading: PropTypes.bool,
  handleClick: PropTypes.func,
  status: PropTypes.oneOf(['ready', 'success', 'failed']),
};

SubmitButton.defaultProps = {
  className: '',
  size: 'medium',
  isLoading: false,
  handleClick: () => {},
  status: 'ready',
};

export default SubmitButton;
