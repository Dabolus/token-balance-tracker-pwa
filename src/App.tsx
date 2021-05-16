import React, { VoidFunctionComponent } from 'react';
import I18nProvider from './providers/I18nProvider';

const App: VoidFunctionComponent = () => (
  <I18nProvider>Hello, World!</I18nProvider>
);

export default App;
