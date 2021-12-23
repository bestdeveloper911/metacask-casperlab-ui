import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
import Avatar from '@material-ui/core/Avatar';

import Body1 from '../Typography/Body1';
import TinyBold from '../Typography/TinyBold';
import Tiny from '../Typography/Tiny';
import SellerStatus from '../Tags/SellerStatus';
import { resourcePath, mediaPath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.surface[0],
    padding: '23px 23px 27px',
  },
  shadow: {
    boxShadow: '0 12px 24px 6px #5551',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1.5px solid ${theme.palette.divider}`,
    alignItems: 'center',
    paddingBottom: 21,
  },
  iconBtn: {
    marginLeft: theme.spacing(0.5),
    '& svg': {
      color: theme.palette.surface[3],
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: theme.spacing(2),
    '&:hover': {
      cursor: 'pointer',
      '& .avatar': {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },
    },
    '& .avatar': {
      width: theme.spacing(8),
      height: theme.spacing(8),
      transition: theme.transitions.create(['width', 'height']),
    },
  },
  icon: {
    position: 'absolute',
    right: -3,
    bottom: -4,
  },
  title: {
    marginBottom: 3,
    fontSize: 15,
  },
  price: {
    color: theme.palette.text.primary,
  },
}));

const SellerCard = ({ seller }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={clsx(classes.root, { [classes.shadow]: expanded })}>
      <div className={classes.top}>
        <SellerStatus
          status={seller?.status}
          id={seller?.id}
        />
        <div>
          <IconButton size="small" className={classes.iconBtn}>
            <AddBoxOutlinedIcon />
          </IconButton>
          <IconButton size="small" className={classes.iconBtn}>
            <CallMadeOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.content}>
        {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
        <div
          className={classes.avatarWrapper}
          onMouseOver={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          <Avatar
            src={`${resourcePath.user}${seller?.avatar}`}
            className="avatar"
          />
          <img
            className={clsx(classes.icon, 'icon-img')}
            src={`${mediaPath}avatar-icon.png`}
            alt="icon"
          />
        </div>
        <Body1 className={classes.title}>
          {seller?.name}
        </Body1>
        <TinyBold component="span" className={classes.price}>
          {seller?.price}
          <Tiny component="span">&nbsp;CSPR</Tiny>
        </TinyBold>
      </div>
    </div>
  );
};

SellerCard.propTypes = {
  seller: PropTypes.object.isRequired,
};

SellerCard.defaultProps = {
};

export default SellerCard;
