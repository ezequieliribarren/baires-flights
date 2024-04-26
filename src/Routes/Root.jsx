import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from '../Layout/Layout';
import { useTranslation } from 'react-i18next';
import VuelosAMedida from '../Components/VuelosAMedida/VuelosAMedida';
import Experiencias from '../Components/Experiencias/Experiencias';
import Nosotros from '../Components/Nosotros/Nosotros';
import Contacto from '../Components/Contacto/Contacto';

const Root = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('es');

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang); // Actualizar el estado del idioma seleccionado
    };

    return (
        <Layout changeLanguage={changeLanguage} selectedLanguage={selectedLanguage}  height={"high"} imgUrl={"images/header1.png"}>
            <main>
                    <VuelosAMedida />
                    <Experiencias/>
                    <Nosotros/>
                    <Contacto/>
            </main>
        
        </Layout>


    )
}

export default Root