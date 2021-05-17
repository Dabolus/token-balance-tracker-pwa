import React, {
  FunctionComponent,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import { registerSW } from 'virtual:pwa-register';

export interface ServiceWorkerContextValue {
  updateReady: boolean;
  offlineReady: boolean;
  update(): void;
}

export const ServiceWorkerContext =
  createContext<ServiceWorkerContextValue | undefined>(undefined);

export const ServiceWorkerProvider: FunctionComponent = props => {
  const [updateReady, setUpdateReady] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);

  const update = useMemo(
    () =>
      registerSW({
        onNeedRefresh: () => setUpdateReady(true),
        onOfflineReady: () => setOfflineReady(true),
      }),
    [],
  );

  return (
    <ServiceWorkerContext.Provider
      value={{ updateReady, offlineReady, update }}
      {...props}
    />
  );
};

export const useServiceWorker = () => {
  const context = useContext(ServiceWorkerContext);

  if (!context) {
    throw new Error(
      'useServiceWorker must be used within a ServiceWorkerProvider',
    );
  }

  return context;
};

export default ServiceWorkerProvider;
