import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { publicRoutes } from './routeConfig';

const Routes = () => {
  return (
    <Switch>
      {publicRoutes &&
        publicRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.key}
            exact={route.exact}
            render={(routeProps) => (
              <Suspense fallback={'Loading...'}>
                {route.layout ? (
                  <route.layout>
                    <route.component {...routeProps} />
                  </route.layout>
                ) : (
                  <route.component {...routeProps} />
                )}
              </Suspense>
            )}
          />
        ))}
      <Route component={() => <div>404 - Page Not Found.</div>} />
    </Switch>
  );
};

export default React.memo(Routes);
