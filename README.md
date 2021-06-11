<!-- import React, { useState } from 'react';
import './NavBar.css'

function NavBar() {
  const [navbar,setNavbar]=useState(false)
  const changeBackground=()=>{
    if(window.scrollY >150){
        setNavbar(true)
    }else{
        setNavbar(false)
    }
  }
  // window.addEventListener('scroll',changeBackground)
    return (
      <section>
<nav class={navbar ? "navbar navbar-expand-lg navBg navbar-light" : "navbar navbar-expand-lg navbar-light"}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav menual-customize">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#dash">Dashbord</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </section>
    )
}

export default NavBar; -->
