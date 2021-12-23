import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 90,
  },
  iconButton: {
    flexShrink: 0,
    width: 40,
    height: 40,
    '&:hover': {
      border: `2px solid ${theme.palette.surface[3]}`,
    },
  },
}));

const CarouselController = ({
  className,
  nextName,
  prevName,
}) => {
  const classes = useStyles();

  const handleNextAction = () => {
    document.getElementsByClassName(nextName)[0].click();
  };

  const handlePrevAction = () => {
    document.getElementsByClassName(prevName)[0].click();
  };

  return (
    <div className={clsx(classes.root, className)}>
      <IconButton
        className={classes.iconButton}
        onClick={handlePrevAction}
      >
        <img src="/assets/images/arrow-left.png" alt="arrow-left" />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        onClick={handleNextAction}
      >
        <img src="/assets/images/arrow-right.png" alt="arrow-right" />
      </IconButton>
    </div>
  );
};

CarouselController.propTypes = {
  className: PropTypes.string,
  nextName: PropTypes.string.isRequired,
  prevName: PropTypes.string.isRequired,
};

CarouselController.defaultProps = {
  className: '',
};

export default CarouselController;
