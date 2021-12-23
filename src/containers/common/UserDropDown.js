import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { compose, withProps } from 'recompose';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import UserChip from '../../components/AvatarInfoItems/UserChip';
import PopoverMenu from '../../components/PopoverMenu';
import SubTitle1 from '../../components/Typography/Subtitle1';
import Body2 from '../../components/Typography/Body2';
import ProfileInfoCard from '../../components/Cards/ProfileInfoCard';
import TinyBold from '../../components/Typography/TinyBold';
import { STORE_KEYS } from '../../stores';
import { truncateString } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(3.875),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    '& .MuiPopover-paper': {
      background: theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1],
      '&::before': {
        content: "''",
        width: 50,
        height: 50,
        borderRadius: theme.shape.borderRadius,
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
    minWidth: 256,
    padding: '30px 15px 20px',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90vw',
    },
  },
  code: {
    fontWeight: 'bold',
    marginTop: theme.spacing(0.5),
  },
  label: {
    flex: 1,
    fontWeight: 700,
    color: 'inherit',
  },
  menus: {
    paddingTop: theme.spacing(0.75),
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.75, 0),
    color: theme.palette.surface[3],
    borderBottom: `1px solid ${theme.palette.divider}`,
    '& svg': {
      fontSize: 20,
      color: 'inherit',
      marginRight: theme.spacing(1),
    },
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.surface[4],
    },
  },
}));

const UserDropDown = ({
  id,
  userName,
  getUserAccount,
  unregistered,
  logout,
  connected,
  activeKey,
}) => {
  const { requestedKey } = useParams();
  // const location = useLocation();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    console.log(`UDD: Connected: [${activeKey}] ${requestedKey} ${connected}`);
    const key = requestedKey || activeKey;
    if (key) {
      getUserAccount(key);
    }
  }, [activeKey, connected, getUserAccount, requestedKey]);

  const onDisconnect = () => {
    logout();
  };

  return (
    <PopoverMenu
      className={classes.paper}
      anchor={(
        <UserChip />
      )}
      anchorOrigin={{
        vertical: 60,
        horizontal: 30,
      }}
      disable={!(connected || requestedKey || activeKey)}
    >

      {!unregistered && (
        <div className={classes.menuContent}>
          <SubTitle1 color="primary">
            {userName}
          </SubTitle1>
          <Body2
            className={classes.code}
            color="secondary"
          >
            {truncateString(id, 7, 7)}
          </Body2>

          <ProfileInfoCard />

          <div className={classes.menus}>
            <div
              className={classes.menuItem}
              onClick={() => history.push(`/profile/${requestedKey || activeKey}`)}
            >
              <PersonIcon />
              <TinyBold className={classes.label}>My Profile</TinyBold>
            </div>

            <div className={classes.menuItem}>
              <WallpaperIcon />
              <TinyBold className={classes.label}>My items</TinyBold>
            </div>

            <div
              className={classes.menuItem}
              onClick={() => onDisconnect()}
            >
              <ExitToAppIcon />
              <TinyBold className={classes.label}>Disconnect</TinyBold>
            </div>
          </div>
        </div>
      )}
      {unregistered && (
        <div className={classes.menuContent}>
          <SubTitle1 color="primary">
            New User
          </SubTitle1>
          <Body2
            className={classes.code}
            color="secondary"
          >
            {truncateString(id, 7, 7)}
          </Body2>

          <div className={classes.menus}>
            <div
              className={classes.menuItem}
              onClick={() => history.push(`/signup/${requestedKey || activeKey}`)}
            >
              <PersonIcon />
              <TinyBold className={classes.label}>Register</TinyBold>
            </div>

            <div
              className={classes.menuItem}
              onClick={() => onDisconnect()}
            >
              <ExitToAppIcon />
              <TinyBold className={classes.label}>Disconnect</TinyBold>
            </div>
          </div>
        </div>
      )}
    </PopoverMenu>
  );
};

UserDropDown.propTypes = {
  getUserAccount: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default compose(
  inject(STORE_KEYS.PROFILESTORE, STORE_KEYS.AUTHSTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.PROFILESTORE]: {
        id,
        userName,
        get,
        unregistered,
      },
      [STORE_KEYS.AUTHSTORE]: {
        logout,
        connected,
        activeKey,
      },
    }) => ({
      id,
      userName,
      getUserAccount: get,
      unregistered,
      logout,
      connected,
      activeKey,
    }),
  ),
)(UserDropDown);
