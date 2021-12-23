import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import SubTitle1 from '../Typography/Subtitle1';
import InputField from '../Forms/InputField';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'normal',
    color: theme.palette.text.primary,
    fontSize: 27,
  },
  submitBtn: {
    background: theme.palette.primary.main,
    padding: 9,
    '& svg': {
      color: theme.palette.primary.contrastText,
    },
  },
  input: {
    width: '100%',
  },
}));

const FullWidthSearch = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobileTablet = useMediaQuery(`(max-width: ${theme.breakpoints.values.xs}px)`);

  return (
    <div className={classes.root}>
      {isMobileTablet ? (
        <InputField
          icon={<SearchIcon />}
          className={classes.search}
          placeholder="Type your keywords"
        />
      ) : (
        <>
          <div className={classes.top}>
            <SubTitle1 className={classes.title}>Type your keywords</SubTitle1>
            <IconButton className={classes.submitBtn}>
              <SearchIcon />
            </IconButton>
          </div>
          <TextField className={classes.input} />
        </>
      )}
    </div>
  );
};

export default FullWidthSearch;
