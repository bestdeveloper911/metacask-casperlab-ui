import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import Home from '../containers/Home';
import Activity from '../containers/Activity';
import ConnectWallet from '../containers/ConnectWallet';
import EditProfile from '../containers/EditProfile';
import FAQ from '../containers/FAQ';
import ProductDetail from '../containers/ProductDetail';
import Profile from '../containers/Profile';
import Search from '../containers/Search';
import Explorer from '../containers/Explorer';
import SignUp from '../containers/Auth/SignUp';
import PublicRoute from './PublicRoute';

const activeKey = window.localStorage.getItem('activeKey') || '';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" render={() => (<Redirect to={`/home/${activeKey}`} />)} />

      <Route
        exact
        path="/signup"
        render={() => (
          <Layout>
            <SignUp />
          </Layout>
        )}
      />

      <Route
        exact
        path="/signup/"
        render={() => (
          <Layout>
            <SignUp />
          </Layout>
        )}
      />

      <Route
        exact
        path="/signup/:requestedKey"
        render={() => (
          <Layout>
            <SignUp />
          </Layout>
        )}
      />

      <Route
        exact
        path="/home/:requestedKey"
        render={() => (
          <Layout>
            <Home />
          </Layout>
        )}
      />

      <Route
        exact
        path="/home/"
        render={() => (
          <Layout>
            <Home />
          </Layout>
        )}
      />

      <Route
        exact
        path="/profile/:requestedKey"
        render={() => (
          <Layout>
            <Profile />
          </Layout>
        )}
      />

      <Route
        exact
        path="/profile/"
        render={() => (
          <Layout>
            <Profile />
          </Layout>
        )}
      />

      <Route
        exact
        path="/edit/:requestedKey"
        render={() => (
          <Layout>
            <EditProfile />
          </Layout>
        )}
      />

      <Route
        exact
        path="/edit/"
        render={() => (
          <Layout>
            <EditProfile />
          </Layout>
        )}
      />

      <PublicRoute
        path="/explorer"
        component={(props) => <Explorer {...props} />}
        layout={Layout}
      />

      <PublicRoute
        path="/activity"
        component={(props) => <Activity {...props} />}
        layout={Layout}
      />

      <PublicRoute
        path="/connect-wallet"
        component={(props) => <ConnectWallet {...props} />}
        layout={Layout}
      />

      <PublicRoute
        path="/faq"
        component={(props) => <FAQ {...props} />}
        layout={Layout}
      />

      <PublicRoute
        path="/product/detail"
        component={(props) => <ProductDetail {...props} />}
        layout={Layout}
      />

      <PublicRoute
        path="/search"
        component={(props) => <Search {...props} />}
        layout={Layout}
      />

    </Switch>
  </>
);

// {/*<PrivateRoute*/}
// {/*  path="/upload"*/}
// {/*  exact*/}
// {/*  component={Upload}*/}
// {/*  layout={Layout}*/}
// {/*/>*/}
//
// {/*<PrivateRoute*/}
// {/*  path="/upload/:type"*/}
// {/*  component={UploadEdit}*/}
// {/*  layout={Layout}*/}
// {/*/>*/}

export default Routes;
