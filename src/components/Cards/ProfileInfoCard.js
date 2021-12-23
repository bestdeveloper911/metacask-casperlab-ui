import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { compose, withProps } from 'recompose';
import { inject, observer } from 'mobx-react';
import { STORE_KEYS } from '../../stores';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 1, 1, 1),
    padding: theme.spacing(1.5, 1.5, 1.5, 1.5),
    boxShadow: theme.shadows[3],
    borderRadius: `${theme.shape.borderRadius}px
    ${theme.shape.borderRadius}px
    ${theme.shape.borderRadius}px
    ${theme.shape.borderRadius}px`,
  },
  top: {
    display: 'flex',
  },
  balanceWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  balance: {
    justifyContent: 'right',
    color: theme.palette.text.primary,
    fontSize: 'medium',
    fontWeight: 'bolder',
  },
  symbol: {
    marginLeft: theme.spacing(1),
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  iconImg: {
    width: 30,
    height: 30,
  },
  conversion: {
    width: '100%',
    display: 'flex',
    justifyContent: 'right',
    color: theme.palette.text.secondary,
    fontSize: 'x-small',
  },
}));

const ProfileInfoCard = ({
  balance,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {balance && (
        <div className={classes.top}>
          <div className={classes.iconWrapper}>
            <img src={balance.symbol} alt={balance.currency} className={classes.iconImg} />
          </div>
          <div className={classes.balanceWrapper}>
            <div className={classes.balance}>
              {balance.tokens}
            </div>
            <div className={classes.conversion}>
              {`${balance.usd} USD`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default compose(
  inject(STORE_KEYS.PROFILESTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.PROFILESTORE]: {
        balance,
      },
    }) => ({
      balance,
    }),
  ),
)(ProfileInfoCard);
