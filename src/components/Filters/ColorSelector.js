import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Pane from '../Pane';
import ColorChip from '../Widgets/ColorChip';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 12,
    borderRadius: theme.shape.borderRadius,
    padding: '7px 6px',
    boxShadow: '0 33px 25px -8px #1111',
  },
}));

const ColorSelector = () => {
  const classes = useStyles();

  return (
    <Pane className={classes.root}>
      <ColorChip label="All colors" color="all" />
      <ColorChip label="Black" color="black" />
      <ColorChip label="Green" color="green" isActive />
      <ColorChip label="Pink" color="pink" />
      <ColorChip label="Purple" color="purple" />
    </Pane>
  );
};

ColorSelector.propTypes = {
};

ColorSelector.defaultProps = {
};

export default ColorSelector;
