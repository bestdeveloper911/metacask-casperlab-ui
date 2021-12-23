import React, { useState } from 'react';
import {
  Route, Switch, Redirect, useHistory,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Grid from '@material-ui/core/Grid';

import PageTitle from '../../components/Typography/PageTitle';
import Container from '../../components/Layout/Container';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Wallet from '../../components/Widgets/Wallet';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 79,
    paddingBottom: 138,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: 112,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 51,
      paddingBottom: 63,
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 23,
      lineHeight: '33px',
    },
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 44,
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  arrowIcon: {
    color: theme.palette.text.primary,
    fontSize: 30,
    margin: '0 22px 0 6px',
  },
  container: {
    paddingTop: 80,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 30,
    },
  },
}));

const ConnectWallet = () => {
  const classes = useStyles();
  const history = useHistory();
  const [wallet, setWallet] = useState(1);

  const handleWallet = (index) => {
    setWallet(index);
    history.push(`/connect-wallet/step-${index}`);
  };

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.top}>
          <KeyboardBackspaceIcon className={classes.arrowIcon} />
          <PageTitle className={classes.title}>Connect your wallet</PageTitle>
        </div>

        <Grid
          container
          justify="space-between"
          spacing={4}
          className={classes.container}
        >
          <Grid item md={6} sm={6} xs={12}>
            <Wallet
              handleClick={() => setWallet(0)}
              isActive={wallet === 0}
              title="Huobi Wallet"
              color="purple"
            />
            <Wallet
              handleClick={() => handleWallet(1)}
              isActive={wallet === 1}
              title="Huobi Wallet"
              color="blue"
            />
            <Wallet
              handleClick={() => handleWallet(2)}
              isActive={wallet === 2}
              title="MyEtherWallet"
              color="green"
            />
            <Wallet
              handleClick={() => handleWallet(3)}
              isActive={wallet === 3}
              title="Wallet Connect"
              color="pink"
            />
          </Grid>
          <Grid item md={5} sm={6} xs={12}>
            <Switch>
              <Route
                exact
                path="/connect-wallet"
                render={() => (<Redirect to="/connect-wallet/step-1" />)}
              />

              <Route path="/connect-wallet/step-1">
                <Step1 />
              </Route>
              <Route path="/connect-wallet/step-2">
                <Step2 />
              </Route>
              <Route path="/connect-wallet/step-3">
                <Step3 />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ConnectWallet;
