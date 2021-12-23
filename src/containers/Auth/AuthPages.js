import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthPages = () => (
  <Switch>
    <Route path="/auth/login" component={SignIn} />
    <Route path="/auth/signup" component={SignUp} />
  </Switch>
);

export default AuthPages;
