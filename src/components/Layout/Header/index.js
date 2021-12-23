/* eslint-disable */
import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Container from '../Container';
import InputField from '../../Forms/InputField';
import UserDropDown from '../../../containers/common/UserDropDown';
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { STORE_KEYS } from "../../../stores";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.surface[0],
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: theme.layouts.header.height.desktop,
    [theme.breakpoints.down('sm')]: {
      minHeight: theme.layouts.header.height.desktop,
      height: 'auto',
      paddingTop: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      // borderBottom: 'none',
      paddingTop: theme.spacing(2),
    },
  },
  logo: {
    width: theme.layouts.logo.width.desktop,
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    // marginRight: 68,
    [theme.breakpoints.down('sm')]: {
    },
  },
  menuBtn: {
    display: 'none',
    color: theme.palette.surface[3],
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  wrapper: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  menuWrapper: {
    display: 'flex',
    justifyContent: 'right',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: theme.spacing(1),
    },
  },
  logoWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
  },
  rowWrapper: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      width: '100%',
      marginBottom: theme.spacing(2),
    },
  },
  toolWrapper: {
    display: 'flex',
    marginTop: theme.spacing(0.5),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  connectBtn: {
    width: theme.spacing(17.375),
    marginLeft: 11,
  },
  uploadBtn: {
    width: theme.spacing(9.875),
  },
  search: {
    width: theme.spacing(32),
    marginBottom: 3,
  },
}));

const Header = ({ activeKey }) => {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const { requestedKey } = useParams();
  // Disable search for now
  const hasSearch = false;

  const { pathname } = location;
  const isSignUpPage = pathname.startsWith('/signup');

  const [expand, setExpand] = useState(true);

  return (
    <AppBar className={classes.root} position="static" elevation={0}>
      <Container>
        <div className={classes.wrapper}>
          <div className={classes.logoWrapper}>
            <Link to={`/home/${(requestedKey || activeKey)}`} className={classes.logo}>
              <img
                src={`/assets/images/icon-${theme.palette.type}.png`}
                alt="Metacask logo"
                width="100%"
                height="auto"
              />
            </Link>
            <IconButton
              className={classes.menuBtn}
              onClick={() => setExpand((prev) => !prev)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          {!isSignUpPage && (
            <Collapse in={expand}>
              <div className={classes.menuWrapper}>
                {hasSearch && (
                  <div className={classes.rowWrapper}>
                    <InputField
                      size="small"
                      icon={<SearchIcon />}
                      className={classes.search}
                      placeholder="Search"
                    />
                  </div>
                )}
                <div className={classes.rowWrapper}>
                  <UserDropDown />
                </div>
              </div>
            </Collapse>
          )}
        </div>
      </Container>
    </AppBar>
  );
};

export default compose(
  inject(STORE_KEYS.AUTHSTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.AUTHSTORE]: {
         activeKey,
       },
     }) => ({
      activeKey,
    }),
  ),
)(Header);
