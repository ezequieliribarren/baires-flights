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
            imgUrl={servicio.imgHeader} // Usar la imagen del encabezado del servicio
        >
            <div className="container-fluid p-5">
                <div className='row contenedor-descripcion-servicio'>
                    <div className="col-sm-3 caja-servicio">
                        <h5><img src="images/servicios/reloj.png" alt="" />Duración</h5>
                        <h4>{servicio.duracion}</h4>
                    </div>
                    <div className="col-sm-3 caja-servicio">
                        <h5><img src="images/servicios/person.png" alt="" />Capacidad Máxima</h5>
                        <h4>{servicio.duracion}</h4>
                    </div>
                    <div className="col-sm-3 caja-servicio">
                        <h5><img src="images/servicios/map.png" alt="" />Partida</h5>
                        <h4>{servicio.partida}</h4>
                    </div>
                    <div className="col-sm-3 caja-servicio">
                        <h5><img src="images/servicios/recorrido.png" alt="" />Recorrido</h5>
                        <h4>{servicio.recorrido}</h4>
                    </div>
                </div>
            </div>

            <Contacto />
        </Layout>
    );
}

export default ServicioDetail;
