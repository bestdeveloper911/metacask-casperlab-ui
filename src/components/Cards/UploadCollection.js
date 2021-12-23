import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Body1 from '../Typography/Body1';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 5px 22px 20px',
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.surface[1],
    minWidth: 159,
    marginRight: 10,
  },
  icon: {
    fontSize: 39,
  },
  title: {
    fontWeight: 500,
    lineHeight: '19px',
  },
  create: {
    color: theme.palette.text.primary,
  },
  black: {
    color: theme.palette.common.black,
  },
  green: {
    color: theme.palette.success.main,
  },
  pink: {
    color: theme.palette.error.main,
  },
  purple: {
    color: theme.palette.info.main,
  },
}));

const UploadCollection = ({
  type,
  title,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {type === 'create' ? (
        <AddCircleIcon className={clsx(classes.icon, classes.create)} />
      ) : (
        <Brightness1Icon className={clsx(classes.icon, classes[type])} />
      )}
      <Body1 className={classes.title}>
        {title}
      </Body1>
    </div>
  );
};

UploadCollection.propTypes = {
  type: PropTypes.oneOf(['create', 'green', 'purple', 'pink', 'black']),
  title: PropTypes.string,
};

UploadCollection.defaultProps = {
  type: 'create',
  title: '',
};

export default UploadCollection;
