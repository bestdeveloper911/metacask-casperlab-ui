import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import OwlCarousel from 'react-owl-carousel3';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(7),
    width: '100%',
    position: 'relative',
  },
  wrapper: {
    width: '100%',
    height: 'auto',
    '& img': {
      height: 'auto',
    },
  },
  nav: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '2px solid transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
      border: `2px solid ${theme.palette.surface[3]}`,
    },
  },
  navContainer: {
    display: 'none',
  },
}));

const Carousel = ({
  className,
  navPrevClassName,
  navNextClassName,
  customOption,
  children,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: false,
    autoplay: true,
    autoplayTimeout: 5,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      [theme.breakpoints.values.md]: {
        items: 3,
      },
      [theme.breakpoints.values.lg]: {
        items: 4,
      },
      [theme.breakpoints.values.xl]: {
        items: 5,
      },
    },
    navText: [
      '',
      '',
    ],
  };

  return (
    <div className={clsx(classes.root, className)}>
      <OwlCarousel
        className="owl-carousel owl-theme"
        navContainerClass={classes.navContainer}
        navClass={[
          clsx(classes.nav, navPrevClassName),
          clsx(classes.nav, navNextClassName),
        ]}
        {...Object.assign(options, customOption)}
      >
        {children}
      </OwlCarousel>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  customOption: PropTypes.object,
  navContainerClassName: PropTypes.string,
  navPrevClassName: PropTypes.string,
  navNextClassName: PropTypes.string,
};

Carousel.defaultProps = {
  className: '',
  customOption: {},
  navContainerClassName: 'owl-nav',
  navPrevClassName: 'owl-prev',
  navNextClassName: 'owl-next',
};

export default Carousel;
