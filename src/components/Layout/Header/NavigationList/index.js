/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import NavigationItem from './NavigationItem';

const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: 'none',
    display: 'flex',
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(4),
    fontWeight: 700,
    lineHeight: 1.7,
    letterSpacing: 0.7,
    fontSize: 13,
  },
}));

const NavigationList = () => {
  const classes = useStyles();

  return (
    <Box component="ul" className={classes.root}>
      {/*
      <NavigationItem label="Search" path="/search" />
      */}
    </Box>
  );
};
export default NavigationList;
