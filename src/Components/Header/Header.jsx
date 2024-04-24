import React from 'react';
import Navbar from '../Navbar/Navbar';
import CallActionServices from '../CallActionServices/CallActionServices';

const Header = ({ height, imgUrl, changeLanguage, selectedLanguage }) => {
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
      <Navbar changeLanguage={changeLanguage} selectedLanguage={selectedLanguage} />
      <CallActionServices changeLanguage={changeLanguage} selectedLanguage={selectedLanguage}/>
    </header>
  );
};

export default Header;

