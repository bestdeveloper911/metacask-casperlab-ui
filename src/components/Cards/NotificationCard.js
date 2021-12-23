import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import Body1 from '../Typography/Body1';
import Body2 from '../Typography/Body2';
import Tiny from '../Typography/Tiny';
import ImageWrapper from '../ImageWrapper';

import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    marginBottom: 4,
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.surface[2],
    },
  },
  content: {
    flex: 1,
    padding: theme.spacing(0, 3),
  },
  image: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.surface[2],
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: 18,
    margin: 'auto 0',
  },
  date: {
    marginTop: theme.spacing(0.5),
  },
}));

const NotificationCard = ({ notification }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageWrapper
        className={classes.image}
        content={`${resourcePath.product}${notification?.image}`}
      />
      <div className={classes.content}>
        <Body1>{notification?.title}</Body1>
        <Body2>{notification?.comment}</Body2>
        <Tiny className={classes.date}>2 days ago</Tiny>
      </div>
      <FiberManualRecordIcon className={classes.icon} />
    </div>
  );
};

NotificationCard.propTypes = {
  notification: PropTypes.object.isRequired,
};

NotificationCard.defaultProps = {
};

export default NotificationCard;
