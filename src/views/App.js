import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from '../layouts/Home';
import About from '../layouts/About';
import Contact from '../layouts/Contact';
import Error from '../layouts/Error';
import Footer from '../views/Footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.Fragment>

        <Navigation />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={Error} />
        </Switch>

        <Footer />

      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
