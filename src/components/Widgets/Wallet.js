import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CheckIcon from '@material-ui/icons/Check';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import SubTitle1 from '../Typography/Subtitle1';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '30px',
    borderRadius: theme.shape.borderRadius,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    marginBottom: -3,
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5, 0),
    },
  },
  icon: {
    width: 66,
    height: 66,
    borderRadius: '50%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    marginRight: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    [theme.breakpoints.down('xs')]: {
      width: 64,
      height: 64,
      marginRight: 22,
    },
  },
  white: {
    color: theme.palette.common.white,
  },
  active: {
    borderColor: theme.palette.surface[1],
    [theme.breakpoints.down('xs')]: {
      border: 'none',
    },
  },
  activeIcon: {
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
  },
  title: {
    flex: 1,
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: 27,
    letterSpacing: 0.6,
    marginBottom: 5,
    [theme.breakpoints.down('xs')]: {
      fontSize: 17,
    },
  },
  blue: {
    backgroundColor: theme.palette.primary.main,
  },
  green: {
    backgroundColor: theme.palette.success.main,
  },
  pink: {
    backgroundColor: theme.palette.error.main,
  },
  purple: {
    backgroundColor: theme.palette.info.main,
  },
}));

const Wallet = ({
  color,
  isActive,
  title,
  handleClick,
}) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, { [classes.active]: isActive })}
      onClick={handleClick}
    >
      {isActive ? (
        <div className={clsx(classes.icon, classes.activeIcon)}>
          <CheckIcon />
        </div>
      ) : (
        <div className={clsx(classes.icon, classes[color])}>
          <AccountBalanceWalletIcon className={classes.white} />
        </div>
      )}
      <SubTitle1 className={classes.title}>
        {title}
      </SubTitle1>
      {isActive && (<ArrowRightAltIcon className={classes.white} />)}
    </div>
  );
};

Wallet.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf(['green', 'pink', 'purple', 'blue']),
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
};

Wallet.defaultProps = {
  title: '',
  color: 'green',
  isActive: false,
  handleClick: () => {},
};

export default Wallet;
