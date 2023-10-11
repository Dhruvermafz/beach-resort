import React from 'react';
import Hero from '../components/Extras/Hero';
import Banner from '../components/Extras/Banner';
import {Link} from 'react-router-dom';

const Error=()=> {
  return <Hero hero="roomsHero">
    <Banner title='404' subtitle="page not found">
      <Link to='/return-home' className="btn-primary">
        return home
      </Link>
    </Banner>
  </Hero>
}

export default Error;
