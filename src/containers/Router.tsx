import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRoute } from 'wouter';
import CenteredLoader from '../components/CenteredLoader';
import { useProfiles } from '../providers/ProfilesProvider';

const Dashboard = lazy(() => import('./Dashboard'));
const Wizard = lazy(() => import('./Wizard'));

const Router: FunctionComponent = () => {
  const [isOnWizardPage] = useRoute('/wizard');

  const { profiles } = useProfiles();

  if (profiles && Object.keys(profiles).length > 0 && isOnWizardPage) {
    return <Redirect to="/" />;
  }

  if (profiles && Object.keys(profiles).length < 1 && !isOnWizardPage) {
    return <Redirect to="/wizard" />;
  }

  return profiles ? (
    <Suspense fallback={<CenteredLoader />}>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="/wizard">
          <Wizard />
        </Route>
        <Route path="/settings">
          <>Settings</>
        </Route>
      </Switch>
    </Suspense>
  ) : (
    <CenteredLoader />
  );
};

export default Router;
