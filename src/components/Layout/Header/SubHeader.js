import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { compose, withProps } from 'recompose';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TinyBold from '../../Typography/TinyBold';
import Container from '../Container';
import { STORE_KEYS } from '../../../stores';

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(3, 0),
  },
  breadcrumbs: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goBack: {
    width: 154,
    fontSize: 13,
    border: `2px solid ${theme.palette.surface[2]}`,
  },
  icon: {
    fontSize: 14,
    marginRight: 15,
  },
  current: {
    color: theme.palette.text.primary,
  },
}));

const SubHeader = ({ activeKey }) => {
  const classes = useStyles();
  const history = useHistory();
  const { requestedKey } = useParams();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Button
          className={classes.goBack}
          variant="outlined"
          onClick={() => history.push(`/home/${requestedKey || activeKey}`)}
        >
          <ArrowBackIcon className={classes.icon} />
          Back to home
        </Button>

        <Breadcrumbs
          className={classes.breadcrumbs}
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" onClick={() => history.push(`/profile/${requestedKey || activeKey}`)}>
            Profile
          </Link>
          <TinyBold className={classes.current} component="span">Edit Profile</TinyBold>
        </Breadcrumbs>
      </Container>
    </div>
  );
};

export default compose(
  inject(STORE_KEYS.AUTHSTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.AUTHSTORE]: {
        activeKey,
      },
    }) => ({
      activeKey,
    }),
  ),
)(SubHeader);
