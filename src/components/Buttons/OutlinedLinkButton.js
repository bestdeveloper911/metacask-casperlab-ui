import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.surface[3]}`,
    padding: 5,
  },
  icon: {
    '& svg': {
      fontSize: 16,
      marginTop: 4,
    },
  },
  iconEnd: {
    marginLeft: theme.spacing(1),
  },
  iconStart: {
    marginRight: theme.spacing(1),
  },
}));

const OutlinedLinkButton = ({
  className,
  label,
  icon,
  iconPosition,
  action,
}) => {
  const classes = useStyles();

  return (
    <a
      className={clsx(classes.root, className)}
      href={action}
    >
      {iconPosition === 'start' && Boolean(icon) && (
        <span className={clsx(classes.icon, classes.iconStart)}>
          {icon}
        </span>
      )}
      {label}
      {iconPosition === 'end' && Boolean(icon) && (
        <span className={clsx(classes.icon, classes.iconEnd)}>
          {icon}
        </span>
      )}
    </a>
  );
};

OutlinedLinkButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['start', 'end']),
};

OutlinedLinkButton.defaultProps = {
  className: '',
  icon: '',
  iconPosition: 'end',
};

export default OutlinedLinkButton;
