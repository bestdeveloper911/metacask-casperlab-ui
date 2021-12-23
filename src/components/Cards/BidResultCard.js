import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Body1 from '../Typography/Body1';
import HeaderTitle from '../Typography/HeaderTitle';
import SubTitle1 from '../Typography/Subtitle1';
import Title from '../Typography/Title';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1],
    padding: theme.spacing(4.125, 3),
    borderRadius: theme.shape.lgBorderRadius,
    border: theme.palette.type === 'light' && '2px solid #e6e8ec',
    boxShadow: '0 38px 34px -25px #5552',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  result: {
    fontSize: 46,
    lineHeight: '48px',
  },
  price: {
    marginTop: 5,
    marginBottom: 26,
  },
  timeWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: theme.spacing(25.5),
    width: '100%',
    marginTop: 8,
  },
  timeItem: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  value: {
    fontSize: 32,
    lineHeight: '36px',
    letterSpacing: -2,
    marginBottom: 4,
  },
  unit: {
    fontSize: 17,
    color: theme.palette.text.secondary,
  },
}));

const BidResultCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Body1>Current Bid</Body1>
      <HeaderTitle className={classes.result}>3200 CSPR</HeaderTitle>
      <SubTitle1 className={classes.price}>$ 36183.6</SubTitle1>
      <Body1>Auction ending in</Body1>
      <div className={classes.timeWrapper}>
        <div className={classes.timeItem}>
          <Title className={classes.value}>19</Title>
          <Body1 className={classes.unit}>Hrs</Body1>
        </div>
        <div className={classes.timeItem}>
          <Title className={classes.value}>24</Title>
          <Body1 className={classes.unit}>mins</Body1>
        </div>
        <div className={classes.timeItem}>
          <Title className={classes.value}>19</Title>
          <Body1 className={classes.unit}>secs</Body1>
        </div>
      </div>
    </div>
  );
};

export default BidResultCard;
