import React, { useState } from 'react';
import Layout from '../Layout/Layout'
import { useTranslation } from 'react-i18next';
import CardServices from '../Components/CardsServices/CardServices';

const Experiencias = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('es');

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang); // Actualizar el estado del idioma seleccionado
    };

  return (
    <Layout end={"end"} contentH1={"Nuestras Experiencias"} changeLanguage={changeLanguage} selectedLanguage={selectedLanguage} inherit ={"inherit"} none = {"none"} height={"middle"} imgUrl={"images/header2.png"}>
 <CardServices/>
    </Layout>
  )
}

export default Experiencias