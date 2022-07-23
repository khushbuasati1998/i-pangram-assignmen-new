import React from 'react';
import loadable from '@loadable/component';

const MainScreen = loadable(() => import('./modules/mainScreen'));

function App() {
  return (
    <MainScreen />
  );
}

export default App;
