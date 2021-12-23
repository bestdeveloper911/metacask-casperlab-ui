/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { inject, observer } from 'mobx-react';
import { compose, withProps } from 'recompose';
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

import { STORE_KEYS } from '../../stores';

const autoHideTime = 3000;
let htHandle = null;

const SnackbarPortal = ({ SnackBarProps, open, onClose }) => {
  clearTimeout(htHandle);
  htHandle = setTimeout(() => {
    onClose();
  }, autoHideTime);

  return (
    <>
      {Object.keys(SnackBarProps).length > 0 && open
      && ReactDOM.createPortal(
        <Snackbar
          id='error-bar'
          open={open}
          autoHideDuration={6000}
          onClose={onClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={onClose} severity={SnackBarProps.severity}>
            {SnackBarProps.message}
          </Alert>
        </Snackbar>,
        document.getElementById('snackbar')
      )}
    </>
  );
};

export default compose(
  inject(STORE_KEYS.SNACKBARSTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.SNACKBARSTORE]: { SnackBarProps, open, onClose, isRight },
    }) => ({
      SnackBarProps, open, onClose, isRight,
    })
  ),
)(SnackbarPortal);
