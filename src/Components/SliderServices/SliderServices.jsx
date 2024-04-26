import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next'; // Importa useTranslation aquí
import { HashLink as Link } from 'react-router-hash-link';

const Sliderservicios = () => {
    const { t } = useTranslation(); // Usa useTranslation dentro del componente

    const servicios = [
        {
            id: 1,
            title: t("PILOTO-POR-UN-DIA"), // Traduce el título utilizando t
            description: "Descripción del servicio 1",
            img: "images/servicios/piloto.png"
        },
        {
            id: 2,
            title: t("VUELO-BAUTISMO"),
            description: "Descripción del servicio 2",
            img: "images/servicios/bautismo.png"
        },
        {
            id: 3,
            title: t("EXP-AEREAS"),
            description: "Descripción del servicio 3",
            img: "images/servicios/exp-aereas.png"
        },
        {
            id: 4,
            title: t("TRASLADOS"),
            description: "Descripción del servicio 3",
            img: "images/servicios/traslados.png"
        },
        {
            id: 5,
            title: t("HELICOPTERO"),
            description: "Descripción del servicio 3",
            img: "images/servicios/helicoptero.png"
        },
        {
            id: 6,
            title: t("PARACAIDISMO"),
            description: "Descripción del servicio 3",
            img: "images/servicios/paracaidismo.png"
        },
        {
            id: 7,
            title: t("C-NORTE"),
            description: "Descripción del servicio 3",
            img: "images/servicios/norte.png"
        },
        {
            id: 8,
            title: t("C-OESTE"),
            description: "Descripción del servicio 3",
            img: "images/servicios/oeste.png"
        },
        {
            id: 9,
            title: t("M-GARCIA"),
            description: "Descripción del servicio 3",
            img: "images/servicios/martin-garcia.png"
        },
        {
            id: 10,
            title: t("D-INTERNACIONALES"),
            description: "Descripción del servicio 3",
            img: "images/servicios/internacionales.png"
        }
    ];

    const settings = {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: false,

    };

    return (
        <div className='container-slider-services'>
            <Slider className='slider-services' {...settings}>
                {servicios.map(service => (
                    <div className="card item-slider-services" key={service.id}>
                        <img src={service.img} className="card-img-top" alt={service.title} />
                        <div className="card-body">
                            <h4 className="card-title">{service.title}</h4>
                            <p>{service.description}</p>
                            <Link>+</Link>
                        </div>
                    </div>
                ))}



            </Slider>
        </div>

    );
};

export default Sliderservicios;


