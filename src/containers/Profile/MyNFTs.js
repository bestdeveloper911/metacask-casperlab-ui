/* eslint-disable */
import React, {useEffect, useState} from 'react';
import { compose, withProps } from 'recompose';
import { inject, observer } from 'mobx-react';
import Box from '@material-ui/core/Box';
import Masonry from 'react-masonry-css';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import ProductCardNew from '../common/ProductCardNew';
import { STORE_KEYS } from '../../stores';
import LoaderIndicator from "../../components/Loader";

const useStyles = makeStyles((theme) => ({
  masonry: {
    display: 'flex',
    margin: theme.spacing(0, -1.75),
  },
  gridColumn: {
    margin: theme.spacing(0, 2),
  },
  label: {
    color: '#737a8b',
    textAlign: 'center',
    lineHeight: '1.6',
    fontWeight: 'normal',
    paddingTop: 100,
    fontSize: 16,
  },
  indicator: {
    margin: '50px auto',
    width: 50,
    height: 50,
  },
}));

const MyNFTs = ({
  myCollectibleTokens,
  getMyCollectibleTokenBalance,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const breakpointColumnsObj = {
    default: 3,
    [theme.breakpoints.values.md]: 2,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    setIsLoading(true);
    getMyCollectibleTokenBalance()
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  const data = myCollectibleTokens?.map((item) => ({
    ...item,
    id: item?.tokenId,
    title: item?.name,
    price: 0,
    count: 1,
    owners: [item?.tokenId],
    bid: 0,
    picture: item?.image,
  }));

  return !isLoading ? (
    data?.length > 0 ? (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.masonry}
        columnClassName={classes.gridColumn}
      >
        {data?.map((item) => (
          <Box key={item.id} marginBottom={5}>
            <ProductCardNew product={item} isMyNFT />
          </Box>
        ))}
      </Masonry>
    ) : (
        <h3 className={classes.label}>It may take a few minutes until <br/> your transactions are confirmed</h3>
    )
  ) : (
    <LoaderIndicator className={classes.indicator} />
  );
}

export default compose(
  inject(STORE_KEYS.PROFILESTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.PROFILESTORE]: {
        myCollectibleTokens,
        getMyCollectibleTokenBalance,
      },
    }) => ({
      myCollectibleTokens,
      getMyCollectibleTokenBalance,
    }),
  ),
)(MyNFTs);
