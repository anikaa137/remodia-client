import React from 'react'
import NavBar from './Header/NavBar/NavBar'
import TopBar from './Header/TopBar/TopBar'
import Carousels from './Header/Carousels/Carousels'
import ServiceCards from './serviceCards/ServiceCards'
import HomeRepair from './HomeRepair/HomeRepair'
import CallUs from './CallUs/CallUs'
import Tastimonals from './Tstimonials/Tastimonals'
import Footer from './Footer/Footer'
import Service from './Service/Service'
function Home() {
    return (
        <div>
            <TopBar/>
            <NavBar/>
            <Carousels/>
            <ServiceCards />
            <HomeRepair />
            <Service/>
            <CallUs />
            <Tastimonals />
            <Footer/>
        </div>
    )
}

export default Home;
