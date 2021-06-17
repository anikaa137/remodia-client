import React, { createContext, useState } from "react";
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
import ViewService from "./components/ServiceComponents/ViewService/ViewService";
import CheckOut from './components/ServiceComponents/CheckOut/CheckOut'

export const ProductContext = createContext()
function App() {
  const [viewdata, setViewdata] = useState({})
  return (


      <ProductContext.Provider value={[viewdata, setViewdata]}>
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
          <Route path="/view_service/:id">
             <ViewService/>
          </Route>
          <Route path="/checkout">
              <CheckOut/>
          </Route>
        </Switch>
        </Router>
        </ProductContext.Provider>

  );
}

export default App;
