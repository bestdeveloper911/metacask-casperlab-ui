import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import Hidden from '@material-ui/core/Hidden';

import SubHeader from '../../components/Layout/Header/SubHeader';
import Container from '../../components/Layout/Container';
import PageTitle from '../../components/Typography/PageTitle';
import OutlinedButton from '../../components/Buttons/OutlinedButton';
import ActivityCard from '../../components/Cards/ActivityCard';
import FilterChips from '../../components/Filters/FilterChips';
import ActivityFilter from '../../components/Filters/ActivityFilter';

import LoaderIndicator from '../../components/Loader';

import { activities } from '../../constants/dummy.json';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3),
    },
  },
  container: {
    marginTop: 78,
    marginBottom: 140,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 115,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 31,
    },
  },
  pageTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 69,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: 41,
    },
  },
  maskBtn: {
    marginTop: 9,
    width: 139,
    flexShrink: 0,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: 370,
    },
  },
  filters: {
    marginLeft: -10,
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 22,
  },
  iconBtn: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    border: `2px solid ${theme.palette.surface[3]}`,
    color: theme.palette.surface[3],
    padding: 6,
    '&.primary': {
      borderColor: theme.palette.primary.main,
      background: theme.palette.primary.main,
      color: 'white',
    },
  },
  collapseFilter: {
    margin: '5px 0',
    padding: '12px 0 3px',
  },
  left: {
    [theme.breakpoints.only('sm')]: {
      maxWidth: '62.5%',
      flexBasis: '62.5%',
    },
  },
  right: {
    [theme.breakpoints.only('sm')]: {
      maxWidth: '37.5%',
      flexBasis: '37.5%',
    },
  },
}));

const filterItems = ['My activity', 'Following', 'All activity'];

const Activity = () => {
  const classes = useStyles();
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  return (
    <div className={classes.root}>
      <SubHeader />

      <Container className={classes.container}>
        <Grid container justify="space-between" spacing={4}>
          <Grid item md={7} sm={7} xs={12} className={classes.left}>
            <div className={classes.pageTitle}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <PageTitle>Activity</PageTitle>
                <IconButton
                  className={clsx(classes.iconBtn, { primary: isFilterExpanded })}
                  onClick={() => setIsFilterExpanded((prev) => !prev)}
                >
                  {isFilterExpanded ? <CloseIcon /> : <FilterListIcon />}
                </IconButton>
              </Box>
              <Hidden smUp>
                <Collapse
                  className={classes.collapseFilter}
                  in={isFilterExpanded}
                >
                  <ActivityFilter />
                </Collapse>
              </Hidden>
              <OutlinedButton
                className={classes.maskBtn}
                label="Mark as all read"
              />
            </div>

            <FilterChips
              className={classes.filters}
              items={filterItems}
            />

            <Box marginTop="30px">
              {activities.map((activity) => (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                />
              ))}
            </Box>

            <div className={classes.loader}>
              <LoaderIndicator />
            </div>
          </Grid>
          <Hidden xsDown>
            <Grid item md={4} sm={5} xs={12} className={classes.right}>
              <ActivityFilter />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
};

export default Activity;
