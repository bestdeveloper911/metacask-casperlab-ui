import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '../Layout/Container';
import SubTitle1 from '../Typography/Subtitle1';
import Title from '../Typography/Title';
import SelectField from '../Forms/SelectField';
import SellerCard from '../Cards/SellerCard';
import Carousel from '../Carousel';
import CarouselController from '../Carousel/CarouselController';

import { sellers } from '../../constants/dummy.json';
import { timeFrameOptions } from '../../constants/filter';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    paddingTop: 127,
    paddingBottom: 50,
    background: theme.palette.surface[1],
    [theme.breakpoints.down('sm')]: {
      paddingTop: 111,
      paddingBottom: theme.spacing(11.25),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 62,
      paddingBottom: 42,
    },
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 65,
    [theme.breakpoints.down('xs')]: {
      '& > div:first-child': {
        marginBottom: 19,
      },
      marginBottom: theme.spacing(4),
      flexDirection: 'column',
    },
  },
  subtitle: {
    marginBottom: 4,
  },
  arrowDown: {
    marginLeft: theme.spacing(2),
    fontSize: 28,
    fontWeight: 'bold',
  },
  select: {
    width: 257,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: 400,
    },
  },
  carousel: {
    height: 286,
    minWidth: 450,
    '& .owl-carousel, & .owl-stage-outer': {
      height: '100%',
    },
  },
  carouselOuter: {
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginRight: -28,
    },
  },
  carouselWrapper: {
    overflow: 'hidden',
  },
  carouselController: {
    position: 'absolute',
    top: '39%',
    width: '112.5%',
    left: '-6.5%',
    zIndex: 1,
  },
  smallController: {
    marginTop: -85,
    minWidth: 104,
  },
}));

const prevClassName = 'seller-carousel-prev';
const nextClassName = 'seller-carousel-next';

const SellerSection = () => {
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
      items: 4,
    },
    [theme.breakpoints.values.md]: {
      items: 5,
    },
  };
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.xs}px)`);

  return (
    <div className={classes.root}>
      <Container>
        <>
          <div className={classes.top}>
            <div>
              <SubTitle1 className={classes.subtitle}>Popular</SubTitle1>
              <Title>
                Sellers
                <KeyboardArrowDownIcon className={classes.arrowDown} />
              </Title>
            </div>
            <Box marginTop="3px">
              <SelectField
                className={classes.select}
                label="timeFrame"
                options={timeFrameOptions}
                value={timeFrameOptions[0].key}
              />
            </Box>
          </div>

          <div className={classes.carouselOuter}>
            <div className={classes.carouselWrapper}>
              <Carousel
                className={classes.carousel}
                navContainerClassName={classes.navContainer}
                navPrevClassName={prevClassName}
                navNextClassName={nextClassName}
                customOption={{
                  responsive,
                  margin: isMobile ? 8 : 30,
                }}
              >
                {sellers.map((seller) => (
                  <SellerCard
                    key={seller.id}
                    seller={seller}
                  />
                ))}
              </Carousel>
            </div>
            <Hidden smDown>
              <CarouselController
                className={classes.carouselController}
                prevName={prevClassName}
                nextName={nextClassName}
              />
            </Hidden>
          </div>

          <Hidden smUp>
            <Box display="flex" justifyContent="center">
              <CarouselController
                className={classes.smallController}
                prevName={prevClassName}
                nextName={nextClassName}
              />
            </Box>
          </Hidden>
        </>
      </Container>
    </div>
  );
};

export default SellerSection;
