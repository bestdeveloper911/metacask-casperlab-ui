import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import Body2 from '../Typography/Body2';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 10px',
    borderRadius: theme.shape.borderRadius,
    marginBottom: 10,
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.type === 'light' ? theme.palette.surface[1] : theme.palette.surface[0],
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  active: {
    background: theme.palette.surface[0],
  },
  icon: {
    marginRight: 9,
  },
  textAll: {
    color: theme.palette.primary.main,
  },
  all: {
    color: theme.palette.primary.main,
  },
  black: {
    color: theme.palette.common.black,
  },
  green: {
    color: theme.palette.success.main,
  },
  pink: {
    color: theme.palette.error.main,
  },
  purple: {
    color: theme.palette.info.main,
  },
}));

const ColorChip = ({
  label,
  color,
  isActive,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, { [classes.active]: isActive })}>
      {color === 'all' ? (
        <RadioButtonUncheckedIcon className={clsx(classes.icon, classes.all)} />
      ) : (
        <Brightness1Icon className={clsx(classes.icon, classes[color])} />
      )}
      <Body2 className={clsx({ [classes.textAll]: color === 'all' })}>
        {label}
      </Body2>
    </div>
  );
};

ColorChip.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['all', 'black', 'green', 'pink', 'purple']).isRequired,
};

ColorChip.defaultProps = {
  isActive: false,
};

export default ColorChip;
