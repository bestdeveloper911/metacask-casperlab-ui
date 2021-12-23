import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { compose, withProps } from 'recompose';
import { inject, observer } from 'mobx-react';
import Body1 from '../../components/Typography/Body1';
import Body2 from '../../components/Typography/Body2';
import PriceTag from '../../components/Tags/PriceTag';
import Tiny from '../../components/Typography/Tiny';
import TinyBold from '../../components/Typography/TinyBold';
import FilledButton from '../../components/Buttons/FilledButton';
import { resourcePath } from '../../constants/config';
import { STORE_KEYS } from '../../stores';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.cardBorderRadius,
    background: 'transparent',
  },
  media: {
    height: 304,
    width: 'calc(100% - 80px)',
    margin: '0px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    background: theme.palette.surface[2],
    borderRadius: theme.shape.cardBorderRadius,
    backgroundSize: 'contain',
    height: 'calc(100% - 80px)',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  content: {
    padding: '19px 0 12px',
  },
  avatarGroup: {
    marginLeft: theme.spacing(1.1),
  },
  avatar: {
    width: 25,
    height: 25,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  price: {
    color: theme.palette.text.primary,
    marginLeft: theme.spacing(0.25),
    letterSpacing: 0,
  },
  count: {
    color: '#777e90',
    fontSize: 12,
    fontWeight: 'bold',
    padding: '0 7px',
  },
  footer: {
    padding: '11px 2px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fire: {
    marginLeft: theme.spacing(0.25),
  },
  favoriteBtn: {
    background: theme.palette.surface[0],
    padding: 6,
    boxShadow: '0 4px 8px 6px #3333',
    '&:hover': {
      background: `${theme.palette.surface[0]}90`,
    },
  },
  bidButton: {
    padding: '5px 14px',
  },
  purchaseBtn: {
    height: 26,
    paddingTop: 10,
    borderRadius: 3,
    width: 103,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 10,
  },
  productWrapper: {
    background: '#353945',
    position: 'relative',
    '& .overlay': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: '.5s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: theme.shape.cardBorderRadius,
      padding: theme.spacing(1, 1, 2),
    },
    '&:hover': {
      cursor: 'pointer',
      '& .overlay': {
        opacity: 0.6,
        height: '100%',
        background: theme.palette.text.primary,
      },
    },
  },
}));

const ProductCardNew = ({
  className, product, rateOfCSPR, isMyNFT = false,
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={clsx(classes.root, className)} elevation={0}>
      <div className={classes.productWrapper}>
        <div className={classes.media}>
          <img
            src={product?.image}
            className={classes.image}
            alt="product-img"
          />
        </div>

        {!isMyNFT && (
          <div className="overlay">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <FilledButton
                className={classes.purchaseBtn}
                size="small"
                color="success"
                label="Buy Now !"
              />
              <IconButton
                className={classes.favoriteBtn}
                color="default"
                size="small"
              >
                <FavoriteIcon color="error" fontSize="small" />
              </IconButton>
            </Box>
            <FilledButton
              label="Bid"
              className={classes.bidButton}
              icon={<img src="/assets/images/bid-btn-icon.png" alt="bid-icon" />}
              handleClick={() => history.push('/product/detail')}
            />
          </div>
        )}
      </div>

      <CardContent className={classes.content}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Body1>{product?.title || 'product title'}</Body1>
          <PriceTag price={product?.price || 0.00} size="medium" />
        </Box>
        {!isMyNFT && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="12px"
          >
            <AvatarGroup max={5} className={classes.avatarGroup}>
              {product && product.owners && product.owners.map((owner) => (
                <Avatar
                  key={owner}
                  src={`${resourcePath.user}${owner}`}
                  className={classes.avatar}
                />
              ))}
            </AvatarGroup>
            <Body2 className={classes.count}>
              {`$${Number((product?.price * rateOfCSPR).toFixed(2)).toString()}`}
            </Body2>
          </Box>
        )}
      </CardContent>

      <Divider />

      <CardActions className={classes.footer}>
        <Box display="flex" alignItems="center">
          <img
            className={clsx(classes.icon, 'icon-img')}
            src="/assets/images/bid-icon.png"
            alt="bid-icon"
          />
          <Tiny>
            Highest bid
            <TinyBold className={classes.price} component="span">
              {`${product?.bid || 0.00} CSPR`}
            </TinyBold>
          </Tiny>
        </Box>
        <Box display="flex" alignItems="center">
          <Tiny component="span">
            New bid
          </Tiny>
          <img
            className={clsx(classes.fire, 'icon-img')}
            src="/assets/images/fire.png"
            alt="new"
          />
        </Box>
      </CardActions>
    </Card>
  );
};

ProductCardNew.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
  rateOfCSPR: PropTypes.number,
  isMyNFT: PropTypes.bool,
};

ProductCardNew.defaultProps = {
  className: '',
  rateOfCSPR: 0,
  isMyNFT: false,
};

export default compose(
  inject(STORE_KEYS.PRICESTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.PRICESTORE]: {
        rateOfCSPR,
      },
    }) => ({
      rateOfCSPR,
    }),
  ),
)(ProductCardNew);
