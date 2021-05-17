import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Route, Switch } from 'wouter';
import CenteredLoader from '../components/CenteredLoader';

const Router: FunctionComponent = () => {
  return (
    <Suspense fallback={<CenteredLoader />}>
      <Switch>
        <Route path="/">
          <>Dashboard</>
        </Route>
        <Route path="/settings">
          <>Settings</>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Router;
