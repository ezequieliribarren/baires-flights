import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import imagenesData from '../../nosotros.json'; // Importa el archivo JSON

const Nosotros = () => {
    const { t } = useTranslation();

    const settings = {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
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

    return (
        <section id='nosotros'>
            <h2 className='text-center margin-title'>Conócenos</h2>
            <div className="container contenedor-nosotros">
                <div className="row description nosotros">
                    <div className="col-md-5 img-nosotros">
                        <img src="images/nosotros/logo-nosotros.png" alt="Baires Flights" />
                    </div>
                    <div className="col-md-7">
                        <h3 className='margin-title'>Nosotros</h3>
                        <p className='margin-title'> <strong>En Baires Flights, nos dedicamos a hacer realidad el deseo y la pasión de volar los cielos.</strong></p>
                        <p>Con una amplia trayectoria y una actualización constante, ofrecemos un servicio de altísima calidad que conecta personas y destinos para unir sueños e historias, creando recuerdos y experiencias únicas. Contamos con una amplia flota que brinda la posibilidad incluso a aquellas personas que buscan convertirse en Pilotos de cumplir su sueño.</p>
                    </div>
                </div>
                <div className="row">
                    <Slider className='slider-nosotros' {...settings}>
                        {imagenesData.imagenes.map((imagen, index) => (
                            <div key={index}>
                                <img src={imagen.url} alt={`Imagen ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Nosotros;
