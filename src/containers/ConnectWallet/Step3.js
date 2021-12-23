import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Title from '../../components/Typography/Title';
import Tiny from '../../components/Typography/Tiny';
import OutlinedButton from '../../components/Buttons/OutlinedButton';
import FilledButton from '../../components/Buttons/FilledButton';
import CheckBox from '../../components/Forms/CheckBox';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  imageWrapper: {
    background: theme.palette.surface[1],
    borderRadius: theme.shape.borderRadius,
    height: 161,
    '& img': {
      width: '100%',
      height: '100%',
    },
    marginBottom: 35,
  },
  description: {
    lineHeight: '20px',
    fontSize: 13,
    marginTop: 11,
    marginBottom: 41,
  },
  buttonGroup: {
    display: 'flex',
    marginTop: 36,
    '& button': {
      marginRight: 11,
      minWidth: 103,
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& button': {
        marginRight: 0,
        marginBottom: 8,
      },
    },
  },
  highlight: {
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  checkBox: {
    padding: '4px 9px',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
      textAlign: 'center',
    },
  },
}));

const Step3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title className={classes.title}>Terms of Service</Title>
      <Tiny className={classes.description}>
        Please take a few minutes to read and and understand
        <span className={classes.highlight}>
          &nbsp;Stacks Terms of Service.&nbsp;
        </span>
        To continue, you’ll need to
        accept the terms of services by checking the boxes.
      </Tiny>

      <div className={classes.imageWrapper} />

      <CheckBox
        className={classes.checkBox}
        label="I am at least 13 year old"
      />
      <CheckBox
        className={classes.checkBox}
        label="I agree Stack terms of service"
      />

      <div className={classes.buttonGroup}>
        <OutlinedButton
          size="large"
          label="Cancel"
        />
        <FilledButton
          size="large"
          label="Get started now"
        />
      </div>
    </div>
  );
};

Step3.propTypes = {
};

Step3.defaultProps = {
};

export default Step3;
