import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SubHeader from '../../components/Layout/Header/SubHeader';
import Body1 from '../../components/Typography/Body1';
import Tiny from '../../components/Typography/Tiny';
import PageTitle from '../../components/Typography/PageTitle';
import Container from '../../components/Layout/Container';
import UploadItemCard from '../../components/Cards/UploadItemCard';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 78,
    paddingBottom: 107,
  },
  description: {
    letterSpacing: 0,
    fontSize: 15,
    marginTop: 21,
    marginBottom: 82,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
    },
  },
  comment: {
    marginTop: 34,
    marginBottom: 34,
    [theme.breakpoints.down('xs')]: {
      marginTop: 47,
      lineHeight: '19px',
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3.5),
    },
  },
  cardWrapper: {
    [theme.breakpoints.down('xs')]: {
      borderBottom: `1px solid ${theme.palette.surface[2]}`,
    },
  },
}));

const Upload = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SubHeader />

      <Container
        className={classes.container}
        size="small"
      >
        <PageTitle className={classes.title}>Upload item</PageTitle>
        <Body1
          className={classes.description}
          color="secondary"
        >
          Choose&nbsp;
          <Body1 component="span" color="primary">
            “Single”
          </Body1>
          &nbsp;if you want your collectible to be one of a kind or&nbsp;
          <Body1 component="span" color="primary">
            “Multiple”
          </Body1>
          &nbsp;if you want to sell one collectible multiple times
        </Body1>

        <Grid
          container
          spacing={4}
        >
          <Grid item md={6} sm={6} xs={12} className={classes.cardWrapper}>
            <UploadItemCard type="single" />
          </Grid>
          <Grid item md={6} sm={6} xs={12} className={classes.cardWrapper}>
            <UploadItemCard type="multi" />
          </Grid>
        </Grid>

        <Tiny className={classes.comment}>
          We do not own your private keys and cannot access your funds without your confirmation.
        </Tiny>
      </Container>
    </div>
  );
};

Upload.propTypes = {
};

Upload.defaultProps = {
};

export default Upload;
