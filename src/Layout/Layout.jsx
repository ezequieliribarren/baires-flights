import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

const Layout = ({children, imgUrl, height, changeLanguage, selectedLanguage, none, contentH1, end}) => {
  return (
    <>
      <Header end={end} contentH1={contentH1} changeLanguage={changeLanguage} selectedLanguage={selectedLanguage} none ={none} imgUrl={imgUrl} height={height}/>
{children}
<Footer/>
    </>
  )
}

export default Layout