import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomeCarousel from './HomeCarousel';
import LatestProducts from './LatestProducts';

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div>
          <HomeCarousel />
        </div>
        <div>
          <LatestProducts />
        </div>
      </HelmetProvider>
    </>
  );
};

export default Home;
