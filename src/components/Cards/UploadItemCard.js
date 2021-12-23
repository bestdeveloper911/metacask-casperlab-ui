import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Body1 from '../Typography/Body1';
import FilledButton from '../Buttons/FilledButton';
import OutlinedButton from '../Buttons/OutlinedButton';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 16,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.surface[2]}`,
    paddingBottom: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      border: 'none',
      padding: '17px 0',
    },
  },
  media: {
    width: '100%',
    height: 255,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.surface[2],
    [theme.breakpoints.down('xs')]: {
      width: 62,
      height: 62,
      borderRadius: '50%',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    padding: '0 0 0 20px !important',
  },
  iconBtn: {
    padding: 4,
    '& svg': {
      fontSize: 14,
      color: theme.palette.surface[3],
    },
  },
  action: {
    justifyContent: 'center',
    padding: '24px 10px',
  },
  button: {
    minWidth: 126,
  },
}));

const UploadItemCard = ({ type }) => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(`(max-width: ${theme.breakpoints.values.sm}px)`);

  const handleLink = () => {
    history.push('/upload/single');
  };

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        className={classes.media}
        image={`/assets/images/${type}-upload-item.png`}
      />
      {isMobileOrTablet ? (
        <CardContent className={classes.content}>
          <Body1>
            {type === 'single' ? 'Create Single' : 'Create Multiple'}
          </Body1>
          <IconButton
            className={classes.iconBtn}
            onClick={handleLink}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </CardContent>
      ) : (
        <CardActions className={classes.action}>
          {type === 'single' ? (
            <OutlinedButton
              className={classes.button}
              label="Create Single"
              handleClick={() => history.push('/upload/single')}
            />
          ) : (
            <FilledButton
              className={classes.button}
              label="Create Multiple"
              handleClick={() => history.push('/upload/multi')}
            />
          )}
        </CardActions>
      )}
    </Card>
  );
};

UploadItemCard.propTypes = {
  type: PropTypes.oneOf(['single', 'multi']).isRequired,
};

UploadItemCard.defaultProps = {
};

export default UploadItemCard;
