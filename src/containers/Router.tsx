import React, {
  FunctionComponent,
  lazy,
  Suspense,
  useEffect,
  useState,
} from 'react';
import { Redirect, Route, Switch, useRoute } from 'wouter';
import Button from '../components/Button';
import CenteredLoader from '../components/CenteredLoader';
import Notification from '../components/Notification';
import { useProfiles } from '../providers/ProfilesProvider';
import { useServiceWorker } from '../providers/ServiceWorkerProvider';

const Dashboard = lazy(() => import('./Dashboard'));
const Wizard = lazy(() => import('./Wizard'));

const Router: FunctionComponent = () => {
  const [isOnWizardPage] = useRoute('/wizard');

  const { profiles } = useProfiles();

  const { updateReady, update } = useServiceWorker();

  const [isUpdating, setIsUpdating] = useState(false);
  const [showUpdateNotification, setShowUpdateNotification] =
    useState(updateReady);

  const handleUpdate = () => {
    setIsUpdating(true);
    update();
  };

  useEffect(() => {
    setShowUpdateNotification(updateReady);
  }, [updateReady]);

  if (profiles && Object.keys(profiles).length > 0 && isOnWizardPage) {
    return <Redirect to="/" />;
  }

  if (profiles && Object.keys(profiles).length < 1 && !isOnWizardPage) {
    return <Redirect to="/wizard" />;
  }

  return (
    <>
      {profiles ? (
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
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      ) : (
        <CenteredLoader />
      )}

      <Notification
        open={showUpdateNotification}
        message="Update available!"
        actions={
          <>
            <Button
              disabled={isUpdating}
              onClick={() => setShowUpdateNotification(false)}
            >
              Ignore
            </Button>
            <Button disabled={isUpdating} onClick={handleUpdate}>
              {isUpdating && <CenteredLoader size={18} />}
              Update now
            </Button>
          </>
        }
      />
    </>
  );
};

export default Router;
