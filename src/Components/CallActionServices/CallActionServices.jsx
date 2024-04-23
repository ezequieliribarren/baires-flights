import React, { useState, useEffect } from 'react';
import es from '../../i18n/es.json'; // Importa el archivo JSON para español
import en from '../../i18n/en.json'; // Importa el archivo JSON para inglés
import Typed from 'typed.js';

const CallActionServices = () => {
    const [index, setIndex] = useState(0);
    const [language, setLanguage] = useState('es'); // Establece el idioma inicial

    const services = language === 'es' ? es : en; // Utiliza el idioma seleccionado para obtener los servicios

    const serviceKeys = Object.keys(services.SERVICIOS_DETALLE); // Obtiene las claves de los servicios

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < serviceKeys.length) {
                setIndex(prevIndex => prevIndex + 1);
            } else {
                // Si hemos llegado al final de los servicios, reiniciamos el índice
                setIndex(0);
            }
        }, 4000); // Cambia el tiempo según lo deseado para el efecto de máquina de escribir

        return () => clearInterval(interval);
    }, [index, serviceKeys]);

    useEffect(() => {
        // Elemento HTML donde se aplicará el efecto de Typed.js
        const element = document.getElementById('typed');

        const currentService = services.SERVICIOS_DETALLE[serviceKeys[index]];

        // Verificar si la cadena actual no está vacía o indefinida
        if (currentService) {
            // Opciones para configurar Typed.js
            const options = {
                strings: [currentService],
                typeSpeed: 90, // Velocidad de escritura en milisegundos por caracter
                backSpeed: 70, // Velocidad de borrado en milisegundos por caracter
                loop: true // Repetir el efecto infinitamente
            };

            // Inicializar Typed.js
            const typed = new Typed(element, options);

            // Limpiar Typed.js al desmontar el componente
            return () => {
                typed.destroy();
            };
        }
    }, [index, serviceKeys, services]);

    return (
        <h1 style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#fff' }}>
            <span id="typed"></span>
        </h1>
    );
}

export default CallActionServices;
