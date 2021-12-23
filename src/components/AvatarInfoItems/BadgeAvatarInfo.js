import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

import TinyBold from '../Typography/TinyBold';
import Tiny from '../Typography/Tiny';
import Body1 from '../Typography/Body1';
import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexShrink: 0,
    padding: theme.spacing(3, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 0),
    },
  },
  borderBottom: {
    [theme.breakpoints.up('md')]: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  badge: {
    '& .MuiBadge-anchorOriginTopLeftRectangle': {
      top: 9,
      left: 9,
      width: 24,
      height: 24,
      borderRadius: '50%',
      color: theme.palette.surface[0],
      backgroundColor: theme.palette.text.primary,
      border: `2px solid ${theme.palette.surface[0]}`,
    },
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    marginRight: theme.spacing(2),
    '& img': {
      width: '100%',
      height: 'auto',
      borderRadius: '50%',
    },
  },
  info: {
    paddingTop: 4,
  },
  title: {
    marginBottom: 3,
  },
  price: {
    color: theme.palette.text.primary,
  },
}));

const BadgeAvatarInfo = ({
  isLast,
  user,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, { [classes.borderBottom]: !isLast })}>
      <Badge
        badgeContent={user?.count}
        color="default"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        className={classes.badge}
      >
        <Avatar
          src={`${resourcePath.user}${user?.avatar}`}
          className={classes.avatar}
        />
      </Badge>
      <div className={classes.info}>
        <Body1 className={classes.title}>{user?.title}</Body1>
        <TinyBold component="span" className={classes.price}>
          {user?.price}
          <Tiny component="span">&nbsp;CSPR</Tiny>
        </TinyBold>
      </div>
    </div>
  );
};

BadgeAvatarInfo.propTypes = {
  user: PropTypes.object.isRequired,
  isLast: PropTypes.bool,
};

BadgeAvatarInfo.defaultProps = {
  isLast: false,
};

export default BadgeAvatarInfo;
