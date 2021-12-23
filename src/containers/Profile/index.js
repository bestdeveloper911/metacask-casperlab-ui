/* eslint-disable */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WallpaperOutlinedIcon from '@material-ui/icons/WallpaperOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import Grid from '@material-ui/core/Grid';

import OutlinedButton from '../../components/Buttons/OutlinedButton';
import Container from '../../components/Layout/Container';
import ProfileSidePane from '../../components/Widgets/ProfileSidePane';
import FilterChips from '../../components/Filters/FilterChips';
import FollowerCard from '../../components/Cards/FollowerCard';
import { followers } from '../../constants/dummy.json';
import MyNFTs from "./MyNFTs";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { STORE_KEYS } from "../../stores";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 228,
    [theme.breakpoints.only('sm')]: {
      paddingBottom: 113,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3),
    },
  },
  banner: {
    background: theme.palette.surface[1],
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.14'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E\")",
    backgroundRepeat: "repeat",
    height: '15vw',
    [theme.breakpoints.down('xs')]: {
      height: '61vw',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'right',
    paddingBottom: 32,
  },
  buttonGroup: {
    '& button': {
      padding: '5px 15px',
      fontSize: 13,
      fontWeight: 'bold',
    },
    '& button:nth-child(1)': {
      marginRight: 20,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: '-5px',
      marginRight: '-5px',
      marginBottom: 55,
      '& button:nth-child(1)': {
        marginRight: 5,
      },
    },
  },
  nav: {
    paddingRight: 24,
    marginTop: -113,
    [theme.breakpoints.only('sm')]: {
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      marginTop: -31,
    },
  },
  icon: {
    fontSize: 14,
    marginTop: 4,
  },
  content: {
    paddingLeft: 40,
    paddingTop: 66,
    [theme.breakpoints.only('sm')]: {
      paddingLeft: theme.spacing(1.75),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingTop: 46,
    },
  },
  filter: {
    marginBottom: 16,
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  filterChip: {
    marginLeft: 0,
    marginRight: 12,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: 4,
    },
  },
  masonry: {
    display: 'flex',
    margin: theme.spacing(0, -1.75),
  },
  gridColumn: {
    margin: theme.spacing(0, 2),
  },
  followers: {
    position: 'relative',
  },
  shadow: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: 70,
    backgroundImage: `linear-gradient(-90deg, ${theme.palette.background.paper}, transparent)`,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Profile = ({ activeKey }) => {
  const classes = useStyles();
  const history = useHistory();
  const { requestedKey } = useParams();

  const [filter, setFilter] = useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <Container className={classes.container}>
          <div className={classes.buttonGroup}>
            <OutlinedButton
              label="Edit profile"
              icon={(
                <BorderColorOutlinedIcon className={classes.icon} />
              )}
              disabled={!(requestedKey || activeKey)}
              handleClick={() => history.push(`/edit/${(requestedKey || activeKey)}`)}
            />
          </div>
        </Container>
      </div>
      <Container>
        <Grid container>
          <Grid item md={3} sm={4} xs={12}>
            <div className={classes.nav}>
              <ProfileSidePane />
            </div>
          </Grid>
          <Grid item md={9} sm={8} xs={12}>
            <div className={classes.content}>
              <FilterChips
                className={classes.filter}
                chipClassName={classes.filterChip}
                variant="light"
                active={filter}
                onChange={setFilter}
                items={['Collection', 'Listed', 'Likes', 'Following', 'Followers']}
              />
              {filter === 0 && (
                <MyNFTs />
              )}
              {filter === 5 && (
                <div className={classes.followers}>
                  {followers?.map((follower) => (
                    <FollowerCard
                      key={follower.id}
                      follower={follower}
                    />
                  ))}
                  <div className={classes.shadow} />
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
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
)(Profile);
