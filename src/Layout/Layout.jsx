import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

const Layout = ({children, imgUrl, height}) => {
  return (
    <>
<Header imgUrl={imgUrl} height={height}/>
{children}
<Footer/>
    </>
  )
}

export default Layout