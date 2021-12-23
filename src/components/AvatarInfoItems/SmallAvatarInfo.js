import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Tiny from '../Typography/Tiny';
import Body1 from '../Typography/Body1';
import Body2 from '../Typography/Body2';
import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: '50%',
    marginRight: theme.spacing(1),
    '& img': {
      width: '100%',
      height: 'auto',
      borderRadius: '50%',
    },
  },
  secondary: {
    color: theme.palette.text.secondary,
  },
  title: {
    marginBottom: 7,
    fontWeight: 400,
  },
  smallAvatar: {
    width: 40,
    height: 40,
  },
  mediumAvatar: {
    width: 48,
    height: 48,
    marginRight: theme.spacing(2),
  },
}));

const SmallAvatarInfo = ({
  size,
  className,
  photoName,
  name,
  title,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Avatar
        className={clsx(classes.avatar, {
          [classes.smallAvatar]: size === 'small',
          [classes.mediumAvatar]: size === 'medium',
        })}
        src={`${resourcePath.user}${photoName}`}
      />
      <div>
        {size === 'small' ? (
          <>
            <Tiny className={classes.title}>
              {title}
            </Tiny>
            <Body2>{name}</Body2>
          </>
        ) : (
          <>
            <Body2 className={classes.secondary}>
              {title}
            </Body2>
            <Body1>
              {name}
            </Body1>
          </>
        )}
      </div>
    </div>
  );
};

SmallAvatarInfo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
  className: PropTypes.string,
  photoName: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

SmallAvatarInfo.defaultProps = {
  size: 'small',
  className: '',
  photoName: '',
  name: 'name',
  title: 'title',
};

export default SmallAvatarInfo;
