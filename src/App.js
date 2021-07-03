import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Service from './Service';
import Navbar from './Navbar';
import {Switch,Route} from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


export default function App() {
    return (
        <div>
            <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
              <Route exact path="/service" component={Service} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={Error} />
          </Switch>

        </div>
    )
}
