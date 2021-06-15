import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomeComponents/Home/Home'
import AddService from './components/AdminComponents/AddService/AddService'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Sidebar from "./components/ShareComponents/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
        <Router>
         <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/dashbord">
          <Sidebar/>
          </Route>
          <Route path="/addService">
            <AddService/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
