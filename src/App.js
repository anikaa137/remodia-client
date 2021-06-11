import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/components/HomeComponents/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ServiceCards from '../src/components/serviceCards/ServiceCards'

function App() {
  return (
    <div className="App">
        <Router>
         <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/serviceCards">
          <ServiceCards/>
          </Route>
          <Route path="/">

          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
