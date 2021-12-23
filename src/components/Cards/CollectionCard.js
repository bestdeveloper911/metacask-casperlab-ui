import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import PriceTag from '../Tags/PriceTag';
import SubTitle1 from '../Typography/Subtitle1';
import Body2 from '../Typography/Body2';
import ImageWrapper from '../ImageWrapper';
import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'transparent',
  },
  media: {
    width: '100%',
    height: 240,
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.surface[0],
    backgroundSize: '100% 100%',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaImage: {
    height: '100%',
    width: 'initial !important',
  },
  avatar: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  content: {
    padding: theme.spacing(1, 0),
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '6px 0',
  },
  subImage: {
    borderRadius: theme.shape.borderRadius,
    height: 75,
    background: theme.palette.surface[0],
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.palette.text.primary,
    letterSpacing: 1,
    marginBottom: 9,
  },
}));

const CollectionCard = ({ collection }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <div
        className={classes.media}
      >
        <img
          src={`${resourcePath.product}${collection?.main}`}
          className={classes.mediaImage}
          alt=""
        />
      </div>
      <CardContent className={classes.content}>
        <Grid container spacing={1}>
          {collection && collection.items && collection.items.map((item) => (
            <Grid item xs={4} key={item}>
              <ImageWrapper
                key={item}
                className={classes.subImage}
                content={`${resourcePath.product}${item}`}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions className={classes.footer} disableSpacing>
        <SubTitle1 className={classes.title}>
          {collection?.title}
        </SubTitle1>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Box display="flex" alignItems="center">
            <Avatar
              src={`${resourcePath.user}${collection?.seller}`}
              className={classes.avatar}
            />
            <Body2>{`By ${collection?.sellerName}`}</Body2>
          </Box>
          <PriceTag price={collection?.count} unit="ITEMS" type="count" />
        </Box>
      </CardActions>
    </Card>
  );
};

CollectionCard.propTypes = {
  collection: PropTypes.object.isRequired,
};

CollectionCard.defaultProps = {
};

export default CollectionCard;
