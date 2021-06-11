import React from 'react'
import NavBar from './Header/NavBar/NavBar'
import TopBar from './Header/TopBar/TopBar'
import Carousels from './Header/Carousels/Carousels2'
import ServiceCards from '../../serviceCards/ServiceCards'
function Home() {
    return (
        <div>
            <TopBar/>
            <NavBar/>
            <Carousels/>
           <ServiceCards/>
        </div>
    )
}

export default Home;
