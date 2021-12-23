import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import Body1 from '../Typography/Body1';
import Tiny from '../Typography/Tiny';

const useStyles = makeStyles((theme) => ({
  alertText: {
    color: theme.palette.error.main,
  },
  title: {
    marginBottom: theme.spacing(0.5),
    letterSpacing: 0.2,
  },
}));

const CustomAlert = withStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '18px 8px 18px 19px',
    height: 94,
  },
  icon: {
    fontSize: theme.spacing(4),
    marginLeft: 3,
    marginRight: 18,
  },
  message: {
    color: theme.palette.error.main,
    marginBottom: theme.spacing(1),
    letterSpacing: 0,
  },
  standardError: {
    backgroundColor: '#ef466f24',
  },
  action: {
    marginRight: 14,
  },
}))(Alert);

const ErrorAlert = ({
  title,
  description,
  avatar,
}) => {
  const classes = useStyles();

  return (
    <CustomAlert
      severity="error"
      className={classes.root}
      action={avatar}
    >
      <Body1 className={clsx(classes.alertText, classes.title)}>
        {title}
      </Body1>
      <Tiny className={classes.alertText}>
        {description}
      </Tiny>
    </CustomAlert>
  );
};

ErrorAlert.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.node,
};

ErrorAlert.defaultProps = {
  avatar: '',
};

export default ErrorAlert;
