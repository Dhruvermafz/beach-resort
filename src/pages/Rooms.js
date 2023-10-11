import React from 'react';
import Hero from '../components/Extras/Hero';
import Banner from '../components/Extras/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/Room/RoomsContainer';
import Navbar from '../components/Navbar/Navbar';

const Rooms = () => {
  return(
  <>
  <Navbar/>
  <Hero hero="roomsHero">
    <Banner title="our rooms">
    <Link to='/' className="btn-primary">return home</Link>
    </Banner>
  </Hero>
  <RoomsContainer/>
  </>)
}

export default Rooms
