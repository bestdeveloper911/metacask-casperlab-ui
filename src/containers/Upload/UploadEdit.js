import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Collapse from '@material-ui/core/Collapse';
import Hidden from '@material-ui/core/Hidden';

import Container from '../../components/Layout/Container';
import PageTitle from '../../components/Typography/PageTitle';
import Body1 from '../../components/Typography/Body1';
import SubTitle1 from '../../components/Typography/Subtitle1';
import OutlinedButton from '../../components/Buttons/OutlinedButton';
import FilledButton from '../../components/Buttons/FilledButton';
import LabelWithComment from '../../components/Widgets/LabelWIthComment';
import UploadFile from '../../components/Forms/UploadFile';
import InputField from '../../components/Forms/InputField';
import SelectField from '../../components/Forms/SelectField';
import SwitchItem from '../../components/Widgets/SwitchItem';
import UploadCollection from '../../components/Cards/UploadCollection';
import ProductCard from '../common/ProductCard';
import Pane from '../../components/Pane';
import LoadingText from '../../components/Widgets/LoadingText';

import { products } from '../../constants/dummy.json';
import { creatorOptions } from '../../constants/filter';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 128,
    paddingBottom: 127,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 80,
      paddingBottom: 112,
    },
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 45,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 36,
    },
  },
  switchBtn: {
    width: 172,
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      order: 1,
      maxWidth: 500,
      marginTop: theme.spacing(2),
    },
  },
  label: {
    fontWeight: 500,
  },
  formWrapper: {
    marginTop: 28,
    width: '100%',
  },
  formGroup: {
    paddingTop: 3,
  },
  switchItem: {
    marginBottom: 16,
  },
  carouselWrapper: {
    paddingTop: 9,
    display: 'flex',
    marginBottom: 41,
    overflow: 'hidden',
  },
  preview: {
    background: 'transparent',
    borderRadius: theme.shape.cardBorderRadius,
    padding: '46px 47px',
    boxShadow: '0 25px 28px 10px #1111',
    [theme.breakpoints.down('sm')]: {
      padding: 21,
    },
  },
  product: {
    background: 'transparent',
    marginBottom: 34,
  },
  previewLabel: {
    color: theme.palette.text.primary,
    marginBottom: 25,
  },
  clear: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
    '& svg': {
      marginRight: 6,
    },
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.text.primary,
    },
  },
  right: {
    [theme.breakpoints.only('sm')]: {
      maxWidth: '62.5% !important',
      flexBasis: '62.5% !important',
    },
  },
  left: {
    [theme.breakpoints.only('sm')]: {
      maxWidth: '37.5% !important',
      flexBasis: '37.5% !important',
    },
  },
  upload: {
    marginBottom: 40,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 32,
    },
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& button': {
        width: '100%',
      },
    },
  },
  createBtn: {
    [theme.breakpoints.down('xs')]: {
      order: 2,
      marginTop: 10,
    },
  },
}));

const UploadEdit = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [isPreview, setIsPreview] = useState(true);
  const isMobileOrTablet = useMediaQuery(`(max-width: ${theme.breakpoints.values.xs}px)`);

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          justify="space-between"
          spacing={4}
        >
          <Grid item md={7} xs={12} className={classes.right}>
            <div className={classes.top}>
              <PageTitle className={classes.title}>
                Create single collectible
              </PageTitle>
              <OutlinedButton
                className={classes.switchBtn}
                label="Switch to Multiple"
              />
            </div>

            <Box marginBottom={5}>
              <div className={classes.upload}>
                <LabelWithComment comment="Drag or choose your file to upload">
                  Upload file
                </LabelWithComment>
                <UploadFile />
              </div>

              <Body1 className={classes.label}>
                Item Details
              </Body1>
              <InputField
                wrapperClass={classes.formWrapper}
                label="Item name"
                placeholder="e.g.“Redeemable Bitcoin Card with logo”"
              />
              <InputField
                wrapperClass={classes.formWrapper}
                label="Description"
                placeholder="e.g.“After purchasing you will able to received the logo...”"
              />
              <Grid
                container
                spacing={isMobileOrTablet ? 0 : 3}
                className={classes.formGroup}
              >
                <Grid item sm={4} xs={12}>
                  <SelectField
                    className={classes.formWrapper}
                    label="Royalties"
                    iconBorder={false}
                    options={creatorOptions}
                    value={creatorOptions[0].key}
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <InputField
                    wrapperClass={classes.formWrapper}
                    label="Size"
                    placeholder="e.g. Size"
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <InputField
                    wrapperClass={classes.formWrapper}
                    label="Property"
                    placeholder="e.g. Property"
                  />
                </Grid>
              </Grid>
            </Box>

            <Divider />

            <Box marginTop={5}>
              <SwitchItem
                className={classes.switchItem}
                label="Put on sale"
                comment="You'll receive bids on this item"
              />
              <SwitchItem
                className={classes.switchItem}
                label="Instant sale price"
                comment="Enter the price for which the item will be instantly sold"
              />
              <SwitchItem
                className={classes.switchItem}
                label="Unlock once purchased"
                comment="Content will be unlocked after successful transaction"
              />
            </Box>

            <LabelWithComment comment="Choose an exiting collection or create a new one">
              Choose collection
            </LabelWithComment>
            <div className={classes.carouselWrapper}>
              <UploadCollection type="create" title="Create collection" />
              <UploadCollection type="green" title="Crypto Legend-Professor" />
              <UploadCollection type="pink" title="Crypto Legend-Professor" />
              <UploadCollection type="purple" title="Legend Photography" />
            </div>

            <div className={classes.buttonGroup}>
              <FilledButton
                size="large"
                label="Create item"
                icon={<ArrowRightAltIcon />}
                className={classes.createBtn}
              />
              <Hidden smUp>
                <OutlinedButton
                  label="Preview"
                  size="large"
                  handleClick={() => setIsPreview((state) => !state)}
                />
              </Hidden>
              <Hidden xsDown>
                <Box marginRight={3}>
                  <LoadingText isLoading label="Auto saving" />
                </Box>
              </Hidden>
            </div>
          </Grid>
          <Grid item md={4} xs={12} className={classes.left}>
            <Collapse in={isPreview}>
              <Pane className={classes.preview}>
                <SubTitle1 className={classes.previewLabel}>Preview</SubTitle1>
                <ProductCard
                  className={classes.product}
                  product={products[0]}
                />

                <div className={classes.clear}>
                  <HighlightOffIcon />
                  Clear all
                </div>
              </Pane>
            </Collapse>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UploadEdit;
