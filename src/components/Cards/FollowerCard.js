import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import FollowerInfo from '../AvatarInfoItems/FollowerInfo';
import Carousel from '../Carousel';
import ImageWrapper from '../ImageWrapper';

import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px 0 32px',
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: 32,
    [theme.breakpoints.down('sm')]: {
      borderBottom: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
      padding: '15px 0',
    },
  },
  imageWrapper: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.surface[1],
    height: 88,
  },
  carousel: {
    paddingLeft: 60,
    [theme.breakpoints.only('sm')]: {
      paddingLeft: 12,
    },
  },
  contents: {
    marginBottom: 0,
  },
  navContainer: {
    display: 'none',
  },
}));

const FollowerCard = ({ follower }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item md={4} sm={5} xs={12}>
        <FollowerInfo follower={follower} />
      </Grid>
      <Hidden xsDown>
        <Grid item md={8} sm={7}>
          <div className={classes.carousel}>
            <Carousel
              className={classes.contents}
              navContainerClassName={classes.navContainer}
              customOption={{
                responsive: {
                  0: {
                    items: 1,
                  },
                  500: {
                    items: 2,
                  },
                  768: {
                    items: 3,
                  },
                  1200: {
                    items: 4,
                  },
                },
              }}
            >
              {follower && follower.products && follower.products.map((item) => (
                <ImageWrapper
                  key={item}
                  className={classes.imageWrapper}
                  content={`${resourcePath.product}${item}`}
                />
              ))}
            </Carousel>
          </div>
        </Grid>
      </Hidden>
    </Grid>
  );
};

FollowerCard.propTypes = {
  follower: PropTypes.object.isRequired,
};

FollowerCard.defaultProps = {
};

export default FollowerCard;
