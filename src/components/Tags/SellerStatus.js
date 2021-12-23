import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CameraOutlinedIcon from '@material-ui/icons/CameraOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    padding: '3px 8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    minWidth: 52,
    fontSize: 12,
    height: theme.spacing(3),
  },
  icon: {
    color: 'inherit',
    fontSize: 18,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  success: {
    backgroundColor: theme.palette.primary.main,
  },
  default: {
    backgroundColor: theme.palette.surface[1],
    color: theme.palette.text.primary,
  },
}));

const SellerStatus = ({
  id,
  status,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, classes[status])}>
      <CameraOutlinedIcon className={classes.icon} />
      <span>
        {`#${id}`}
      </span>
    </div>
  );
};

SellerStatus.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['primary', 'success', 'default']),
};

SellerStatus.defaultProps = {
  status: 'primary',
};

export default SellerStatus;
