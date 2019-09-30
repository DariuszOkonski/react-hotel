import React from 'react';
import Showcase from '../components/Showcase';
import HomeInfo from '../components/HomeInfo';
import Features from '../components/Features';

const Home = () => {
  return (
    <React.Fragment>
      <Showcase />
      <HomeInfo />
      <Features />
    </React.Fragment>
  );
}

export default Home;