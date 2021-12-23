import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import SelectField from '../Forms/SelectField';
import FilterChips from './FilterChips';
import FilledButton from '../Buttons/FilledButton';
import SliderBar from '../Forms/SliderBar';

import {
  addedOptions,
  priceOptions,
  creatorOptions,
  likesOptions,
} from '../../constants/filter';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 31,
    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  masonry: {
    display: 'flex',
    margin: theme.spacing(0, -1.75),
  },
  gridColumn: {
    margin: theme.spacing(0, 2),
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(4),
    flexWrap: 'wrap',
  },
  filters: {
    marginRight: 79,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: 0,
      marginTop: theme.spacing(4),
      order: 2,
    },
  },
  addedSelect: {
    width: 181,
  },
  subSelect: {
    width: '100%',
  },
  closeBtn: {
    width: 116,
  },
  bottom: {
    paddingTop: 28,
  },
  slider: {
    marginTop: 7,
  },
  hiddenItem: {
    [theme.breakpoints.only('sm')]: {
      display: 'none',
    },
  },
  mobileFilter: {
    width: '100%',
    marginBottom: 13,
  },
}));

const DiscoverFilter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.xs}px)`);

  return (
    <div className={classes.root}>
      {!isMobile ? (
        <>
          <div className={classes.top}>
            <SelectField
              className={classes.addedSelect}
              value={addedOptions[0].key}
              options={addedOptions}
            />
            <FilterChips
              className={classes.filters}
              items={['All items', 'Art', 'Game', 'Photography', 'Music', 'Video']}
            />
            <FilledButton
              className={classes.closeBtn}
              label="Filter"
              size="large"
              icon={<CloseOutlinedIcon />}
            />
          </div>
          <Divider />
          <Grid container spacing={4} className={classes.bottom}>
            <Grid item md={3} sm={4} xs={6}>
              <SelectField
                label="PRICE"
                className={classes.subSelect}
                options={priceOptions}
                value={priceOptions[0].key}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <SelectField
                label="LIKES"
                className={classes.subSelect}
                options={likesOptions}
                value={likesOptions[0].key}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={6} className={classes.hiddenItem}>
              <SelectField
                label="CREATOR"
                className={classes.subSelect}
                options={creatorOptions}
                value={creatorOptions[0].key}
              />
            </Grid>
            <Grid item md={3} sm={4} xs={6}>
              <SliderBar className={classes.slider} />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <SelectField
            className={classes.mobileFilter}
            value={addedOptions[0].key}
            options={addedOptions}
          />
          <SelectField
            className={classes.mobileFilter}
            value={addedOptions[0].key}
            options={addedOptions}
          />
          <FilledButton
            className={classes.mobileFilter}
            label="Advanced Filter"
            size="large"
          />
        </>
      )}
    </div>
  );
};

DiscoverFilter.propTypes = {
};

DiscoverFilter.defaultProps = {
};

export default DiscoverFilter;
