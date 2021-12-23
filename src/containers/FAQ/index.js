import React from 'react';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CodeIcon from '@material-ui/icons/Code';
import Hidden from '@material-ui/core/Hidden';

import Container from '../../components/Layout/Container';
import PageTitle from '../../components/Typography/PageTitle';
import Caption from '../../components/Typography/Caption';
import Body1 from '../../components/Typography/Body1';
import General from '../../components/FAQs/General';
import EndSoonSection from '../../components/Home/EndSoonSection';
import SelectField from '../../components/Forms/SelectField';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 76,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 132,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 147,
    },
  },
  title: {
    margin: theme.spacing(1, 0, 3),
    [theme.breakpoints.down('xs')]: {
      lineHeight: '55.5px',
    },
  },
  description: {
    maxWidth: 600,
  },
  container: {
    marginTop: theme.spacing(8.175),
    [theme.breakpoints.down('xs')]: {
      marginTop: 25.4,
    },
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    fontSize: 13,
    fontWeight: 700,
    marginBottom: theme.spacing(4.375),
    '& svg': {
      fontSize: 20,
      marginRight: theme.spacing(1.5),
    },
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.text.primary,
    },
    '&.active': {
      color: theme.palette.text.primary,
    },
  },
  row: {
    margin: theme.spacing(0, -4),
  },
  hotBid: {
    paddingTop: 129,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 101,
    },
  },
  menuSelect: {
    width: '100%',
    '& .MuiSelect-root': {
      background: theme.palette.surface[1],
    },
  },
  content: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 8,
    },
  },
}));

const FAQ = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Caption>
          Learn how to get started
        </Caption>
        <PageTitle className={classes.title}>
          Frequently asked questions
        </PageTitle>
        <Body1 className={classes.description}>
          Join Stacks community now to get free updates and also of freebies are waiting for you or&nbsp;
          <Box component="span" color="secondary.main">Contact Support</Box>
        </Body1>

        <Grid
          className={classes.container}
          container
          spacing={4}
        >
          <Grid item md={4} sm={3} xs={12}>
            <Hidden smUp>
              <SelectField className={classes.menuSelect} />
            </Hidden>
            <Hidden xsDown>
              <div className={clsx(classes.menuItem, 'active')}>
                <HomeIcon />
                General
              </div>
              <div className={classes.menuItem}>
                <ChatBubbleIcon />
                Support
              </div>
              <div className={classes.menuItem}>
                <CloudUploadIcon />
                Hosting
              </div>
              <div className={classes.menuItem}>
                <CodeIcon />
                Product
              </div>
            </Hidden>
          </Grid>
          <Grid item md={8} sm={9} className={classes.content}>
            <General />
          </Grid>
        </Grid>

        <div className={classes.row}>
          <EndSoonSection className={classes.hotBid} />
        </div>
      </Container>
    </div>
  );
};

FAQ.propTypes = {
};

FAQ.defaultProps = {
};

export default FAQ;
