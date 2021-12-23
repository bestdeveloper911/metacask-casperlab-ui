import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import QRCode from 'qrcode.react';

import Title from '../../components/Typography/Title';
import Tiny from '../../components/Typography/Tiny';
import OutlinedButton from '../../components/Buttons/OutlinedButton';

const code = '0x13dF1d8F51324a237552E87cebC3f501baE2e972';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  comment: {
    marginTop: 16,
    marginBottom: 28,
  },
  card: {
    background: theme.palette.surface[1],
    borderRadius: theme.shape.borderRadius,
    padding: 83,
    [theme.breakpoints.down('xs')]: {
      padding: '83px 15px',
      maxWidth: 350,
    },
  },
  codeWrapper: {
    borderRadius: theme.shape.borderRadius,
    padding: '30%',
    background: theme.palette.surface[0],
  },
  btn: {
    marginTop: 21,
    letterSpacing: 0.1,
    width: 200,
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: 350,
    },
  },
}));

const Step2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title>Scan to connect</Title>
      <Tiny className={classes.comment}>Powered by Metacask</Tiny>
      <div className={classes.card}>
        <div className={classes.codeWrapper}>
          <QRCode
            renderAs="svg"
            value={code}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <OutlinedButton
        className={classes.btn}
        size="large"
        label="Don't have a wallet app?"
      />
    </div>
  );
};

Step2.propTypes = {
};

Step2.defaultProps = {
};

export default Step2;
