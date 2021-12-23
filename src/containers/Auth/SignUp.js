/* eslint-disable */
import React, {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import { makeStyles } from '@material-ui/core/styles';
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import { useHistory, useLocation, useParams } from 'react-router-dom';

import InputField from "../../components/Forms/InputField";
import SubTitle1 from "../../components/Typography/Subtitle1";
import {STORE_KEYS} from "../../stores";
import {validateEmail} from "../../utils";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import Tiny from "../../components/Typography/Tiny";
import Box from "@material-ui/core/Box";
import { EC_ACCOUNT_DETAILS_EXISTS, EC_ACCOUNT_EXISTS, EC_NOT_ALLOWED } from "../../constants/error_codes";
import { createSignature } from "../../lib/rest";
import FilledButton from "../../components/Buttons/FilledButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 'auto',
  },
  title: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
    color: 'white',
  },
  input: {
    marginTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(4),
    width: 200,
    height: 30,
    margin: 'auto',
  },
  select: {
    marginBottom: theme.spacing(3),
    width: '100%',
  },
  item: {
    padding: `${theme.spacing(1, 2)} !important`,
  },
  agree: {
    color: theme.palette.text.primary,
  },
  accountKey: {
    marginTop: theme.spacing(2),
  },
}));

const SignUp = ({
  showSnackMsg,
  signup,
  connectSigner,
  connected,
  activeKey
}) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { requestedKey } = useParams();

  const { pathname, search } = location;

  // console.log(`Using offer code: ${offerCode}`);
  // if (offerCode !== 'NTY3MDEyMzQ1Njc4OTA') {
  //   window.location.href = '/';
  // }

  const [name, setName] = useState(''); // This is username
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (connected && (requestedKey || activeKey)) {
      console.log(`Ready to create account...`);
      if (isLoading) {
        // Now create the account
        createAccount().then(r => r);
      }
    }
  }, [connected, activeKey, isLoading]);

  const handleChangeName = (e) => {
    setName(e.target.value || '');
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value || '');
  };

  const onRegister = async () => {
    if (name.trim().length === 0 || email.trim().length === 0) {
      showSnackMsg('Please enter user name and email!', true);
      return;
    }
    if (!validateEmail(email)) {
      showSnackMsg('Invalid email format!', true);
      return;
    }
    setIsLoading(true);
    // First need to make sure we are connected
    if (!connected) {
      connectSigner();
    // } else {
    //   // Attempt co create the account
    //   createAccount().then(r => r);
    }
  };

  const createAccount = async() => {
    let offerCode = null;
    const searchStr = search.split('?offer=');
    if (searchStr[1]) {
      offerCode = searchStr[1];
    }
    signup((requestedKey || activeKey), { userName: name, email, referralId: offerCode }, await createSignature())
      .then((v) => {
        showSnackMsg('Created your account!');
        history.push(`/profile/${(requestedKey || activeKey)}`);
      })
      .catch((e) => {
        console.log(`Got error: ${JSON.stringify(e)}`);

        if (e.code) {
          switch (e.code) {
            case EC_ACCOUNT_EXISTS: {
              showSnackMsg('Account already registered!', true);
              break;
            }
            case EC_ACCOUNT_DETAILS_EXISTS: {
              showSnackMsg('Email or username already registered!', true);
              break;
            }
            case EC_NOT_ALLOWED: {
              showSnackMsg('Not allowed to create account!', true);
              break;
            }
            default: {
              showSnackMsg('Failed to create account!', true);
              break;
            }
          }
        } else {
          showSnackMsg('Failed to create account!', true);
        }
        setIsLoading(false);
      });
  };

  return (
    <div className={classes.root}>
      <SubTitle1
        className={classes.title}
      >
        Connect Your Account
      </SubTitle1>
      <Box>
        {(requestedKey || activeKey) && (<Tiny className={classes.accountKey}>{(requestedKey || activeKey)}</Tiny>)}
      </Box>
      <InputField
        value={name}
        className={classes.input}
        placeholder="Username"
        onChange={handleChangeName}
      />
      <InputField
        value={email}
        className={classes.input}
        placeholder="Email"
        onChange={handleChangeEmail}
      />
      <FilledButton
        className={classes.button}
        label="Register"
        size="medium"
        handleClick={onRegister}
        disabled={isLoading}
        isLoading={isLoading}
      />
    </div>
  );
};

export default compose(
  inject(STORE_KEYS.SNACKBARSTORE, STORE_KEYS.PROFILESTORE, STORE_KEYS.AUTHSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.SNACKBARSTORE]: {
         showSnackMsg,
       },
       [STORE_KEYS.PROFILESTORE]: {
         signup,
       },
       [STORE_KEYS.AUTHSTORE]: {
         connectSigner,
         connected,
         activeKey,
       },
     }) => ({
      showSnackMsg,
      signup,
      connectSigner,
      connected,
      activeKey,
    }),
  ),
)(SignUp);
