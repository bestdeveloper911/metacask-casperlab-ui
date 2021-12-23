import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import Body1 from '../Typography/Body1';
import HeaderTitle from '../Typography/HeaderTitle';
import SubTitle1 from '../Typography/Subtitle1';
import Title from '../Typography/Title';
import FilledButton from '../Buttons/FilledButton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  resultCard: {
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
    fontSize: 38,
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
  priceWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  priceInput: {
    width: '100%',
    border: '2px solid #23262f',
    borderRadius: 10,
    marginRight: 15,
    fontSize: 16,
    '& .MuiInputBase-input': {
      textAlign: 'center',
    },
  },
  priceUnit: {
    width: 150,
    border: '2px solid #23262f',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: theme.palette.type === 'light' ? 'black' : 'white',
  },
  bottomButton: {
    width: '100%',
    marginTop: 20,
  },
  spec: {
    color: theme.palette.type === 'light' ? 'black' : 'white',
  },
}));

const BidPriceCard = ({ isBid, onClick }) => {
  const [countDown, setCountDown] = useState(7200);
  const [inputValue, setInputValue] = useState(15000);

  const classes = useStyles();

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCountDown((time) => time - 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const timeCounter = useMemo(() => ({
    hour: (countDown - (countDown % 3600)) / 3600,
    minute: ((countDown % 3600) - ((countDown % 3600) % 60)) / 60,
    second: countDown % 60,
  }), [countDown]);

  const handleChange = (e) => {
    if (/^[0-9]*\.?[0-9]*$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.resultCard}>
        <Body1>
          Current
          { isBid ? 'Bid' : 'Price' }
        </Body1>
        <HeaderTitle className={classes.result}>14,510 CSPR</HeaderTitle>
        <SubTitle1 className={classes.price}>$ 2,031.36</SubTitle1>
        {
          !isBid && (
            <SubTitle1 className={classes.price}>
              <span className={classes.spec}>19 </span>
              Casks left
            </SubTitle1>
          )
        }
        <Body1>Auction ending in</Body1>
        <div className={classes.timeWrapper}>
          <div className={classes.timeItem}>
            <Title className={classes.value}>
              {timeCounter.hour < 10 && '0'}
              {timeCounter.hour}
            </Title>
            <Body1 className={classes.unit}>Hrs</Body1>
          </div>
          <div className={classes.timeItem}>
            <Title className={classes.value}>
              {timeCounter.minute < 10 && '0'}
              {timeCounter.minute}
            </Title>
            <Body1 className={classes.unit}>mins</Body1>
          </div>
          <div className={classes.timeItem}>
            <Title className={classes.value}>
              {timeCounter.second < 10 && '0'}
              {timeCounter.second}
            </Title>
            <Body1 className={classes.unit}>secs</Body1>
          </div>
        </div>
      </div>
      <div className={classes.priceWrapper}>
        <OutlinedInput className={classes.priceInput} value={inputValue} onChange={handleChange} />
        <span className={classes.priceUnit}>
          { isBid ? 'CSPR' : 'CASKS' }
        </span>
      </div>
      <FilledButton
        label={`${isBid ? 'Bid' : 'Buy now'}`}
        size="large"
        handleClick={onClick}
        className={classes.bottomButton}
      />
    </div>
  );
};

BidPriceCard.propTypes = {
  isBid: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BidPriceCard;
