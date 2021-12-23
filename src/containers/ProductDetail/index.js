import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Container from '../../components/Layout/Container';
import Title from '../../components/Typography/Title';
import PriceTag from '../../components/Tags/PriceTag';
import Body1 from '../../components/Typography/Body1';
import FilterChips from '../../components/Filters/FilterChips';
import SmallAvatarInfo from '../../components/AvatarInfoItems/SmallAvatarInfo';
import ProductActionCard from '../../components/Cards/ProductActionCard';
import ProductDetailTool from '../../components/Widgets/ProductDetailTool';
import AcceptBidModal from '../../components/Modals/AcceptBidModal';
import AcceptBidStartModal from '../../components/Modals/AcceptBidStartModal';
import BurnTokenModal from '../../components/Modals/BurnTokenModal';
import PurchaseCheckOutModal from '../../components/Modals/PurchaseCheckOutModa';
import PurchaseStepsModal from '../../components/Modals/PurchaseStepsModal';
import PurchaseSuccessModal from '../../components/Modals/PurchaseSuccessModal';
import PutOnSaleModal from '../../components/Modals/PutOnSaleModal';
import PutOnSaleStepsModal from '../../components/Modals/PutOnSaleStepsModal';
import RemoveSaleModal from '../../components/Modals/RemoveSaleModal';
import TransferTokenModal from '../../components/Modals/TransferTokenModal';
import ReportModal from '../../components/Modals/ReportModal';
import ImageWrapper from '../../components/ImageWrapper';
import { resourcePath } from '../../constants/config';
import CommonStatusTag from '../../components/Tags/CommonStatusTag';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 97,
    paddingBottom: 96,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 88,
    },
  },
  container: {
    position: 'relative',
  },
  productWrapper: {
    width: '100%',
    height: 768,
    borderRadius: theme.shape.cardBorderRadius,
    background: theme.palette.surface[1],
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '112vw',
    },
  },
  right: {
    maxWidth: 385,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      paddingLeft: 6,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
  },
  link: {
    color: theme.palette.text.primary,
  },
  infos: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 264,
    marginTop: 12,
    marginBottom: 38,
  },
  filterWrapper: {
    border: `2px solid ${theme.palette.surface[1]}`,
    borderRadius: theme.shape.lgBorderRadius,
    padding: 4,
    marginTop: 41,
    marginBottom: 16,
    flexWrap: 'nowrap',
  },
  filterChip: {
    marginLeft: '0px !important',
    marginRight: 12,
  },
  userInfo: {
    padding: '17px 0',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  userWrapper: {
    marginBottom: 67,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 30,
    },
  },
  wrapper: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginRight: -6,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'flex-start',
  },
  rightWrapper: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
}));

const ProductDetail = () => {
  const classes = useStyles();
  const [isShowAcceptBidModal, setIsShowAcceptBidModal] = useState(false);
  const [isShowPlaceBidStartModal, setIsShowPlaceBidStartModal] = useState(false);
  const [isShowBurnTokenModal, setIsShowBurnTokenModal] = useState(false);
  const [isShowPurchaseCheckOutModal, setIsShowPurchaseCheckOutModal] = useState(false);
  const [isShowPurchaseStepsModal, setIsShowPurchaseStepsModal] = useState(false);
  const [isShowPurchaseSuccessModal, setIsShowPurchaseSuccessModal] = useState(false);
  const [isShowPutSaleModal, setIsShowPutSaleModal] = useState(false);
  const [isShowPutSaleStepsModal, setIsShowPutStepsModal] = useState(false);
  const [isShowTransferTokenModal, setIsShowTransferTokenModal] = useState(false);
  const [isShowRemoveSaleModal, setIsShowRemoveSaleModal] = useState(false);
  const [isShowReportModal, setIsShowReportModal] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const handleAccept = () => {
    setIsShowAcceptBidModal(false);
    setIsShowPlaceBidStartModal(true);
  };

  const handleCheckOut = () => {
    setIsShowPurchaseCheckOutModal(false);
    setIsShowPurchaseStepsModal(true);
  };

  const handleSuccess = () => {
    setIsShowPurchaseStepsModal(false);
    setIsShowPurchaseSuccessModal(true);
  };

  const handleSale = () => {
    setIsShowPutSaleModal(false);
    setIsShowPutStepsModal(true);
  };

  const handleClickDetailAction = (key) => {
    if (key === 'transfer_token') setIsShowTransferTokenModal(true);
    if (key === 'burn_token') setIsShowBurnTokenModal(true);
    if (key === 'report') setIsShowReportModal(true);
    if (key === 'remove_from_sale') setIsShowRemoveSaleModal(true);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item md={7} sm={7} xs={12}>
            <div className={classes.wrapper}>
              <ImageWrapper
                className={classes.productWrapper}
                content={`${resourcePath.product}product_02.png`}
              />
              <div className={classes.overlay}>
                <CommonStatusTag label="ART" />
                <CommonStatusTag label="Unlockable" variant="info" />
              </div>
              <ProductDetailTool
                handleClickDetailAction={handleClickDetailAction}
                handleClose={() => setIsShowPutSaleModal(true)}
              />
            </div>
          </Grid>
          <Grid
            className={classes.rightWrapper}
            container
            item
            md={5}
            sm={5}
            xs={12}
          >
            <div className={classes.right}>
              <Title>sc:12612</Title>
              <div className={classes.infos}>
                <PriceTag
                  price={25000}
                  size="medium"
                />
                <PriceTag
                  price="$4,429.87"
                  disableUnit
                  type="amount"
                  size="medium"
                />
              </div>
              <Body1 color="secondary">
                1991 Macallan Butt/12612
              </Body1>

              <FilterChips
                className={classes.filterWrapper}
                chipClassName={classes.filterChip}
                variant="light"
                items={['Info', 'Owners', 'History', 'Bids']}
              />

              <div className={classes.userWrapper}>
                <SmallAvatarInfo
                  className={classes.userInfo}
                  size="medium"
                  photoName="1.jpg"
                  name="Jack robot pa"
                  title="Broker"
                />
                <SmallAvatarInfo
                  className={classes.userInfo}
                  size="medium"
                  photoName="2.jpg"
                  name="Bob robot pa"
                  title="Owner"
                />
              </div>

              <ProductActionCard
                handleClickBid={() => setIsShowAcceptBidModal(true)}
                handleClickPurchase={() => setIsShowPurchaseCheckOutModal(true)}
              />
            </div>
          </Grid>
        </Grid>
      </Container>

      <AcceptBidModal
        handleClose={() => setIsShowAcceptBidModal(false)}
        isOpen={isShowAcceptBidModal}
        handleSubmit={handleAccept}
      />
      <AcceptBidStartModal
        handleClose={() => setIsShowPlaceBidStartModal(false)}
        isOpen={isShowPlaceBidStartModal}
      />
      <BurnTokenModal
        handleClose={() => setIsShowBurnTokenModal(false)}
        isOpen={isShowBurnTokenModal}
      />
      <PurchaseCheckOutModal
        handleClose={() => setIsShowPurchaseCheckOutModal(false)}
        isOpen={isShowPurchaseCheckOutModal}
        handleCheckout={handleCheckOut}
      />
      <PurchaseStepsModal
        handleClose={() => setIsShowPurchaseStepsModal(false)}
        isOpen={isShowPurchaseStepsModal}
        handleSuccess={handleSuccess}
      />
      <PurchaseSuccessModal
        handleClose={() => setIsShowPurchaseSuccessModal(false)}
        isOpen={isShowPurchaseSuccessModal}
      />
      <PutOnSaleModal
        handleClose={() => setIsShowPutSaleModal(false)}
        isOpen={isShowPutSaleModal}
        handleContinue={handleSale}
      />
      <PutOnSaleStepsModal
        handleClose={() => setIsShowPutStepsModal(false)}
        isOpen={isShowPutSaleStepsModal}
      />
      <RemoveSaleModal
        handleClose={() => setIsShowRemoveSaleModal(false)}
        isOpen={isShowRemoveSaleModal}
      />
      <TransferTokenModal
        handleClose={() => setIsShowTransferTokenModal(false)}
        isOpen={isShowTransferTokenModal}
      />
      <ReportModal
        handleClose={() => setIsShowReportModal(false)}
        isOpen={isShowReportModal}
      />
    </div>
  );
};

ProductDetail.propTypes = {
};

ProductDetail.defaultProps = {
};

export default ProductDetail;
