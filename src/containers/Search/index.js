import React from 'react';
import Masonry from 'react-masonry-css';
// import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CancelIcon from '@material-ui/icons/Cancel';

import Container from '../../components/Layout/Container';
import FullWidthSearch from '../../components/Filters/FullWidthSearch';
import FilterChips from '../../components/Filters/FilterChips';
import ProductCard from '../common/ProductCard';
import SelectField from '../../components/Forms/SelectField';
import SliderBar from '../../components/Forms/SliderBar';
import ColorSelector from '../../components/Filters/ColorSelector';
import LoadMoreButton from '../../components/Buttons/LoadMoreButton';

import {
  addedOptions, creatorOptions, likesOptions, timeFrameOptions,
} from '../../constants/filter';
import { products } from '../../constants/dummy.json';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 136,
    [theme.breakpoints.down('md')]: {
      paddingTop: 64,
      paddingBottom: 63,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 88,
    },
  },
  masonry: {
    display: 'flex',
    margin: theme.spacing(0, -1.75),
  },
  gridColumn: {
    margin: theme.spacing(0, 2),
  },
  topFilter: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(6, 0),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      margin: theme.spacing(3, 0, 2.75),
    },
  },
  filterWrapper: {
    flexWrap: 'wrap',
  },
  filterChip: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  addedSelect: {
    width: 257,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 25,
      width: '100%',
    },
  },
  select: {
    width: '100%',
    marginTop: 21,
  },
  divider: {
    marginTop: 27,
  },
  divider1: {
    marginTop: 24,
  },
  mainFilter: {
    marginTop: 4,
    paddingRight: 25,
    [theme.breakpoints.down('sm')]: {
      paddingRight: 32,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100% !important',
      paddingRight: 0,
      paddingBottom: 30,
    },
  },
  reset: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.primary,
    fontSize: 13,
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: 25,
    '& svg': {
      marginRight: 10,
    },
  },
  products: {
    paddingLeft: 7,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  productWrapper: {
    padding: theme.spacing(1.5, 1.5, 2.75),
    marginBottom: theme.spacing(4),
    borderRadius: theme.shape.cardBorderRadius,
    backgroundColor: theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1],
    boxShadow: '0 25px 28px 10px #1111',
  },
  loadBtn: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: -1,
  },
}));

const Search = () => {
  const classes = useStyles();
  const theme = useTheme();
  const breakpointColumnsObj = {
    default: 3,
    [theme.breakpoints.values.md]: 2,
    700: 2,
    500: 1,
  };

  return (
    <div className={classes.root}>
      <Container>
        <FullWidthSearch />

        <div className={classes.topFilter}>
          <SelectField
            className={classes.addedSelect}
            options={addedOptions}
            value={addedOptions[0].key}
          />
          <FilterChips
            variant="light"
            className={classes.filterWrapper}
            chipClassName={classes.filterChip}
            items={['All items', 'Art', 'Game', 'Photography', 'Music', 'Video']}
          />
        </div>

        <Grid container>
          <Grid item md={3} sm={4} xs={6} className={classes.mainFilter}>
            <SliderBar />

            <Divider className={classes.divider} />

            <SelectField
              label="LIKES"
              className={classes.select}
              options={likesOptions}
              value={likesOptions[0].key}
            />
            <SelectField
              label="OPEN"
              className={classes.select}
              options={timeFrameOptions}
              value={timeFrameOptions[0].key}
            />

            <ColorSelector />

            <SelectField
              label="CREATOR"
              className={classes.select}
              options={creatorOptions}
              value={creatorOptions[0].key}
            />

            <Divider className={classes.divider1} />

            <div className={classes.reset}>
              <CancelIcon />
              Reset filter
            </div>
          </Grid>
          <Grid item md={9} sm={8} xs={12} className={classes.products}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={classes.masonry}
              columnClassName={classes.gridColumn}
            >
              {products.slice(0, 8).map((product) => (
                <div
                  key={product.id}
                  className={classes.productWrapper}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </Masonry>

            <div className={classes.loadBtn}>
              <LoadMoreButton />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Search.propTypes = {
};

Search.defaultProps = {
};

export default Search;
