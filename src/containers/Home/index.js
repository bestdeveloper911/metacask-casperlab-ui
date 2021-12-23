import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Caption from '../../components/Typography/Caption';

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      paddingTop: 76,
      textAlign: 'center',
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      lineHeight: '47px',
    },
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(10.625),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8.5),
    },
  },
  searchComment: {
    marginBottom: theme.spacing(1),
    fontSize: 30,
  },
  searchBtn: {
    marginTop: 26,
    width: 180,
  },
  buttonGroup: {
    display: 'flex',
    paddingTop: 40,
    '& button:nth-child(1)': {
      marginRight: 15,
    },
    '& button': {
      padding: '0 23px',
      fontSize: 15,
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%',
      '& button': {
        marginBottom: 12,
        width: '100%',
      },
    },
  },
  footerSection: {
    paddingTop: 76,
    paddingBottom: 81,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 74,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 25,
      paddingBottom: 61,
    },
  },
  left: {
    paddingTop: 175,
    width: '43%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 33,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingTop: theme.spacing(5),
      marginBottom: theme.spacing(3.5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  comment: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: 11,
    },
  },
  imageWrapper: {
    width: '57%',
    [theme.breakpoints.down('sm')]: {
      width: '49%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  subHeader: {
    fontSize: 61,
    marginTop: 7,
    letterSpacing: 1.1,
    marginBottom: 24,
    lineHeight: '63px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 45,
      lineHeight: '56px',
    },
  },
  mockSpace: {
    height: 1000,
    textAlign: 'center',
    paddingTop: theme.spacing(10),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.mockSpace}>
      <Caption className={classes.searchComment}>
        COMING SOON
      </Caption>
    </div>
  );
};

export default Home;
