import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import CheckBox from '../Forms/CheckBox';
import Pane from '../Pane';
import OutlinedButton from '../Buttons/OutlinedButton';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  pane: {
    marginTop: 2,
    padding: '102px 47px 48px',
    [theme.breakpoints.down('sm')]: {
      padding: '85px 30px 29px',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 18,
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: 32,
  },
  checkBox: {
    marginBottom: 4,
  },
  button: {
    fontWeight: 'bold',
    width: 123,
    fontSize: 13,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    '& button:first-child': {
      marginRight: theme.spacing(1),
    },
  },
}));

const items = ['Sales', 'Listings', 'Bids', 'Burns', 'Followings', 'Likes', 'Purchase', 'Transfers'];

const ActivityFilter = () => {
  const classes = useStyles();

  return (
    <Pane className={classes.pane}>
      <div className={classes.wrapper}>
        {items.map((item) => (
          <CheckBox
            key={item}
            wrapperClassName={classes.checkBox}
            label={item}
          />
        ))}
      </div>
      <div className={classes.buttonWrapper}>
        <OutlinedButton
          className={classes.button}
          label="Select all"
          size="small"
        />
        <OutlinedButton
          className={classes.button}
          label="Unselect all"
          size="small"
        />
      </div>
    </Pane>
  );
};

ActivityFilter.propTypes = {
};

ActivityFilter.defaultProps = {
};

export default ActivityFilter;
