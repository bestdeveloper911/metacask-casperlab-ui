import React, { useMemo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CancelIcon from '@material-ui/icons/Cancel';
import InfoIcon from '@material-ui/icons/Info';

import IconCircleButton from '../Buttons/IconCircleButton';
import PopoverMenu from '../PopoverMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPopover-paper': {
      background: theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1],
      '&::before': {
        content: "''",
        width: 30,
        height: 30,
        borderRadius: 5,
        background: theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1],
        position: 'absolute',
        top: -4,
        left: 'calc(80% - 16px)',
        transform: 'rotate(45deg)',
        zIndex: -1,
        boxShadow: theme.shadows[10],
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        top: -5,
        left: 'calc(80% - 20px)',
        // eslint-disable-next-line max-len
        borderBottom: `13px solid ${theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1]}`,
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        height: 0,
        width: 8,
      },
    },
  },
  mobileRoot: {
    '& .MuiPopover-paper': {
      transform: 'translateY(-16px) !important',
      background: theme.palette.type === 'light' ? theme.palette.surface[0] : theme.palette.surface[1],
    },
  },
  menuWrapper: {
    minWidth: 195,
    padding: '22px 14px',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.surface[3],
    fontSize: 13,
    fontWeight: 700,
    '& svg': {
      fontSize: 20,
      marginRight: theme.spacing(1),
    },
    padding: theme.spacing(1.625, 0.1),
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.surface[4],
    },
  },
  error: {
    color: theme.palette.error.main,
    '&:hover': {
      color: theme.palette.error.dark,
    },
  },
}));

const ProductActionDropDown = ({
  handleClickMenuItem,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`);

  const position = useMemo(
    () => {
      if (isMobileOrTablet) {
        return {
          anchor: {
            vertical: 'top',
            horizontal: 'left',
          },
          transform: {
            vertical: 'bottom',
            horizontal: 140,
          },
        };
      }

      return {
        anchor: {
          vertical: 65,
          horizontal: -33,
        },
        transform: {
          vertical: 'top',
          horizontal: 'center',
        },
      };
    },
    [isMobileOrTablet],
  );

  return (
    <PopoverMenu
      className={clsx(isMobileOrTablet ? classes.mobileRoot : classes.root)}
      anchor={(
        <IconCircleButton
          className={classes.button}
          size="large"
        >
          <MoreHorizOutlinedIcon />
        </IconCircleButton>
      )}
      anchorOrigin={position.anchor}
      transformOrigin={position.transform}
    >
      <div className={classes.menuWrapper}>
        <div
          className={classes.menuItem}
          onClick={() => handleClickMenuItem('change_price')}
        >
          <MonetizationOnOutlinedIcon />
          Change Price
        </div>
        <Divider />

        <div
          className={classes.menuItem}
          onClick={() => handleClickMenuItem('transfer_token')}
        >
          <ChevronRightIcon />
          Transfer token
        </div>
        <Divider />

        <div
          className={classes.menuItem}
          onClick={() => handleClickMenuItem('remove_from_sale')}
        >
          <HighlightOffIcon />
          Remove from sale
        </div>
        <Divider />

        <div
          className={clsx(classes.menuItem, classes.error)}
          onClick={() => handleClickMenuItem('burn_token')}
        >
          <CancelIcon />
          Burn token
        </div>
        <Divider />

        <div
          className={classes.menuItem}
          onClick={() => handleClickMenuItem('report')}
        >
          <InfoIcon />
          Report
        </div>
      </div>
    </PopoverMenu>
  );
};

ProductActionDropDown.propTypes = {
  handleClickMenuItem: PropTypes.func.isRequired,
};

ProductActionDropDown.defaultProps = {
};

export default ProductActionDropDown;
