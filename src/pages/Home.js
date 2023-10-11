import React from 'react';
import Hero from '../components/Extras/Hero';
import Banner from '../components/Extras/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Extras/Services';
import FeaturedRooms from '../components/Room/FeaturedRooms';
import Navbar from '../components/Navbar/Navbar';


const Home=()=> {
  return (
  <>
  <Navbar/>
  <Hero>
    <Banner title="luxirious rooms" subtitle="deluxe rooms in $299">
      <Link to="/rooms" className="btn-primary">our rooms</Link>
    </Banner>
  </Hero>
  <Services/>
  <FeaturedRooms/>
  </>
  )
}


export default Home;