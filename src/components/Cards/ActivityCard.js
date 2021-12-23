import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';

import SubTitle2 from '../Typography/Subtitle2';
import Body1 from '../Typography/Body1';
import Tiny from '../Typography/Tiny';
import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.cardBorderRadius,
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.surface[1],
    },
  },
  mediaWrapper: {
    position: 'relative',
  },
  iconWrapper: {
    position: 'absolute',
    top: 0,
    right: -2,
    width: 32,
    height: 32,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.text.primary,
    '& svg': {
      fontSize: 16,
      color: theme.palette.surface[1],
    },
    [theme.breakpoints.down('xs')]: {
      width: 20,
      height: 20,
      top: 1,
      right: 1,
      '& svg': {
        fontSize: 12,
      },
    },
  },
  media: {
    borderRadius: '50%',
    width: 96,
    height: 96,
    background: theme.palette.surface[2],
    [theme.breakpoints.down('xs')]: {
      width: 64,
      height: 64,
    },
  },
  content: {
    flex: 1,
    padding: '0 25px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      padding: '0 0 0 25px',
    },
  },
  hoveredIcon: {
    color: theme.palette.surface[3],
  },
  icon: {
    fontSize: 16,
    color: theme.palette.primary.main,
  },
  description: {
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      lineHeight: '23px',
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      lineHeight: '23px',
      fontWeight: 500,
    },
  },
}));

const ActivityCard = ({ activity }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={classes.root}
      elevation={0}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={classes.mediaWrapper}>
        <CardMedia
          className={classes.media}
          image={`${resourcePath.product}${activity?.product}`}
        />
        <span className={classes.iconWrapper}>
          <SystemUpdateAltOutlinedIcon />
        </span>
      </div>
      <CardContent className={classes.content}>
        <SubTitle2 className={classes.title}>
          {activity?.title}
        </SubTitle2>
        <Body1 className={classes.description}>
          {activity?.description}
        </Body1>
        <Tiny>
          {activity?.date}
        </Tiny>
      </CardContent>
      <CardActions>
        {isHovered
          ? <ChevronRightIcon className={classes.hoveredIcon} />
          : <FiberManualRecordIcon className={classes.icon} />}
      </CardActions>
    </Card>
  );
};

ActivityCard.propTypes = {
  activity: PropTypes.object.isRequired,
};

ActivityCard.defaultProps = {
};

export default ActivityCard;
