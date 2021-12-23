/* eslint-disable */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import { inject, observer } from 'mobx-react';

import Pane from '../Pane';
import SubTitle1 from '../Typography/Subtitle1';
import Body1 from '../Typography/Body1';
import Tiny from '../Typography/Tiny';
import { STORE_KEYS } from '../../stores';
import { truncateString } from '../../utils';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { CONTENT_API_GATEWAY, CONTENT_BUCKET } from "../../constants/config";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.shape.mdBorderRadius,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    textAlign: 'center',
  },
  avatar: {
    width: 160,
    height: 160,
    background: theme.palette.surface[3],
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: 171,
  },
  name: {
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2),
  },
  address: {
    color: theme.palette.text.hint,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontSize: 'smaller',
  },
  icon: {
    margin: theme.spacing(1, 1, 1, 1),
    fontSize: 20,
    color: theme.palette.text.secondary,
  },
  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: 5,
    },
    '& a': {
      color: theme.palette.text.primary,
      fontWeight: 500,
    },
  },
  bio: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    width: "100%",
    color: theme.palette.text.primary,
    fontSize: 'small',
  },
  sites: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    width: "100%",
  },
  bottom: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(1)
  },
  ts: {
    fontSize: 8
  }
}));

const ProfileSidePane = ({
  id,
  userName,
  bio,
  twitter,
  portfolio,
  registered,
  lastSeen,
}) => {
  const classes = useStyles();
  const { requestedKey } = useParams();

  return (
    <Pane className={classes.root}>
      <Avatar
        className={classes.avatar}
        src={`${CONTENT_API_GATEWAY}/${CONTENT_BUCKET}/${(requestedKey || id)}`}
      />
      <SubTitle1 className={classes.name}>{(userName || '')}</SubTitle1>
      <div className={classes.address}>{truncateString(id, 7, 7)}</div>

      {bio && (
        <div className={classes.bio}>{bio}</div>
      )}

      <ProfileInfoCard/>

      <div className={classes.sites}>
        {twitter && (
          <Link to={`https://twitter.com/${twitter}`}>
            <TwitterIcon className={classes.icon}/>
          </Link>
        )}
        {portfolio && (
          <Link to={portfolio}>
            <LanguageOutlinedIcon className={classes.icon}/>
          </Link>
        )}
      </div>

      <div className={classes.bottom}>
        {lastSeen && (
          <Tiny className={classes.ts}>
            Last seen {new Date(lastSeen).toLocaleDateString()} {new Date(lastSeen).toLocaleTimeString()}
          </Tiny>
        )}
        <Tiny className={classes.ts}>
          Member since {new Date(registered).toLocaleDateString()} {new Date(registered).toLocaleTimeString()}
        </Tiny>
      </div>
    </Pane>
  );
};

ProfileSidePane.propTypes = {
};

export default compose(
  inject(STORE_KEYS.PROFILESTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.PROFILESTORE]: {
         id,
         userName,
         bio,
         twitter,
         portfolio,
         registered,
         lastSeen,
       },
     }) => ({
      id,
      userName,
      bio,
      twitter,
      portfolio,
      registered,
      lastSeen,
    }),
  ),
)(ProfileSidePane);
