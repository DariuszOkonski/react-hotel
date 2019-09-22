import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>

        <Navigation />

      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
