import React from 'react';
import Navbar from '../Navbar/Navbar';
import CallActionServices from '../CallActionServices/CallActionServices';

const Header = ({ height, imgUrl, changeLanguage, selectedLanguage, none, inherit, contentH1, end, noneTraductor }) => {
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
      <Navbar changeLanguage={changeLanguage} selectedLanguage={selectedLanguage}  noneTraductor={noneTraductor} />
      <CallActionServices changeLanguage={changeLanguage} selectedLanguage={selectedLanguage} none= {none} inherit={inherit} contentH1={contentH1} end={end}/>
    </header>
  );
};

export default Header;

