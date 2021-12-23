import React from 'react';
import Masonry from 'react-masonry-css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import Container from '../Layout/Container';
import Title from '../Typography/Title';
import DiscoverFilter from '../Filters/DiscoverFilter';
import ProductCard from '../../containers/common/ProductCard';
import LoadMoreButton from '../Buttons/LoadMoreButton';
import Carousel from '../Carousel';

import { products } from '../../constants/dummy.json';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 128,
    paddingBottom: 128,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 113,
      paddingBottom: 112,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 62,
      paddingBottom: 44,
    },
  },
  top: {
    marginBottom: 83,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 67,
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 37,
    },
  },
  masonry: {
    display: 'flex',
    margin: theme.spacing(0, -1.75),
  },
  gridColumn: {
    margin: theme.spacing(0, 2),
  },
  loadBtn: {
    width: 132,
    fontSize: 13,
    letterSpacing: 1,
    '& svg': {
      fontSize: 19,
    },
  },
  productWrapper: {
    marginBottom: 40,
  },
  navContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    width: 100,
    top: '100%',
    left: '50%',
    transform: 'translate(-50%)',
  },
}));

const DiscoverSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.xs}px)`);
  const breakpointColumnsObj = {
    default: 4,
    [theme.breakpoints.values.md]: 3,
    [theme.breakpoints.values.sm]: 2,
    [theme.breakpoints.values.xxs]: 1,
  };

  return (
    <Box component="section" className={classes.root}>
      <Container>
        <div className={classes.top}>
          <Title>Discover</Title>
        </div>

        <DiscoverFilter />

        {!isMobile ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={classes.masonry}
            columnClassName={classes.gridColumn}
          >
            {products.slice(0, 6).map((item) => (
              <div key={item.id} className={classes.productWrapper}>
                <ProductCard product={item} />
              </div>
            ))}
          </Masonry>
        ) : (
          <Carousel navContainerClassName={classes.navContainer}>
            {products.slice(0, 6).map((item) => (
              <div key={item.id} className={classes.productWrapper}>
                <ProductCard product={item} />
              </div>
            ))}
          </Carousel>
        )}

        <Hidden xsDown>
          <Box
            display="flex"
            justifyContent="center"
            marginTop="3px"
          >
            <LoadMoreButton iconPos="right" />
          </Box>
        </Hidden>
      </Container>
    </Box>
  );
};

export default DiscoverSection;
