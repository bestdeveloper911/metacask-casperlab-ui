/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory, useParams } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';

import SubHeader from '../../components/Layout/Header/SubHeader';
import PageTitle from '../../components/Typography/PageTitle';
import Body1 from '../../components/Typography/Body1';
import Body2 from '../../components/Typography/Body2';
import OutlinedButton from '../../components/Buttons/OutlinedButton';
import InputField from '../../components/Forms/InputField';
import FilledButton from '../../components/Buttons/FilledButton';
import Container from '../../components/Layout/Container';
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { STORE_KEYS } from "../../stores";
import { createSignature } from "../../lib/rest";
import { validateEmail } from "../../utils";
import { EC_ACCOUNT_DETAILS_EXISTS, EC_ACCOUNT_EXISTS, EC_NOT_ALLOWED } from "../../constants/error_codes";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { CONTENT_API_GATEWAY, CONTENT_BUCKET } from "../../constants/config";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(5.75),
    },
  },
  container: {
    padding: '78px 15px 136px',
    [theme.breakpoints.down('sm')]: {
      padding: '61px 15px 136px',
    },
  },
  title: {
    marginTop: theme.spacing(5),
  },
  description: {
    letterSpacing: 0,
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
  },
  primary: {
    color: theme.palette.text.primary,
  },
  userInfo: {
    marginBottom: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
    },
  },
  avatar: {
    width: 128,
    height: 128,
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      width: 64,
      height: 64,
    },
  },
  info: {
    padding: '0 30px 0 7px',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 0.25),
    },
  },
  label: {
    fontWeight: 500,
    marginBottom: theme.spacing(0.5),
  },
  uploadBtn: {
    marginTop: theme.spacing(1.25),
    float: 'right',
    color: theme.palette.text.primary,
    border: '1px solid #fff',
    padding: '8px 20px',
    borderRadius: 20,
    cursor: 'pointer',
  },
  secondary: {
    color: theme.palette.text.secondary,
  },
  edit: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      marginTop: theme.spacing(1),
    },
  },
  formWrapper: {
    marginTop: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
    },
  },
  buttonGroup: {
    width: '100%',
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: 'right',
    // width: '100%',
    // marginTop: theme.spacing(2),
    // '& button:nth-child(1)': {
    //   marginRight: theme.spacing(2),
    // },
    // '& button:nth-child(2)': {
    //   color: theme.palette.text.secondary,
    //   '& svg': {
    //     marginRight: theme.spacing(1),
    //   },
    // },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
  },
}));

const EditProfile = ({
  activeKey,
  connected,
  connectSigner,
  userName,
  bio,
  portfolio,
  twitter,
  updateUserAccount,
  showSnackMsg,
  unregistered,
  signup,
  uploadProfilePhoto,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const { requestedKey } = useParams();

  const [email, setEmail] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newBio, setBio] = useState('');
  const [newTwitter, setTwitter] = useState('');
  const [newPortfolio, setPortfolio] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const [file, setFile] = useState(undefined);
  const [avatar, setAvatar] = useState(`${CONTENT_API_GATEWAY}/${CONTENT_BUCKET}/${(requestedKey || activeKey)}`)


  useEffect(() => {
    if (connected && (requestedKey || activeKey)) {
      if (isLoading) {
        // Now create the account
        console.log(`Account action: ${unregistered}`);

        if (unregistered) {
          createAccount().then(r => r);
        } else {
          updateAccount().then(r => r);
        }
      }
      if (imgLoading) {
        // Now create the account
        console.log(`Uploading avatar: ${file.type} ${file.size}`);
        uploadFile().then(r => r);
      }
    }
  }, [connected, activeKey, isLoading, imgLoading]);

  useEffect(() => {
    console.log(`Avatar: ${avatar}`);
  }, [avatar]);

  useEffect(() => {
    if (bio) {
      setBio(bio);
    }
  }, [bio]);

  useEffect(() => {
    if (twitter) {
      setTwitter(twitter);
    }
  }, [twitter]);

  useEffect(() => {
    if (portfolio) {
      setPortfolio(portfolio);
    }
  }, [portfolio]);

  const handleUpdateAccount = async () => {
    setIsLoading(true);
    // First need to make sure we are connected
    if (!connected) {
      connectSigner().then((r) => r);
    // } else {
    //   updateAccount().then(r => r);
    }
  };

  const updateAccount = async () => {
    const params = {
      bio: newBio,
      twitter: newTwitter,
      portfolio: newPortfolio,
    }
    updateUserAccount((requestedKey || activeKey), params, await createSignature())
      .then(() => {
        showSnackMsg('Account updated!');
        history.push(`/profile/${(requestedKey || activeKey)}`);
      })
      .catch((e) => {
        setIsLoading(false);
        showSnackMsg('Account could not be updated!', true);
      })
  };

  const handleRegisterAccount = async () => {
    if (newUserName.trim().length === 0 || email.trim().length === 0) {
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
      connectSigner().then((r) => r);
    // } else {
    //   createAccount().then(r => r);
    }
  };

  const createAccount = async() => {
    const params = {
      userName: newUserName,
      email: email,
      bio: newBio,
      twitter: newTwitter,
      portfolio: newPortfolio,
    }
    signup((requestedKey || activeKey), params, await createSignature())
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

  const handleBioChange = (e) => {
    setBio(e.target.value || '');
  };

  const handlePortfolioChange = (e) => {
    setPortfolio(e.target.value || '');
  };

  const handleTwitterChange = (e) => {
    setTwitter(e.target.value || '');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value || '');
  };

  const handleUserNameChange = (e) => {
    setNewUserName(e.target.value || '');
  };

  const handleFile = async (e) => {
    if (e.target.files[0]?.size < 1e7) {
      try {
        setFile(e.target.files[0]);
        setImgLoading(true);
        // First need to make sure we are connected
        if (!connected) {
          connectSigner().then((r) => r);
          // } else {
          //   createAccount().then(r => r);
        }
      } catch (e) {
        console.log(`Error processing file: ${e}`);
        showSnackMsg('Cannot upload file!', true);
        setImgLoading(false);
      }
    } else {
      showSnackMsg("Image should be less than 10MB", true);
      setImgLoading(false);
    }
  };

  const uploadFile = async () => {
    const extension = file.type.replace(/(.*)\//g, '');
    const fileName = `${(requestedKey || activeKey)}`;
    const sig = await createSignature();
    uploadProfilePhoto(fileName, file, {
      headers: {
        'Content-Type': file.type,
        ...sig.headers
      }
    })
      .then((d) => {
          showSnackMsg("Updated avatar!");
          setImgLoading(false);
          setAvatar(`${CONTENT_API_GATEWAY}/${CONTENT_BUCKET}/${(requestedKey || activeKey)}`);
      })
      .catch((e) => {
        console.log(`Got error: ${JSON.stringify(e)}`);
        showSnackMsg("Failed to update avatar!");
        setImgLoading(false);
      });
  };

  return (
    <div className={classes.root}>
      <SubHeader/>

      <Container
        className={classes.container}
        size="small"
      >
        {!unregistered && userName && (
          <PageTitle className={classes.title}>Profile of {userName}</PageTitle>
        )}
        {unregistered && (
          <PageTitle className={classes.title}>Please Register</PageTitle>
        )}
        <Body1 className={classes.description}>
          Reveal what you would like the world to know!
        </Body1>

        <Grid container className={classes.content}>
          <Grid container item md={6} sm={12} className={classes.userInfo}>
            <Grid item md={5} xs={3}>
              <Avatar
                className={classes.avatar}
                src={avatar}
              />
            </Grid>
            <Grid item md={7} sm={5} xs={9}>
              <div className={classes.info}>
                <Body1 className={classes.label}>Profile photo</Body1>
                <Body2 className={classes.secondary}>
                  We recommend an image of at least 400*400.
                </Body2>
                <input
                  accept="image/png,image/jpeg,image/gif"
                  id="upload-file"
                  type="file"
                  onChange={handleFile}
                  hidden
                />
                <label htmlFor="upload-file">
                  <Button
                    variant="outlined"
                    component="span"
                    className={classes.uploadBtn}
                    size="medium"
                    color="primary"
                    disabled={isLoading}
                  >
                    {imgLoading ? (
                      <CircularProgress
                        size={24}
                      />
                    ) : (
                      <CloudUploadIcon />
                    )}
                  </Button>
                </label>
              </div>
            </Grid>
          </Grid>

          <Grid item md={6} sm={12}>
            <Grid container spacing={4} className={classes.edit}>
              <Grid item md={12} sm={6} xs={12} className={classes.section}>
                <Body1 className={classes.label}>Account info</Body1>
                {unregistered && (
                  <div>
                    <InputField
                      wrapperClass={classes.formWrapper}
                      label="Username"
                      placeholder="Username"
                      value={newUserName}
                      onChange={handleUserNameChange}
                    />
                    <InputField
                    wrapperClass={classes.formWrapper}
                    label="Email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    />
                  </div>
                )}

                <InputField
                  wrapperClass={classes.formWrapper}
                  label="Bio"
                  isMulti
                  placeholder="About yourself in a few words"
                  value={newBio}
                  onChange={handleBioChange}
                />
              </Grid>
              <Grid item md={12} sm={6} xs={12} className={classes.section}>
                <Body1 className={classes.label}>Social</Body1>
                <InputField
                  wrapperClass={classes.formWrapper}
                  label="Website"
                  placeholder="Enter URL"
                  value={newPortfolio}
                  onChange={handlePortfolioChange}
                />

                <InputField
                  wrapperClass={classes.formWrapper}
                  label="Twitter"
                  placeholder="@twitter username"
                  value={newTwitter}
                  onChange={handleTwitterChange}
                />
              </Grid>

              <div className={classes.buttonGroup}>
                {!unregistered && (
                  <FilledButton
                    label="Update Profile"
                    size="medium"
                    handleClick={handleUpdateAccount}
                    isLoading={isLoading}
                    disabled={imgLoading}
                  />
                )}
                {unregistered && (
                  <FilledButton
                    label="Register"
                    size="medium"
                    handleClick={handleRegisterAccount}
                    isLoading={isLoading}
                    disabled={imgLoading}
                  />
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default compose(
  inject(STORE_KEYS.SNACKBARSTORE, STORE_KEYS.AUTHSTORE, STORE_KEYS.PROFILESTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.AUTHSTORE]: {
         activeKey,
         connected,
         connectSigner
       },
       [STORE_KEYS.PROFILESTORE]: {
         userName,
         bio,
         portfolio,
         twitter,
         update,
         unregistered,
         signup,
         uploadProfilePhoto,
       },
       [STORE_KEYS.SNACKBARSTORE]: {
         showSnackMsg,
       }
     }) => ({
      activeKey,
      connected,
      connectSigner,
      userName,
      bio,
      portfolio,
      twitter,
      updateUserAccount: update,
      showSnackMsg,
      unregistered,
      signup,
      uploadProfilePhoto,
    }),
  ),
)(EditProfile);
