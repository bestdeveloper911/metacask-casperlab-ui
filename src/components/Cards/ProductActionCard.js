import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

import Body1 from '../Typography/Body1';
import Body2 from '../Typography/Body2';
import SubTitle1 from '../Typography/Subtitle1';
import OutlinedButton from '../Buttons/OutlinedButton';
import FilledButton from '../Buttons/FilledButton';
import Pane from '../Pane';
import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.cardBorderRadius,
    padding: '23px 23px 26px',
    boxShadow: '0 26px 26px 10px #1111',
    [theme.breakpoints.down('xs')]: {
      marginLeft: -17,
      marginRight: -17,
      padding: '15px 12px 16px',
    },
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 15,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 33,
    '& button:first-child': {
      marginRight: 12,
    },
  },
  button: {
    width: 164,
    [theme.breakpoints.only(['xs', 'sm'])]: {
      width: '45%',
    },
  },
  secondary: {
    color: theme.palette.text.secondary,
  },
  primary: {
    color: theme.palette.text.primary,
  },
  tag: {
    color: theme.palette.text.secondary,
    marginRight: 9,
  },
}));

const ProductActionCard = ({
  handleClickPurchase,
  handleClickBid,
}) => {
  const classes = useStyles();

  return (
    <Pane className={classes.root}>
      <Box display="flex" alignItems="center">
        <Avatar
          className={classes.avatar}
          src={`${resourcePath.user}11.jpg`}
        />
        <div>
          <Body1>
            <span className={classes.secondary}>
              Highest bid by
            </span>
            &nbsp;Kohaku Tora
          </Body1>
          <SubTitle1>
            <span className={classes.primary}>
              146 CSPR
            </span>
            &nbsp;$2,764.89
          </SubTitle1>
        </div>
      </Box>

      <div className={classes.buttonGroup}>
        <FilledButton
          className={classes.button}
          label="Buy now"
          size="large"
          handleClick={handleClickPurchase}
        />
        <OutlinedButton
          className={classes.button}
          label="Bid"
          size="large"
          handleClick={handleClickBid}
        />
      </div>

      <Box display="flex">
        <Body2 component="span" className={classes.tag}>
          Service fee
          &nbsp;&nbsp;&nbsp;
          <span className={classes.primary}>
            1.5%
          </span>
        </Body2>
        <Body2 className={classes.tag}>2563 CSPR</Body2>
        <Body2 className={classes.tag}>$4540.62</Body2>
      </Box>
    </Pane>
  );
};

ProductActionCard.propTypes = {
  handleClickPurchase: PropTypes.func,
  handleClickBid: PropTypes.func,
};

ProductActionCard.defaultProps = {
  handleClickPurchase: () => {},
  handleClickBid: () => {},
};

export default ProductActionCard;
