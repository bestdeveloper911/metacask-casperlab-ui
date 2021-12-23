import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import Hidden from '@material-ui/core/Hidden';

import IconCircleButton from '../Buttons/IconCircleButton';
import ProductActionDropDown from '../Menus/ProductActionDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: -2,
    right: '-91%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      left: '29%',
      right: 'auto',
      top: 'auto',
      bottom: 23,
      background: theme.palette.surface[1],
      padding: theme.spacing(1),
      borderRadius: 50,
    },
    [theme.breakpoints.down('sm')]: {
      left: '20% !important',
    },
    [theme.breakpoints.down('xs')]: {
      left: '17% !important',
    },
  },
  favorite: {
    color: `${theme.palette.error.main} !important`,
  },
  button: {
    marginBottom: 14,
    [theme.breakpoints.down('md')]: {
      marginBottom: 0,
      marginRight: 20,
    },
  },
  primary: {
    borderColor: theme.palette.text.primary,
    background: theme.palette.text.primary,
    '& svg': {
      color: theme.palette.surface[0],
    },
    '&:hover svg': {
      color: `${theme.palette.text.primary} !important`,
    },
  },
}));

const ProductDetailTool = ({
  handleDownLoad,
  handleClose,
  handleClickDetailAction,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden lgDown>
        <IconCircleButton
          className={clsx(classes.button, classes.primary)}
          size="large"
          handleClick={handleClose}
        >
          <CloseOutlinedIcon />
        </IconCircleButton>
      </Hidden>
      <IconCircleButton
        className={classes.button}
        handleClick={handleDownLoad}
        size="large"
      >
        <PublishOutlinedIcon />
      </IconCircleButton>
      <IconCircleButton
        className={classes.button}
        size="large"
      >
        <FavoriteOutlinedIcon className={classes.favorite} />
      </IconCircleButton>

      <ProductActionDropDown handleClickMenuItem={handleClickDetailAction} />
    </div>
  );
};

ProductDetailTool.propTypes = {
  handleDownLoad: PropTypes.func,
  handleClose: PropTypes.func,
  handleClickDetailAction: PropTypes.func,
};

ProductDetailTool.defaultProps = {
  handleDownLoad: () => {},
  handleClose: () => {},
  handleClickDetailAction: () => {},
};

export default ProductDetailTool;
