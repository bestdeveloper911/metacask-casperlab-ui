import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ProductCard from '../../containers/common/ProductCard';
import Title from '../Typography/Title';
import Container from '../Layout/Container';
import Carousel from '../Carousel';
import CarouselController from '../Carousel/CarouselController';

import { products } from '../../constants/dummy.json';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.surface[1],
    paddingTop: 100,
    paddingBottom: 82,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 113,
      paddingBottom: theme.spacing(8.25),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 65,
      paddingBottom: 18,
    },
  },
  top: {
    marginBottom: 66,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navContainer: {
    position: 'absolute',
    top: -109,
    right: 0,
    width: 90,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      right: 'auto',
      left: '45%',
    },
  },
  carouselWrapper: {
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      marginRight: -28,
    },
  },
  carousel: {
    minWidth: 530,
  },
}));

const prevClassName = 'hot-bid-prev';
const nextClassName = 'hot-bid-next';

const EndSoonSection = ({ className }) => {
  const classes = useStyles();
  const theme = useTheme();
  const responsive = {
    0: {
      items: 2,
    },
    [theme.breakpoints.values.xs]: {
      items: 2,
    },
    [theme.breakpoints.values.sm]: {
      items: 3,
    },
    [theme.breakpoints.values.md]: {
      items: 4,
    },
  };
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.xs}px)`);

  return (
    <div className={clsx(classes.root, className)}>
      <Container>
        <div className={classes.top}>
          <Title>Ending Soon</Title>
          <CarouselController
            prevName={prevClassName}
            nextName={nextClassName}
          />
        </div>
        <div className={classes.carouselWrapper}>
          <Carousel
            className={classes.carousel}
            navContainerClassName={classes.navContainer}
            navNextClassName={nextClassName}
            navPrevClassName={prevClassName}
            customOption={{
              responsive,
              margin: isMobile ? 15 : 30,
            }}
          >
            {products.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

EndSoonSection.propTypes = {
  className: PropTypes.string,
};

EndSoonSection.defaultProps = {
  className: '',
};

export default EndSoonSection;
