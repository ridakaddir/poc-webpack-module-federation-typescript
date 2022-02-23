import React from 'react';

const AppOne = React.lazy(() => import('app1/AppOne'));

function App() {
  return (
    <div className="App">
      SHELL APP
      <React.Suspense fallback={<div>Loading ..</div>}>

        <AppOne />
      </React.Suspense>
    </div>
  );
}

export default App;
