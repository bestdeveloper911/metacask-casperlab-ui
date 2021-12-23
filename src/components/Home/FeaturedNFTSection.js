import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import Container from '../Layout/Container';
import HeaderTitle from '../Typography/HeaderTitle';
import SmallAvatarInfo from '../AvatarInfoItems/SmallAvatarInfo';
import PlaceBidModal from '../Modals/PlaceBidModal';
import PlaceBidStepsModal from '../Modals/PlaceBidStepsModal';
import PlaceBidConnectWalletModal from '../Modals/PlaceBidConnectWalletModal';
import BidPriceCard from '../Cards/BidPriceCard';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(11),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(8.25),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(2.75),
      paddingBottom: theme.spacing(18.5),
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  videoWrapper: {
    width: '100%',
    height: '100%',
    maxWidth: 640,
    [theme.breakpoints.down('xs')]: {
      height: '128vw !important',
    },
  },
  video: {
    borderRadius: theme.shape.mdBorderRadius,
  },
  subHeader: {
    marginTop: 4,
    fontSize: 36,
  },
  items: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingRight: 22,
    marginBottom: 41,
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 38,
    '& button': {
      marginBottom: 9,
      fontSize: 16,
    },
  },
  label: {
    fontSize: 45,
  },
  left: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.only('sm')]: {
      maxWidth: '62.5% !important',
      flexBasis: '62.5% !important',
    },
  },
  right: {
    [theme.breakpoints.only('sm')]: {
      maxWidth: '37.5% !important',
      flexBasis: '37.5% !important',
    },
  },
}));

const FeaturedNFTSection = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isShowPlaceBidModal, setIsShowPlaceBidModal] = useState(false);
  const [isShowPlaceBidStepsModal, setIsShowPlaceBidStepsModal] = useState(false);
  const [isShowPlaceBidWalletModal, setIsShowPlaceBidWalletModal] = useState(false);

  const handleClickBid = () => {
    setIsShowPlaceBidModal(false);
    setIsShowPlaceBidStepsModal(true);
  };

  const handleConnectWallet = () => {
    setIsShowPlaceBidStepsModal(false);
    setIsShowPlaceBidWalletModal(true);
  };

  return (
    <Box component="section" className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          justify="space-between"
          spacing={4}
        >
          <Grid item sm={8} xs={12} className={classes.left}>
            <div className={classes.videoWrapper}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZNe4ZRFx9oY"
                controls
                width="100%"
                height="100%"
              />
            </div>
          </Grid>
          <Grid item sm={4} xs={12} className={classes.right}>
            <HeaderTitle className={classes.subHeader}>
              1991 Macallan Butt/12612
              <sup className={classes.label}>®</sup>
            </HeaderTitle>

            <div className={classes.items}>
              <SmallAvatarInfo
                name="CaskStore"
                title="Broker"
                photoName="1.jpg"
              />
              <SmallAvatarInfo
                name="VCL Wallet"
                title="Owner"
                photoName="3.jpg"
              />
            </div>

            <BidPriceCard isBid onClick={() => history.push('/product/detail')} />
          </Grid>
        </Grid>
      </Container>

      <PlaceBidModal
        handleClose={() => setIsShowPlaceBidModal(false)}
        isOpen={isShowPlaceBidModal}
        handleClickBid={handleClickBid}
      />
      <PlaceBidStepsModal
        handleClose={() => setIsShowPlaceBidStepsModal(false)}
        isOpen={isShowPlaceBidStepsModal}
        handleSuccess={handleConnectWallet}
      />
      <PlaceBidConnectWalletModal
        handleClose={() => setIsShowPlaceBidWalletModal(false)}
        isOpen={isShowPlaceBidWalletModal}
      />
    </Box>
  );
};

export default FeaturedNFTSection;
