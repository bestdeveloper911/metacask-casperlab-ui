import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

import Body2 from '../Typography/Body2';
import Caption from '../Typography/Caption';

const useStyles = makeStyles((theme) => ({
  label: {
    marginBottom: 9,
  },
  sliderWrapper: {
    marginTop: -4,
    position: 'relative',
  },
  subSlider: {
    '& .MuiSlider-thumb': {
      display: 'none',
    },
    position: 'absolute',
    transformOrigin: 'left',
  },
  sliderTop: {
    transform: 'rotate(-1.1deg)',
  },
  sliderTopMiddle: {
    transform: 'rotate(-0.5deg)',
  },
  sliderBottomMiddle: {
    transform: 'rotate(0.5deg)',
  },
  sliderBottom: {
    transform: 'rotate(1.1deg)',
  },
  circle: {
    position: 'absolute',
    top: 'calc(50% - 9px)',
    right: -4,
    width: 15,
    height: 14,
    borderRadius: '50%',
    background: theme.palette.surface[2],
  },
}));

const CustomSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    height: 5,
    borderRadius: '50%',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: theme.palette.primary.main,
    border: '4px solid #fff',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 5,
    borderRadius: 8,
  },
  rail: {
    height: 5,
    borderRadius: 8,
    background: theme.palette.surface[2],
    opacity: 1,
  },
}))(Slider);

const CustomTooltip = withStyles((theme) => ({
  popper: {
    top: '5px !important',
    '&::after': {
      content: "''",
      width: 10,
      bottom: 10,
      left: 'calc(50% - 5px)',
      height: 10,
      position: 'absolute',
      background: theme.palette.text.primary,
      borderRadius: 4,
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.down('sm')]: {
      top: '14px !important',
      '&::after': {
        bottom: 20,
      },
    },
  },
  tooltip: {
    background: theme.palette.text.primary,
    color: theme.palette.surface[0],
    width: 49,
    height: 28,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    fontSize: 13,
    padding: 0,
  },
}))(Tooltip);

const SliderLabel = ({ children, open, value }) => (
  <CustomTooltip
    open={open}
    title={`${value} CSPR`}
    placement="top"
    TransitionComponent="none"
  >
    {children}
  </CustomTooltip>
);

const SliderBar = ({
  className,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(5);

  const handleSlideChange = (event, currentValue) => {
    setValue(currentValue);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <Caption className={classes.label}>
        PRICE RANGE
      </Caption>
      <div className={classes.sliderWrapper}>
        <span className={classes.circle} />
        <CustomSlider
          value={value}
          className={clsx(classes.subSlider, classes.sliderTop)}
          max={10}
        />
        <CustomSlider
          value={value}
          className={clsx(classes.subSlider, classes.sliderTopMiddle)}
          max={10}
        />
        <CustomSlider
          value={value}
          className={clsx(classes.subSlider, classes.sliderBottomMiddle)}
          max={10}
        />
        <CustomSlider
          value={value}
          className={clsx(classes.subSlider, classes.sliderBottom)}
          onChange={handleSlideChange}
          max={10}
        />
        <CustomSlider
          ValueLabelComponent={SliderLabel}
          value={value}
          onChange={handleSlideChange}
          max={10}
        />
      </div>
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop={-1.75}
      >
        <Body2 component="span">
          2000 CSPR
        </Body2>
        <Body2 component="span">
          100000 CSPR
        </Body2>
      </Box>
    </div>
  );
};

SliderBar.propTypes = {
  className: PropTypes.string,
};

SliderBar.defaultProps = {
  className: '',
};

SliderLabel.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

SliderLabel.defaultProps = {
  children: <span />,
};

export default SliderBar;
