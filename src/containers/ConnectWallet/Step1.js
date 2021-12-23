import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.lgBorderRadius,
    background: theme.palette.surface[1],
    height: 512,
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
    },
    [theme.breakpoints.down('xs')]: {
      height: '59vw',
    },
  },
}));

const Step1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src="/assets/images/wallet.png" alt="wallet" />
    </div>
  );
};

Step1.propTypes = {
};

Step1.defaultProps = {
};

export default Step1;
