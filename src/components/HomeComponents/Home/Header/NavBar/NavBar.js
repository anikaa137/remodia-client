import React from 'react';
import "./NavBar.css"
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div class="mt-5 " >
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto menual-customize manuColor">
      <Link to="/">   <li class="nav-item me-5">
         <a class="nav-link" href="#">Home</a>
        </li>
      </Link>
        <li class="nav-item me-5">
          <a class="nav-link" href="#">Features</a>
        </li>
        <Link to="/dashbord">  <li class="nav-item me-5">
          <a class="nav-link" href="#">Dashbord</a>
        </li></Link>
        <li class="nav-item me-5">
          <a class="nav-link  " href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavBar;