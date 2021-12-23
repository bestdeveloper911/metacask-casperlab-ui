import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Hidden from '@material-ui/core/Hidden';

import Container from '../Layout/Container';
import PriceTag from '../Tags/PriceTag';
import SubTitle1 from '../Typography/Subtitle1';
import Tiny from '../Typography/Tiny';
import TinyBold from '../Typography/TinyBold';
import Body2 from '../Typography/Body2';
import SubProductCard from '../Cards/SubProductCard';
import BadgeAvatarInfo from '../AvatarInfoItems/BadgeAvatarInfo';
import OutlinedButton from '../Buttons/OutlinedButton';
import ImageWrapper from '../ImageWrapper';

import { resourcePath } from '../../constants/config';
import { subProducts, owners } from '../../constants/dummy.json';
import Title from '../Typography/Title';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    paddingBottom: 129,
    [theme.breakpoints.only('sm')]: {
      paddingBottom: theme.spacing(7),
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(4.5),
    },
  },
  container: {
    display: 'flex',
  },
  top: {
    marginBottom: 66,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContent: {
    maxWidth: 450,
    marginRight: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.only('sm')]: {
      paddingRight: theme.spacing(2.25),
    },
  },
  imageWrapper: {
    width: '100%',
    height: 430,
    backgroundColor: theme.palette.surface[1],
    borderRadius: theme.shape.borderRadius,
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContent: {
    paddingLeft: theme.spacing(0),
    marginLeft: -11,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      paddingLeft: theme.spacing(1.5),
    },
  },
  imageInfo: {
    marginTop: 23,
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(0.75),
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  owners: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'nowrap',
      maxWidth: 'calc(100vw - 50px)',
      overflowY: 'auto',
      '& > div': {
        marginRight: theme.spacing(2),
      },
    },
  },
  subtitle: {
    marginBottom: theme.spacing(0.5),
    color: theme.palette.text.primary,
    [theme.breakpoints.down('xs')]: {
      fontSize: 17,
      lineHeight: '14px',
    },
  },
  priceInfo: {
    marginTop: theme.spacing(0.75),
    marginBottom: theme.spacing(0.75),
  },
  rightContent: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 22,
      borderLeft: `1px solid ${theme.palette.divider}`,
      paddingLeft: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(8.125),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 77,
    },
  },
  moreBtn: {
    marginTop: theme.spacing(1),
    height: 42,
    width: 158,
    fontSize: 13,
    visibility: 'hidden',
  },
  comment: {
    marginBottom: 2,
    letterSpacing: 0,
    '& img': {
      marginLeft: theme.spacing(0.5),
    },
  },
  cardWrapper: {
    marginBottom: theme.spacing(2),
  },
}));

const RecentNFTSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={clsx(classes.container, classes.top)}>
          <Title>Recently Listed</Title>
        </div>
        <Grid container className={classes.container}>
          <Grid item md={9} sm={12} container>
            <Grid item md={7} sm={6} xs={12}>
              <div className={classes.mainContent}>
                <ImageWrapper
                  className={classes.imageWrapper}
                  content={`${resourcePath.product}product_01.png`}
                  alt="main-product"
                />
                <div className={classes.imageInfo}>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      className={classes.avatar}
                      src={`${resourcePath.user}4.jpg`}
                    />
                    <div className={classes.userInfo}>
                      <SubTitle1 className={classes.subtitle}>SC:13116</SubTitle1>
                      <Body2>Active</Body2>
                    </div>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Tiny className={classes.priceInfo}>Highest bid</Tiny>
                    <PriceTag price={1.125} />
                  </Box>
                </div>
              </div>
            </Grid>

            <Hidden xsDown>
              <Grid item md={5} sm={6} xs={12} className={classes.subContent}>
                {subProducts.map((item, index) => (
                  <div
                    key={item.id}
                    className={clsx({ [classes.cardWrapper]: index !== 2 })}
                  >
                    <SubProductCard subProduct={item} />
                  </div>
                ))}
              </Grid>
            </Hidden>
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            <div className={classes.rightContent}>
              <TinyBold className={classes.comment}>
                Brokers
                <img src="/assets/images/fire.png" alt="fire" />
              </TinyBold>

              <div className={classes.owners}>
                {owners.map((user, index) => (
                  <BadgeAvatarInfo
                    key={user.id}
                    user={user}
                    isLast={index === 3}
                  />
                ))}
              </div>

              <Hidden smDown>
                <OutlinedButton
                  className={classes.moreBtn}
                  label="Discover More"
                  icon={<ArrowRightAltIcon />}
                />
              </Hidden>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RecentNFTSection;
