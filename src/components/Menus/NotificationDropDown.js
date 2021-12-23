import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 23,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  badge: {
    '& .MuiBadge-anchorOriginTopRightRectangle': {
      minWidth: 10,
      height: 12,
      width: 10,
      background: theme.palette.success.main,
      color: theme.palette.success.main,
      top: 7,
      right: 9,
    },
  },
  paper: {
    '& .MuiPopover-paper': {
      borderRadius: theme.shape.cardBorderRadius,
      background: theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1],
      '&::before': {
        content: "''",
        width: 50,
        height: 50,
        borderRadius: 5,
        background: theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1],
        position: 'absolute',
        top: -7,
        left: 'calc(50% - 25px)',
        transform: 'rotate(45deg)',
        zIndex: -1,
        boxShadow: theme.shadows[10],
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        top: -8,
        left: 'calc(50% - 20px)',
        // eslint-disable-next-line max-len
        borderBottom: `13px solid ${theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1]}`,
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        height: 0,
        width: 10,
      },
      [theme.breakpoints.down('xs')]: {
        '&::before, &::after': {
          display: 'none',
        },
      },
    },
  },
  menuContent: {
    minWidth: 395,
    padding: '30px 15px',
    [theme.breakpoints.down('xs')]: {
      minWidth: 0,
    },
  },
  menuTitle: {
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: 0.3,
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 15px',
    marginBottom: 11,
  },
}));

const NotificationDropDown = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={1} color="primary" className={classes.badge}>
        <IconButton>
          <img src="/assets/images/bell.png" alt="bell" />
        </IconButton>
      </Badge>
    </div>
  );
};

export default NotificationDropDown;
