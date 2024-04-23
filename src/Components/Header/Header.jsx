import React from 'react';
import Navbar from '../Navbar/Navbar';
import CallActionServices from '../CallActionServices/CallActionServices';

const Header = ({ height, imgUrl }) => {
  return (
    <header
      className={height}
      style={{
        backgroundImage: `url(${imgUrl})`, 
        backgroundPosition: "start",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Navbar />
      <CallActionServices/>
    </header>
  );
};

export default Header;

