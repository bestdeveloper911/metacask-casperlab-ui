import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider } from '@material-ui/core/styles';

import darkTheme from '../../theme/dark';
import Routes from '../../routes';

function App() {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Router>
          <Routes />
        </Router>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default App;
