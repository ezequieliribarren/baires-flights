import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from '../Layout/Layout';
import { useTranslation } from 'react-i18next';
import VuelosAMedida from '../Components/VuelosAMedida/VuelosAMedida';
import Experiencias from '../Components/Experiencias/Experiencias';
import Nosotros from '../Components/Nosotros/Nosotros';
import Contacto from '../Components/Contacto/Contacto';
import Whatsapp from '../Components/Whatsapp/Whatsapp';
import Preloader from '../Components/Preloader/Preloader'; // Importa tu componente Preloader

const Root = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('es');
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar si se está cargando la página

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
    };

    useEffect(() => {
        // Simula un tiempo de carga de 2 segundos antes de establecer isLoading a false
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Limpia el temporizador al desmontar el componente
        return () => clearTimeout(timeout);
    }, []); 
    
    // Renderiza el preloader si isLoading es true
    if (isLoading) {
        return <Preloader />;
    }

    return (
        <Layout changeLanguage={changeLanguage} selectedLanguage={selectedLanguage} height={"high"} imgUrl={"images/header1.png"}>
            <main>
                <VuelosAMedida />
                <Experiencias />
                <Nosotros />
                <Contacto />
                <Whatsapp/>
            </main>
        </Layout>
    );
}

export default Root;
