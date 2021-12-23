import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Container from '../Container';
import Tiny from '../../Typography/Tiny';
import ScrollToTop from '../../Buttons/ScrollToTop';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    // background: "url('/assets/images/footer_bg.png')",
    borderTop: '1px solid #353945',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.surface[1],
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
  },
  logo: {
    width: 200,
    marginRight: 20,
  },
  top: {
    paddingBottom: theme.spacing(6),
  },
  list: {
    marginBottom: 40,
    fontWeight: 500,
  },
  link: {
    marginBottom: 20,
    color: '#FFFFFF',
  },
  description: {
    lineHeight: '24px',
    marginBottom: 20,
    color: '#808080',
  },
  emailSubmit: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  column: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0 !important',
      paddingTop: 30,
      borderTop: `1px solid ${theme.palette.surface[2]}`,
    },
  },
  column1: {
    paddingLeft: 11,
    [theme.breakpoints.only('sm')]: {
      paddingLeft: 8,
    },
  },
  social: {
    marginRight: 15,
    width: 20,
  },
  white: {
    color: '#FFFFFF',
  },
  ringWrapper: {
    position: 'absolute',
    right: 20,
    top: 250,
    display: 'flex',
    flexDirection: 'column',
  },
  ring: {
    width: '10px',
    height: '10px',
    border: '1px solid gray',
    borderRadius: '50%',
    marginBottom: '20px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container className={classes.top}>
          <Grid item md={4} sm={3} xs={12}>
            <Box display="flex" alignItems="center" marginBottom={3}>
              <img src={`/assets/images/logo-${theme.palette.type}.png`} className={classes.logo} alt="logo" />
            </Box>
            <Box display="flex" marginTop={3}>
              <a href="https://twitter.com/metacask" target="_blank" rel="noreferrer">
                <img src="/assets/images/twitter.png" className={classes.social} alt="twitter" />
              </a>
              <a href="https://www.linkedin.com/company/metacask/" target="_blank" rel="noreferrer">
                <img src="/assets/images/linkedin.png" className={classes.social} alt="linkedin" />
              </a>
            </Box>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <div className={clsx(classes.column, classes.column1)}>
              <a href="https://metacask.com/" target="_blank" rel="noreferrer">
                <Tiny className={classes.link}>Home</Tiny>
              </a>
              <a href="https://metacask.com/faq/" target="_blank" rel="noreferrer">
                <Tiny className={classes.link}>FAQ</Tiny>
              </a>
              <a href="https://metacask.com/about/" target="_blank" rel="noreferrer">
                <Tiny className={classes.link}>About</Tiny>
              </a>
              <a href="https://metacask.com/contact/" target="_blank" rel="noreferrer">
                <Tiny className={classes.link}>Contact</Tiny>
              </a>
            </div>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <div className={clsx(classes.column, classes.column1)}>
              <a href="https://metacask.com/terms/" target="_blank" rel="noreferrer">
                <Tiny className={classes.link}>Terms of Service</Tiny>
              </a>
              <a href="https://metacask.com/privacy-policy/" target="_blank" rel="noreferrer">
                <Tiny className={classes.link}>Privacy Policy</Tiny>
              </a>
              <a href="https://metacask.com/cookies/" target="_blank" rel="noreferrer">
                <Tiny className={classes.link}>Cookie Policy</Tiny>
              </a>
            </div>
          </Grid>
        </Grid>

        <Tiny className={classes.description}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Metacask is a NFT marketplace operated by CaskStore AG (hereafter referred to as "CaskStore"
          ).
          CaskStore is a Swiss stock corporation company whose headquarters is located in Canton Zug and
          whose identification number is CHE-482.519.405.
        </Tiny>
        <Tiny className={classes.description}>
          Spirits collectibles are considered property in most jurisdictions (for example the UK for Scotch Casks).
          The NFT represents a Title of Deed for this property and therefore has no specific restrictions on who is
          allowed to own and trade these properties (aside from age restrictions). These NFTs are not considered
          financial instruments and should not be used for speculation, these NFTs represent ownership over
          collectibles.
        </Tiny>
        <Tiny className={classes.description}>
          Information on this website related to each NFT is under the responsibility of the Broker or Brand that has
          tokenized the Product. Metacask has no obligation to verify the information provided by the issuer of each NFT
          and declines any responsibility concerning the accuracy of such information. Nor does the Company or any of
          its representatives make any warranty, express or implied, of any kind whatsoever related to any information
          on this website or the use of information on this website. By accessing this website and the services
          provided, you agree to the Terms of Service and Privacy Policy.
        </Tiny>
        <Tiny className={classes.description}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          CaskStore does not provide any custody services for NFTs or funds, the custody of tokens is the
          responsibility of the participant and any loss of private keys to digital wallets may require additional
          services from CaskStore for recovery, for which participant will bear all related costs - please review the
          Terms of Service carefully.
        </Tiny>
        <Box display="flex" marginTop={3}>
          <Tiny className={classes.white}>
            © 2021 CaskStore AG. ALL RIGHTS RESERVED
          </Tiny>
        </Box>
      </Container>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;
