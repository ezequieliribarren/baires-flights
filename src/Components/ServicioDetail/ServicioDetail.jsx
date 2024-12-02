import React, { useState, useEffect } from 'react';
import Layout from '../../Layout/Layout';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Contacto from '../Contacto/Contacto';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ClipLoader } from 'react-spinners';



const ServicioDetail = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('es');
    const { title } = useParams(); // Obtener el título del servicio de la URL
    const [activeQuestion, setActiveQuestion] = useState(false); // Estado para controlar si la respuesta está activa o no
    const { t } = useTranslation(); // Usa useTranslation dentro del componente


    useEffect(() => {
        const timeout = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const servicios = [
        {
            "title": t('SERVICIOS_DETALLE.S1.title'),
            "titleEn": "Baptism flights",
            "imgHeader": t('SERVICIOS_DETALLE.S1.imgHeader'),
            "duracion": t('SERVICIOS_DETALLE.S1.duracion'),
            "capacidad": t('SERVICIOS_DETALLE.S1.capacidad'),
            "partida": t('SERVICIOS_DETALLE.S1.partida'),
            "recorrido": t('SERVICIOS_DETALLE.S1.recorrido'),
            "imgMapa": t('SERVICIOS_DETALLE.S1.imgMapa'),
            "p1": t('SERVICIOS_DETALLE.S1.p1'),
            "p2": t('SERVICIOS_DETALLE.S1.p2'),
            "p3": t('SERVICIOS_DETALLE.S1.p3'),
            "link": t('SERVICIOS_DETALLE.S1.link'),
            "imgSlider": [
                t('SERVICIOS_DETALLE.S1.imgSlider.0'),
                t('SERVICIOS_DETALLE.S1.imgSlider.1'),
                t('SERVICIOS_DETALLE.S1.imgSlider.2'),
                t('SERVICIOS_DETALLE.S1.imgSlider.3'),
                t('SERVICIOS_DETALLE.S1.imgSlider.4'),
                t('SERVICIOS_DETALLE.S1.imgSlider.5'),
                t('SERVICIOS_DETALLE.S1.imgSlider.6'),
                t('SERVICIOS_DETALLE.S1.imgSlider.7'),
                t('SERVICIOS_DETALLE.S1.imgSlider.8'),
                t('SERVICIOS_DETALLE.S1.imgSlider.9'),
                t('SERVICIOS_DETALLE.S1.imgSlider.10')
            ],
            "reservar": t('SERVICIOS_DETALLE.S1.reservar'),
            "regalar": t('SERVICIOS_DETALLE.S1.regalar'),
            "preguntasFrecuentes": {
                "preguntas": [
                    {
                        "id": 1,
                        "pregunta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.preguntas.0.pregunta')
                    },
                    {
                        "id": 2,
                        "pregunta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.preguntas.1.pregunta')
                    },
                    {
                        "id": 3,
                        "pregunta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.preguntas.2.pregunta')
                    },
                    {
                        "id": 4,
                        "pregunta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.preguntas.3.pregunta')
                    },
                    {
                        "id": 5,
                        "pregunta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.preguntas.4.pregunta')
                    },
                    {
                        "id": 6,
                        "pregunta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.preguntas.5.pregunta')
                    },
                    {
                        "id": 7,
                        "pregunta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.preguntas.6.pregunta')
                    },
                    {
                        "id": 8,
                        "pregunta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.preguntas.7.pregunta')
                    }
                ],
                "respuestas": [
                    {
                        "id": 1,
                        "respuesta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.respuestas.0.respuesta')
                    },
                    {
                        "id": 2,
                        "respuesta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.respuestas.1.respuesta')
                    },
                    {
                        "id": 3,
                        "respuesta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.respuestas.2.respuesta')
                    },
                    {
                        "id": 4,
                        "respuesta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.respuestas.3.respuesta')
                    },
                    {
                        "id": 5,
                        "respuesta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.respuestas.4.respuesta')
                    },
                    {
                        "id": 6,
                        "respuesta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.respuestas.5.respuesta')
                    },
                    {
                        "id": 7,
                        "respuesta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.respuestas.6.respuesta')
                    },
                    {
                        "id": 8,
                        "respuesta": t('SERVICIOS_DETALLE.S1.preguntasFrecuentes.respuestas.7.respuesta')
                    }
                ]
            }
        },
        {
            "title": t('SERVICIOS_DETALLE.S2.title'),
            "titleEn": "Romantic flight",
            "imgHeader": t('SERVICIOS_DETALLE.S2.imgHeader'),
            "duracion": t('SERVICIOS_DETALLE.S2.duracion'),
            "capacidad": t('SERVICIOS_DETALLE.S2.capacidad'),
            "partida": t('SERVICIOS_DETALLE.S2.partida'),
            "recorrido": t('SERVICIOS_DETALLE.S2.recorrido'),
            "imgMapa": t('SERVICIOS_DETALLE.S2.imgMapa'),
            "p1": t('SERVICIOS_DETALLE.S2.p1'),
            "p2": t('SERVICIOS_DETALLE.S2.p2'),
            "p3": t('SERVICIOS_DETALLE.S2.p3'),
            "link": t('SERVICIOS_DETALLE.S2.link'),
            "imgSlider": [
                t('SERVICIOS_DETALLE.S2.imgSlider.0'),
                t('SERVICIOS_DETALLE.S2.imgSlider.1'),
                t('SERVICIOS_DETALLE.S2.imgSlider.2'),
                t('SERVICIOS_DETALLE.S2.imgSlider.3'),
                t('SERVICIOS_DETALLE.S2.imgSlider.4'),
                t('SERVICIOS_DETALLE.S2.imgSlider.5'),
                t('SERVICIOS_DETALLE.S2.imgSlider.6'),
                t('SERVICIOS_DETALLE.S2.imgSlider.7')
            ],
            "reservar": t('SERVICIOS_DETALLE.S2.reservar'),
            "regalar": t('SERVICIOS_DETALLE.S2.regalar'),
            "preguntasFrecuentes": {
                "preguntas": [
                    {
                        "id": 1,
                        "pregunta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.preguntas.0.pregunta')
                    },
                    {
                        "id": 2,
                        "pregunta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.preguntas.1.pregunta')
                    },
                    {
                        "id": 3,
                        "pregunta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.preguntas.2.pregunta')
                    },
                    {
                        "id": 4,
                        "pregunta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.preguntas.3.pregunta')
                    },
                    {
                        "id": 5,
                        "pregunta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.preguntas.4.pregunta')
                    },
                    {
                        "id": 6,
                        "pregunta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.preguntas.5.pregunta')
                    },
                    {
                        "id": 7,
                        "pregunta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.preguntas.6.pregunta')
                    },
                    {
                        "id": 8,
                        "pregunta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.preguntas.7.pregunta')
                    }
                ],
                "respuestas": [
                    {
                        "id": 1,
                        "respuesta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.respuestas.0.respuesta')
                    },
                    {
                        "id": 2,
                        "respuesta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.respuestas.1.respuesta')
                    },
                    {
                        "id": 3,
                        "respuesta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.respuestas.2.respuesta')
                    },
                    {
                        "id": 4,
                        "respuesta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.respuestas.3.respuesta')
                    },
                    {
                        "id": 5,
                        "respuesta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.respuestas.4.respuesta')
                    },
                    {
                        "id": 6,
                        "respuesta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.respuestas.5.respuesta')
                    },
                    {
                        "id": 7,
                        "respuesta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.respuestas.6.respuesta')
                    },
                    {
                        "id": 8,
                        "respuesta": t('SERVICIOS_DETALLE.S2.preguntasFrecuentes.respuestas.7.respuesta')
                    }
                ]
            }
        },
        {
            "title": t('SERVICIOS_DETALLE.S3.title'),
            "titleEn": "Pilot for a day",
            "imgHeader": t('SERVICIOS_DETALLE.S3.imgHeader'),
            "duracion": t('SERVICIOS_DETALLE.S3.duracion'),
            "capacidad": t('SERVICIOS_DETALLE.S3.capacidad'),
            "partida": t('SERVICIOS_DETALLE.S3.partida'),
            "recorrido": t('SERVICIOS_DETALLE.S3.recorrido'),
            "imgMapa": t('SERVICIOS_DETALLE.S3.imgMapa'),
            "imgMapa2": t('SERVICIOS_DETALLE.S3.imgMapa2'),
            "imgMapa3": t('SERVICIOS_DETALLE.S3.imgMapa3'),
            "p1": t('SERVICIOS_DETALLE.S3.p1'),
            "p2": t('SERVICIOS_DETALLE.S3.p2'),
            "p3": t('SERVICIOS_DETALLE.S3.p3'),
            "link": t('SERVICIOS_DETALLE.S3.link'),
            "imgSlider": [
                t('SERVICIOS_DETALLE.S3.imgSlider.0'),
                t('SERVICIOS_DETALLE.S3.imgSlider.1'),
                t('SERVICIOS_DETALLE.S3.imgSlider.2'),
                t('SERVICIOS_DETALLE.S3.imgSlider.3'),
                t('SERVICIOS_DETALLE.S3.imgSlider.4'),
                t('SERVICIOS_DETALLE.S3.imgSlider.5')
            ],
            "reservar": t('SERVICIOS_DETALLE.S3.reservar'),
            "regalar": t('SERVICIOS_DETALLE.S3.regalar'),
            "preguntasFrecuentes": {
                "preguntas": [
                    {
                        "id": 1,
                        "pregunta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.preguntas.0.pregunta')
                    },
                    {
                        "id": 2,
                        "pregunta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.preguntas.1.pregunta')
                    },
                    {
                        "id": 3,
                        "pregunta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.preguntas.2.pregunta')
                    },
                    {
                        "id": 4,
                        "pregunta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.preguntas.3.pregunta')
                    },
                    {
                        "id": 5,
                        "pregunta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.preguntas.4.pregunta')
                    },
                    {
                        "id": 6,
                        "pregunta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.preguntas.5.pregunta')
                    },
                    {
                        "id": 7,
                        "pregunta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.preguntas.6.pregunta')
                    },
                    {
                        "id": 8,
                        "pregunta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.preguntas.7.pregunta')
                    }
                ],
                "respuestas": [
                    {
                        "id": 1,
                        "respuesta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.respuestas.0.respuesta')
                    },
                    {
                        "id": 2,
                        "respuesta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.respuestas.1.respuesta')
                    },
                    {
                        "id": 3,
                        "respuesta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.respuestas.2.respuesta')
                    },
                    {
                        "id": 4,
                        "respuesta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.respuestas.3.respuesta')
                    },
                    {
                        "id": 5,
                        "respuesta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.respuestas.4.respuesta')
                    },
                    {
                        "id": 6,
                        "respuesta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.respuestas.5.respuesta')
                    },
                    {
                        "id": 7,
                        "respuesta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.respuestas.6.respuesta')
                    },
                    {
                        "id": 8,
                        "respuesta": t('SERVICIOS_DETALLE.S3.preguntasFrecuentes.respuestas.7.respuesta')
                    }
                ]
            }
        },
        {
            "title": t('SERVICIOS_DETALLE.S4.title'),
            "titleEn": "Air transfers",
            "imgHeader": t('SERVICIOS_DETALLE.S4.imgHeader'),
            "duracion": t('SERVICIOS_DETALLE.S4.duracion'),
            "capacidad": t('SERVICIOS_DETALLE.S4.capacidad'),
            "partida": t('SERVICIOS_DETALLE.S4.partida'),
            "recorrido": t('SERVICIOS_DETALLE.S4.recorrido'),
            "imgMapa": t('SERVICIOS_DETALLE.S4.imgMapa'),
            "p1": t('SERVICIOS_DETALLE.S4.p1'),
            "p2": t('SERVICIOS_DETALLE.S4.p2'),
            "p3": t('SERVICIOS_DETALLE.S4.p3'),
            "link": t('SERVICIOS_DETALLE.S4.link'),
            "imgSlider": [
                t('SERVICIOS_DETALLE.S4.imgSlider.0'),
                t('SERVICIOS_DETALLE.S4.imgSlider.1'),
                t('SERVICIOS_DETALLE.S4.imgSlider.2'),
                t('SERVICIOS_DETALLE.S4.imgSlider.3'),
                t('SERVICIOS_DETALLE.S4.imgSlider.4'),
                t('SERVICIOS_DETALLE.S4.imgSlider.5'),
                t('SERVICIOS_DETALLE.S4.imgSlider.6'),
                t('SERVICIOS_DETALLE.S4.imgSlider.7')
            ],
            "reservar": t('SERVICIOS_DETALLE.S4.reservar'),
            "regalar": t('SERVICIOS_DETALLE.S4.regalar'),
            "preguntasFrecuentes": {
                "preguntas": [
                    {
                        "id": 1,
                        "pregunta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.preguntas.0.pregunta')
                    },
                    {
                        "id": 2,
                        "pregunta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.preguntas.1.pregunta')
                    },
                    {
                        "id": 3,
                        "pregunta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.preguntas.2.pregunta')
                    },
                    {
                        "id": 4,
                        "pregunta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.preguntas.3.pregunta')
                    },
                    {
                        "id": 5,
                        "pregunta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.preguntas.4.pregunta')
                    },
                    {
                        "id": 6,
                        "pregunta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.preguntas.5.pregunta')
                    },
                    {
                        "id": 7,
                        "pregunta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.preguntas.6.pregunta')
                    },
                    {
                        "id": 8,
                        "pregunta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.preguntas.7.pregunta')
                    }
                ],
                "respuestas": [
                    {
                        "id": 1,
                        "respuesta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.respuestas.0.respuesta')
                    },
                    {
                        "id": 2,
                        "respuesta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.respuestas.1.respuesta')
                    },
                    {
                        "id": 3,
                        "respuesta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.respuestas.2.respuesta')
                    },
                    {
                        "id": 4,
                        "respuesta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.respuestas.3.respuesta')
                    },
                    {
                        "id": 5,
                        "respuesta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.respuestas.4.respuesta')
                    },
                    {
                        "id": 6,
                        "respuesta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.respuestas.5.respuesta')
                    },
                    {
                        "id": 7,
                        "respuesta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.respuestas.6.respuesta')
                    },
                    {
                        "id": 8,
                        "respuesta": t('SERVICIOS_DETALLE.S4.preguntasFrecuentes.respuestas.7.respuesta')
                    }
                ]
            }
        },
        {
            "title": t('SERVICIOS_DETALLE.S5.title'),
            "titleEn": "Helicopter flights",
            "imgHeader": t('SERVICIOS_DETALLE.S5.imgHeader'),
            "duracion": t('SERVICIOS_DETALLE.S5.duracion'),
            "capacidad": t('SERVICIOS_DETALLE.S5.capacidad'),
            "partida": t('SERVICIOS_DETALLE.S5.partida'),
            "recorrido": t('SERVICIOS_DETALLE.S5.recorrido'),
            "imgMapa": t('SERVICIOS_DETALLE.S5.imgMapa'),
            "p1": t('SERVICIOS_DETALLE.S5.p1'),
            "p2": t('SERVICIOS_DETALLE.S5.p2'),
            "p3": t('SERVICIOS_DETALLE.S5.p3'),
            "link": t('SERVICIOS_DETALLE.S5.link'),
            "imgSlider": [
                t('SERVICIOS_DETALLE.S5.imgSlider.0'),
                t('SERVICIOS_DETALLE.S5.imgSlider.1'),
                t('SERVICIOS_DETALLE.S5.imgSlider.2'),
                t('SERVICIOS_DETALLE.S5.imgSlider.3'),
                t('SERVICIOS_DETALLE.S5.imgSlider.4')
            ],
            "reservar": t('SERVICIOS_DETALLE.S5.reservar'),
            "regalar": t('SERVICIOS_DETALLE.S5.regalar'),
            "preguntasFrecuentes": {
                "preguntas": [
                    {
                        "id": 1,
                        "pregunta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.preguntas.0.pregunta')
                    },
                    {
                        "id": 2,
                        "pregunta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.preguntas.1.pregunta')
                    },
                    {
                        "id": 3,
                        "pregunta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.preguntas.2.pregunta')
                    },
                    {
                        "id": 4,
                        "pregunta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.preguntas.3.pregunta')
                    },
                    {
                        "id": 5,
                        "pregunta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.preguntas.4.pregunta')
                    },
                    {
                        "id": 6,
                        "pregunta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.preguntas.5.pregunta')
                    },
                    {
                        "id": 7,
                        "pregunta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.preguntas.6.pregunta')
                    },
                    {
                        "id": 8,
                        "pregunta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.preguntas.7.pregunta')
                    }
                ],
                "respuestas": [
                    {
                        "id": 1,
                        "respuesta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.respuestas.0.respuesta')
                    },
                    {
                        "id": 2,
                        "respuesta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.respuestas.1.respuesta')
                    },
                    {
                        "id": 3,
                        "respuesta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.respuestas.2.respuesta')
                    },
                    {
                        "id": 4,
                        "respuesta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.respuestas.3.respuesta')
                    },
                    {
                        "id": 5,
                        "respuesta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.respuestas.4.respuesta')
                    },
                    {
                        "id": 6,
                        "respuesta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.respuestas.5.respuesta')
                    },
                    {
                        "id": 7,
                        "respuesta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.respuestas.6.respuesta')
                    },
                    {
                        "id": 8,
                        "respuesta": t('SERVICIOS_DETALLE.S5.preguntasFrecuentes.respuestas.7.respuesta')
                    }
                ]
            }
        },
        {
            "title": t('SERVICIOS_DETALLE.S6.title'),
            "titleEn": "Skydiving",
            "imgHeader": t('SERVICIOS_DETALLE.S6.imgHeader'),
            "duracion": t('SERVICIOS_DETALLE.S6.duracion'),
            "capacidad": t('SERVICIOS_DETALLE.S6.capacidad'),
            "partida": t('SERVICIOS_DETALLE.S6.partida'),
            "recorrido": t('SERVICIOS_DETALLE.S6.recorrido'),
            "imgMapa": t('SERVICIOS_DETALLE.S6.imgMapa'),
            "p1": t('SERVICIOS_DETALLE.S6.p1'),
            "p2": t('SERVICIOS_DETALLE.S6.p2'),
            "p3": t('SERVICIOS_DETALLE.S6.p3'),
            "link": t('SERVICIOS_DETALLE.S6.link'),
            "imgSlider": [
                t('SERVICIOS_DETALLE.S6.imgSlider.0'),
                t('SERVICIOS_DETALLE.S6.imgSlider.1'),
                t('SERVICIOS_DETALLE.S6.imgSlider.2'),
                t('SERVICIOS_DETALLE.S6.imgSlider.3'),
                t('SERVICIOS_DETALLE.S6.imgSlider.4')
            ],
            "reservar": t('SERVICIOS_DETALLE.S6.reservar'),
            "regalar": t('SERVICIOS_DETALLE.S6.regalar'),
            "preguntasFrecuentes": {
                "preguntas": [
                    {
                        "id": 1,
                        "pregunta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.preguntas.0.pregunta')
                    },
                    {
                        "id": 2,
                        "pregunta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.preguntas.1.pregunta')
                    },
                    {
                        "id": 3,
                        "pregunta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.preguntas.2.pregunta')
                    },
                    {
                        "id": 4,
                        "pregunta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.preguntas.3.pregunta')
                    },
                    {
                        "id": 5,
                        "pregunta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.preguntas.4.pregunta')
                    },
                    {
                        "id": 6,
                        "pregunta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.preguntas.5.pregunta')
                    },
                    {
                        "id": 7,
                        "pregunta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.preguntas.6.pregunta')
                    },
                    {
                        "id": 8,
                        "pregunta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.preguntas.7.pregunta')
                    }
                ],
                "respuestas": [
                    {
                        "id": 1,
                        "respuesta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.respuestas.0.respuesta')
                    },
                    {
                        "id": 2,
                        "respuesta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.respuestas.1.respuesta')
                    },
                    {
                        "id": 3,
                        "respuesta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.respuestas.2.respuesta')
                    },
                    {
                        "id": 4,
                        "respuesta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.respuestas.3.respuesta')
                    },
                    {
                        "id": 5,
                        "respuesta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.respuestas.4.respuesta')
                    },
                    {
                        "id": 6,
                        "respuesta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.respuestas.5.respuesta')
                    },
                    {
                        "id": 7,
                        "respuesta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.respuestas.6.respuesta')
                    },
                    {
                        "id": 8,
                        "respuesta": t('SERVICIOS_DETALLE.S6.preguntasFrecuentes.respuestas.7.respuesta')
                    }
                ]
            }
        },
        {
            "title": t('SERVICIOS_DETALLE.S7.title'),
            "titleEn": "Day tour to Martín García island",
            "imgHeader": t('SERVICIOS_DETALLE.S7.imgHeader'),
            "duracion": t('SERVICIOS_DETALLE.S7.duracion'),
            "capacidad": t('SERVICIOS_DETALLE.S7.capacidad'),
            "partida": t('SERVICIOS_DETALLE.S7.partida'),
            "recorrido": t('SERVICIOS_DETALLE.S7.recorrido'),
            "imgMapa": t('SERVICIOS_DETALLE.S7.imgMapa'),
            "p1": t('SERVICIOS_DETALLE.S7.p1'),
            "p2": t('SERVICIOS_DETALLE.S7.p2'),
            "p3": t('SERVICIOS_DETALLE.S7.p3'),
            "link": t('SERVICIOS_DETALLE.S7.link'),
            "imgSlider": [
                t('SERVICIOS_DETALLE.S7.imgSlider.0'),
                t('SERVICIOS_DETALLE.S7.imgSlider.1'),
                t('SERVICIOS_DETALLE.S7.imgSlider.2'),
                t('SERVICIOS_DETALLE.S7.imgSlider.3'),
                t('SERVICIOS_DETALLE.S7.imgSlider.4'),
                t('SERVICIOS_DETALLE.S7.imgSlider.5')
            ],
            "reservar": t('SERVICIOS_DETALLE.S7.reservar'),
            "regalar": t('SERVICIOS_DETALLE.S7.regalar'),
            "preguntasFrecuentes": {
                "preguntas": [
                    {
                        "id": 1,
                        "pregunta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.preguntas.0.pregunta')
                    },
                    {
                        "id": 2,
                        "pregunta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.preguntas.1.pregunta')
                    },
                    {
                        "id": 3,
                        "pregunta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.preguntas.2.pregunta')
                    },
                    {
                        "id": 4,
                        "pregunta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.preguntas.3.pregunta')
                    },
                    {
                        "id": 5,
                        "pregunta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.preguntas.4.pregunta')
                    },
                    {
                        "id": 6,
                        "pregunta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.preguntas.5.pregunta')
                    },
                    {
                        "id": 7,
                        "pregunta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.preguntas.6.pregunta')
                    },
                    {
                        "id": 8,
                        "pregunta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.preguntas.7.pregunta')
                    }
                ],
                "respuestas": [
                    {
                        "id": 1,
                        "respuesta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.respuestas.0.respuesta')
                    },
                    {
                        "id": 2,
                        "respuesta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.respuestas.1.respuesta')
                    },
                    {
                        "id": 3,
                        "respuesta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.respuestas.2.respuesta')
                    },
                    {
                        "id": 4,
                        "respuesta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.respuestas.3.respuesta')
                    },
                    {
                        "id": 5,
                        "respuesta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.respuestas.4.respuesta')
                    },
                    {
                        "id": 6,
                        "respuesta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.respuestas.5.respuesta')
                    },
                    {
                        "id": 7,
                        "respuesta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.respuestas.6.respuesta')
                    },
                    {
                        "id": 8,
                        "respuesta": t('SERVICIOS_DETALLE.S7.preguntasFrecuentes.respuestas.7.respuesta')
                    }
                ]
            }
        },
        {
            "title": t('SERVICIOS_DETALLE.S8.title'),
            "titleEn": "West sector circuit",
            "imgHeader": t('SERVICIOS_DETALLE.S8.imgHeader'),
            "duracion": t('SERVICIOS_DETALLE.S8.duracion'),
            "capacidad": t('SERVICIOS_DETALLE.S8.capacidad'),
            "partida": t('SERVICIOS_DETALLE.S8.partida'),
            "recorrido": t('SERVICIOS_DETALLE.S8.recorrido'),
            "imgMapa": t('SERVICIOS_DETALLE.S8.imgMapa'),
            "p1": t('SERVICIOS_DETALLE.S8.p1'),
            "p2": t('SERVICIOS_DETALLE.S8.p2'),
            "p3": t('SERVICIOS_DETALLE.S8.p3'),
            "link": t('SERVICIOS_DETALLE.S8.link'),
            "imgSlider": [
                t('SERVICIOS_DETALLE.S8.imgSlider.0'),
                t('SERVICIOS_DETALLE.S8.imgSlider.1'),
                t('SERVICIOS_DETALLE.S8.imgSlider.2'),
                t('SERVICIOS_DETALLE.S8.imgSlider.3'),
                t('SERVICIOS_DETALLE.S8.imgSlider.4'),
                t('SERVICIOS_DETALLE.S8.imgSlider.5')
            ],
            "reservar": t('SERVICIOS_DETALLE.S8.reservar'),
            "regalar": t('SERVICIOS_DETALLE.S8.regalar'),
            "preguntasFrecuentes": {
                "preguntas": [
                    {
                        "id": 1,
                        "pregunta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.preguntas.0.pregunta')
                    },
                    {
                        "id": 2,
                        "pregunta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.preguntas.1.pregunta')
                    },
                    {
                        "id": 3,
                        "pregunta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.preguntas.2.pregunta')
                    },
                    {
                        "id": 4,
                        "pregunta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.preguntas.3.pregunta')
                    },
                    {
                        "id": 5,
                        "pregunta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.preguntas.4.pregunta')
                    },
                    {
                        "id": 6,
                        "pregunta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.preguntas.5.pregunta')
                    },
                    {
                        "id": 7,
                        "pregunta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.preguntas.6.pregunta')
                    },
                    {
                        "id": 8,
                        "pregunta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.preguntas.7.pregunta')
                    }
                ],
                "respuestas": [
                    {
                        "id": 1,
                        "respuesta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.respuestas.0.respuesta')
                    },
                    {
                        "id": 2,
                        "respuesta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.respuestas.1.respuesta')
                    },
                    {
                        "id": 3,
                        "respuesta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.respuestas.2.respuesta')
                    },
                    {
                        "id": 4,
                        "respuesta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.respuestas.3.respuesta')
                    },
                    {
                        "id": 5,
                        "respuesta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.respuestas.4.respuesta')
                    },
                    {
                        "id": 6,
                        "respuesta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.respuestas.5.respuesta')
                    },
                    {
                        "id": 7,
                        "respuesta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.respuestas.6.respuesta')
                    },
                    {
                        "id": 8,
                        "respuesta": t('SERVICIOS_DETALLE.S8.preguntasFrecuentes.respuestas.7.respuesta')
                    }
                ]
            }
        },
        {
            "title": t('SERVICIOS_DETALLE.S9.title'),
            "titleEn": "North sector circuit",
            "imgHeader": t('SERVICIOS_DETALLE.S9.imgHeader'),
            "duracion": t('SERVICIOS_DETALLE.S9.duracion'),
            "capacidad": t('SERVICIOS_DETALLE.S9.capacidad'),
            "partida": t('SERVICIOS_DETALLE.S9.partida'),
            "recorrido": t('SERVICIOS_DETALLE.S9.recorrido'),
            "imgMapa": t('SERVICIOS_DETALLE.S9.imgMapa'),
            "p1": t('SERVICIOS_DETALLE.S9.p1'),
            "p2": t('SERVICIOS_DETALLE.S9.p2'),
            "p3": t('SERVICIOS_DETALLE.S9.p3'),
            "link": t('SERVICIOS_DETALLE.S9.link'),
            "imgSlider": [
                t('SERVICIOS_DETALLE.S9.imgSlider.0'),
                t('SERVICIOS_DETALLE.S9.imgSlider.1'),
                t('SERVICIOS_DETALLE.S9.imgSlider.2'),
                t('SERVICIOS_DETALLE.S9.imgSlider.3'),
                t('SERVICIOS_DETALLE.S9.imgSlider.4'),
                t('SERVICIOS_DETALLE.S9.imgSlider.5'),
                t('SERVICIOS_DETALLE.S9.imgSlider.6')
            ],
            "reservar": t('SERVICIOS_DETALLE.S9.reservar'),
            "regalar": t('SERVICIOS_DETALLE.S9.regalar'),
            "preguntasFrecuentes": {
                "preguntas": [
                    {
                        "id": 1,
                        "pregunta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.preguntas.0.pregunta')
                    },
                    {
                        "id": 2,
                        "pregunta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.preguntas.1.pregunta')
                    },
                    {
                        "id": 3,
                        "pregunta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.preguntas.2.pregunta')
                    },
                    {
                        "id": 4,
                        "pregunta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.preguntas.3.pregunta')
                    },
                    {
                        "id": 5,
                        "pregunta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.preguntas.4.pregunta')
                    },
                    {
                        "id": 6,
                        "pregunta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.preguntas.5.pregunta')
                    },
                    {
                        "id": 7,
                        "pregunta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.preguntas.6.pregunta')
                    },
                    {
                        "id": 8,
                        "pregunta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.preguntas.7.pregunta')
                    }
                ],
                "respuestas": [
                    {
                        "id": 1,
                        "respuesta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.respuestas.0.respuesta')
                    },
                    {
                        "id": 2,
                        "respuesta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.respuestas.1.respuesta')
                    },
                    {
                        "id": 3,
                        "respuesta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.respuestas.2.respuesta')
                    },
                    {
                        "id": 4,
                        "respuesta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.respuestas.3.respuesta')
                    },
                    {
                        "id": 5,
                        "respuesta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.respuestas.4.respuesta')
                    },
                    {
                        "id": 6,
                        "respuesta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.respuestas.5.respuesta')
                    },
                    {
                        "id": 7,
                        "respuesta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.respuestas.6.respuesta')
                    },
                    {
                        "id": 8,
                        "respuesta": t('SERVICIOS_DETALLE.S9.preguntasFrecuentes.respuestas.7.respuesta')
                    }
                ]
            }
        },
        {
            "title": t('SERVICIOS_DETALLE.S10.title'),
            "titleEn": "International destinations",
            "imgHeader": t('SERVICIOS_DETALLE.S10.imgHeader'),
            "duracion": t('SERVICIOS_DETALLE.S10.duracion'),
            "capacidad": t('SERVICIOS_DETALLE.S10.capacidad'),
            "partida": t('SERVICIOS_DETALLE.S10.partida'),
            "recorrido": t('SERVICIOS_DETALLE.S10.recorrido'),
            "imgMapa": t('SERVICIOS_DETALLE.S10.imgMapa'),
            "p1": t('SERVICIOS_DETALLE.S10.p1'),
            "p2": t('SERVICIOS_DETALLE.S10.p2'),
            "p3": t('SERVICIOS_DETALLE.S10.p3'),
            "link": t('SERVICIOS_DETALLE.S10.link'),
            "imgSlider": [
                t('SERVICIOS_DETALLE.S10.imgSlider.0'),
                t('SERVICIOS_DETALLE.S10.imgSlider.1'),
                t('SERVICIOS_DETALLE.S10.imgSlider.2'),
                t('SERVICIOS_DETALLE.S10.imgSlider.3'),
                t('SERVICIOS_DETALLE.S10.imgSlider.4'),
                t('SERVICIOS_DETALLE.S10.imgSlider.5'),
                t('SERVICIOS_DETALLE.S10.imgSlider.6')

            ],
            "reservar": t('SERVICIOS_DETALLE.S10.reservar'),
            "regalar": t('SERVICIOS_DETALLE.S10.regalar'),
            "preguntasFrecuentes": {
                "preguntas": [
                    {
                        "id": 1,
                        "pregunta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.preguntas.0.pregunta')
                    },
                    {
                        "id": 2,
                        "pregunta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.preguntas.1.pregunta')
                    },
                    {
                        "id": 3,
                        "pregunta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.preguntas.2.pregunta')
                    },
                    {
                        "id": 4,
                        "pregunta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.preguntas.3.pregunta')
                    },
                    {
                        "id": 5,
                        "pregunta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.preguntas.4.pregunta')
                    },
                    {
                        "id": 6,
                        "pregunta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.preguntas.5.pregunta')
                    },
                    {
                        "id": 7,
                        "pregunta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.preguntas.6.pregunta')
                    },
                    {
                        "id": 8,
                        "pregunta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.preguntas.7.pregunta')
                    }
                ],
                "respuestas": [
                    {
                        "id": 1,
                        "respuesta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.respuestas.0.respuesta')
                    },
                    {
                        "id": 2,
                        "respuesta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.respuestas.1.respuesta')
                    },
                    {
                        "id": 3,
                        "respuesta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.respuestas.2.respuesta')
                    },
                    {
                        "id": 4,
                        "respuesta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.respuestas.3.respuesta')
                    },
                    {
                        "id": 5,
                        "respuesta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.respuestas.4.respuesta')
                    },
                    {
                        "id": 6,
                        "respuesta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.respuestas.5.respuesta')
                    },
                    {
                        "id": 7,
                        "respuesta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.respuestas.6.respuesta')
                    },
                    {
                        "id": 8,
                        "respuesta": t('SERVICIOS_DETALLE.S10.preguntasFrecuentes.respuestas.7.respuesta')
                    }
                ]
            }
        }
    ]




    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang); // Actualizar el estado del idioma seleccionado
    };


    const [servicio, setServicio] = useState(null);

    useEffect(() => {
        // Convertir el título de la URL a minúsculas y quitar los guiones
        const formattedTitle = title ? title.toLowerCase().replace(/-/g, "") : "";

        // Buscar el servicio correspondiente por su título (tanto en español como en inglés)
        const servicioEncontrado = servicios.find(servicio =>
            servicio.title.toLowerCase() === formattedTitle || (servicio.titleEn && servicio.titleEn.toLowerCase() === formattedTitle)
        );
        setServicio(servicioEncontrado);
    }, [title]);


    // Función para alternar la visibilidad de la respuesta
    const toggleAnswer = (index) => {
        setActiveQuestion(index === activeQuestion ? false : index);
    };

    const settings = {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    if (!servicio) {
        return <div>Cargando... <ClipLoader color={"#ffffff"} loading={true} /></div>;
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
            noneTraductor="none"
        >
            <div className="container-fluid p-5">
                {title !== "Paracaidismo" && title !== "Skydiving" && (
                    <div className='row contenedor-descripcion-servicio'>
                        <div className="col-lg-3 caja-servicio">
                            <h5><img src="/images/servicios/reloj.png" alt="" />{t("DURACION")}</h5>
                            <h4>{servicio.duracion}</h4>
                        </div>
                        <div className="col-lg-3 caja-servicio">
                            <h5><img src="/images/servicios/person.png" alt="" />{t("CAPACIDAD")}</h5>
                            <h4>{servicio.capacidad}</h4>
                        </div>
                        <div className="col-lg-3 caja-servicio">
                            <h5><img src="/images/servicios/map.png" alt="" />{t("PARTIDA")}</h5>
                            <h4>{servicio.partida}</h4>
                        </div>
                        <div className="col-lg-3 caja-servicio">
                            <h5><img src="/images/servicios/recorrido.png" alt="" />{t("RECORRIDO")}</h5>
                            <h4>{servicio.recorrido}</h4>
                        </div>
                    </div>
                )}
                <div className="row mapa-description-servicio">
                    <div className="col-lg-6 imgMapa" >
                        {(title === "Piloto por un día" || title === "Pilot for a Day") && (
                            <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                                <img src={servicio.imgMapa} alt="Mapa de Recorrido" style={{ height: "100%", width: "100%" }} />
                                <img src={servicio.imgMapa2} alt="Mapa de Recorrido" style={{ height: "100%", width: "100%" }} />
                                <img src={servicio.imgMapa3} alt="Mapa de Recorrido" style={{ height: "100%", width: "100%" }} />
                            </Slider>
                        )}
                        {title !== "Piloto por un día" && title !== "Pilot for a Day" && (
                            <img src={servicio.imgMapa} alt="Mapa de Recorrido" style={{ height: "100%", width: "100%" }} />
                        )}
                    </div>
                    <div className="col-lg-6 experiencia-servicio">
                        <div>
                            <h3>{t("LA-EXPERIENCIA")}</h3>
                        </div>
                        <div className='description-experiencia-servicio'>
                            <p>{servicio.p1}</p>
                            <p>{servicio.p2}</p>
                            <p>{servicio.p3}</p>
                            <a href={servicio.reservar}><button className="button-2">{t("RESERVAR")}</button></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Slider className='slider-experiencia-servicio' {...settings}>
                        {servicio.imgSlider.map((img, index) => (
                            <div className='slider-experiencia' key={index}>
                                <img src={img} alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="row call-action-servicio">
                    <div className="div-regalar-vivir">
                        <div className='vivir-1'><img src="images/logo2.png" alt="" /></div>
                        <div className='vivir-2'>
                            <h4>{t("VIVI")}</h4>
                            <p>{t("P-VIVI")}</p>
                        </div>
                        <div className='vivir-3'><a href={servicio.reservar}><button className="button-2">{t("RESERVAR")}</button></a></div>
                    </div>
                    <div className="div-regalar-vivir">
                        <div className='vivir-1'><img src="images/gift.png" alt="" /></div>
                        <div className='vivir-2'>
                            <h4>{t("REGALA")}</h4>
                            <p>{t("P-REGALA")}</p>
                        </div>
                        <div className='vivir-3'><a href={servicio.regalar}><button className="button-1">{t("REGALAR")}</button></a></div>
                    </div>
                </div>
                <div className="row preguntas-frecuentes">
                    <div className="contenedor-preguntas-frecuentes">
                        <h3>{t("PREGUNTAS-FRECUENTES")}</h3>
                        {servicio.preguntasFrecuentes.preguntas.map((pregunta, index) => (
                            <div key={pregunta.id} onClick={() => toggleAnswer(index)} className='pregunta-frecuente'>
                                <div className="question">
                                    <h4>{pregunta.pregunta}</h4>
                                    <img src="images/arrow.png" alt="" />
                                </div>
                                <div className='respuesta'>
                                    {activeQuestion === index && <p className='respuesta'>{servicio.preguntasFrecuentes.respuestas[index].respuesta}</p>}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Contacto />
        </Layout>
    );
}

export default ServicioDetail;
