import React, { useState, useEffect } from 'react';
import Layout from '../../Layout/Layout';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Contacto from '../Contacto/Contacto';
import serviciosData from '../../servicios.json'; // Importar el JSON de servicios

const ServicioDetail = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('es');
    const { title } = useParams(); // Obtener el título del servicio de la URL

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang); // Actualizar el estado del idioma seleccionado
    };

    const [servicio, setServicio] = useState(null);

    useEffect(() => {
        // Convertir el título de la URL a minúsculas y quitar los guiones
        const formattedTitle = title.toLowerCase().replace(/-/g, " ");
        
        // Buscar el servicio correspondiente por su título
        const servicioEncontrado = serviciosData.servicios.find(servicio => servicio.title.toLowerCase() === formattedTitle);
        setServicio(servicioEncontrado);
    }, [title]);

    if (!servicio) {
        return <div>Cargando...</div>; // O mostrar un mensaje de error si no se encuentra el servicio
    }

    return (
        <Layout
            end={"end"}
            contentH1={servicio.title} // Usar el título del servicio encontrado
            changeLanguage={changeLanguage}
            selectedLanguage={selectedLanguage}
            inherit={"inherit"}
            none={"none"}
            height={"middle"}
            imgUrl={"images/header2.png"}
        >
            <Contacto />
        </Layout>
    );
}

export default ServicioDetail;
