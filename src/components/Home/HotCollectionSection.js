import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Title from '../Typography/Title';
import Container from '../Layout/Container';
import Carousel from '../Carousel';
import CollectionCard from '../Cards/CollectionCard';

import { collections } from '../../constants/dummy.json';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 128,
    paddingBottom: 68,
    background: theme.palette.surface[1],
    [theme.breakpoints.down('sm')]: {
      paddingTop: 112,
      paddingBottom: 50,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 65,
      paddingBottom: 76,
    },
  },
  top: {
    marginBottom: 84,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 53,
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginBottom: 35,
    },
  },
  navContainer: {
    position: 'absolute',
    top: -109,
    right: 0,
    width: 90,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 108,
      width: '100%',
      top: '106.5%',
      left: '50%',
      transform: 'translate(-50%)',
    },
  },
}));

const HotCollectionSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const responsive = {
    0: {
      items: 1,
    },
    [theme.breakpoints.values.xs]: {
      items: 2,
    },
    [theme.breakpoints.values.sm]: {
      items: 2,
    },
    [theme.breakpoints.values.md]: {
      items: 3,
    },
  };

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.top}>
          <Title>Hot collections</Title>
        </div>
        <Carousel
          navContainerClassName={classes.navContainer}
          customOption={{ responsive, margin: 30 }}
        >
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
            />
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default HotCollectionSection;
