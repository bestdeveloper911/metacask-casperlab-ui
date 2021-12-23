import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const PublicRoute = (
  {
    layout: L, component: C, user, props: cProps, ...rest
  },
) => (
  <Route
    {...rest}
    render={(props) => (
      <L>
        <C {...props} {...cProps} match={rest.computedMatch} />
      </L>
    )}
  />
);

PublicRoute.propTypes = {
  layout: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  user: PropTypes.object,
  props: PropTypes.object,
};

PublicRoute.defaultProps = {
  user: null,
  props: {},
};

export default PublicRoute;
