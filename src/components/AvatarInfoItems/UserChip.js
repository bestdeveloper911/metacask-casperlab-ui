/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { truncateString } from '../../utils';
import Avatar from '@material-ui/core/Avatar';
import { compose, withProps } from 'recompose';
import { inject, observer } from 'mobx-react';
import { STORE_KEYS } from '../../stores';
import { useParams } from "react-router-dom";
import { CONTENT_API_GATEWAY, CONTENT_BUCKET } from "../../constants/config";

const CustomChip = withStyles((theme) => ({
  root: {
    height: theme.spacing(5),
    marginLeft: 11,
    '& .MuiChip-avatar': {
      width: 24,
      height: 24,
      marginLeft: 10,
    },
  },
  outlined: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: theme.palette.surface[2],
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}))(Chip);

const UserChip = ({
  connectSigner,
  connected,
  activeKey,
}) => {
  const { requestedKey } = useParams();

  const handleConnect = async () => {
    if (!requestedKey && !activeKey) {
      connectSigner();
    }
  }

  return (
    <CustomChip
      avatar={
        !connected ? (
          <Avatar src={`/assets/images/icon_casperlab.png`}/>
        ) : (
          <Avatar src={`${CONTENT_API_GATEWAY}/${CONTENT_BUCKET}/${(requestedKey || activeKey)}`}/>
        )}
      label={
        (requestedKey || activeKey) ? (
          <span>{truncateString((requestedKey || activeKey), 4, 4)}</span>
        ) : (
          <span>{connected ? "Unlock Account" : "Connect Account"}</span>
        )
      }
      variant="outlined"
      clickable
      onClick={handleConnect}
    />
  );
};

export default compose(
  inject(STORE_KEYS.AUTHSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.AUTHSTORE]: {
         connectSigner,
         connected,
         activeKey,
       },
     }) => ({
      connectSigner,
      connected,
      activeKey,
    }),
  ),
)(UserChip);
