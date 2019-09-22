import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.Fragment>

        <Navigation />

      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
