import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout'
import { useTranslation } from 'react-i18next';
import Contacto from '../Components/Contacto/Contacto';

const ContactoRoute = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('es');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang); // Actualizar el estado del idioma seleccionado
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 


  return (
    <Layout end={"end"} contentH1={"Contacto"} changeLanguage={changeLanguage} selectedLanguage={selectedLanguage} inherit={"inherit"} none={"none"} height={"middle"} imgUrl={"images/header2.png"}>
      <Contacto />
    </Layout>
  )
}

export default ContactoRoute