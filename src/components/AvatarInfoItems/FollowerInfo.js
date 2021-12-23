import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Body1 from '../Typography/Body1';
import Tiny from '../Typography/Tiny';
import FilledButton from '../Buttons/FilledButton';

import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  avatar: {
    width: 88,
    height: 88,
    marginRight: 20,
    [theme.breakpoints.down('xs')]: {
      width: 72,
      height: 72,
      marginRight: 16,
    },
  },
  name: {
    marginBottom: 5,
  },
  info: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
  },
  button: {
    marginTop: 16,
    width: 68,
    [theme.breakpoints.down('xs')]: {
      width: 76,
      marginTop: 0,
    },
  },
}));

const FollowerInfo = ({ follower }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.xs}px)`);

  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        src={`${resourcePath.user}${follower?.avatar}`}
      />
      <div className={classes.info}>
        <div>
          <Body1 className={classes.name}>{follower?.name}</Body1>
          <Tiny>{follower?.comment}</Tiny>
        </div>
        <FilledButton
          className={classes.button}
          label="Follow"
          size={isMobile ? 'medium' : 'small'}
        />
      </div>
    </div>
  );
};

FollowerInfo.propTypes = {
  follower: PropTypes.object.isRequired,
};

FollowerInfo.defaultProps = {
};

export default FollowerInfo;
