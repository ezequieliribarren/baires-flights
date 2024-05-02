import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import imagenesData from '../../nosotros.json'; // Importa el archivo JSON

const Nosotros = () => {
    const { t } = useTranslation();

    const settings = {
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 4,
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
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section id='nosotros'>
            <h2 className='text-center margin-title'>{t("CONOCENOS")}</h2>
            <div className="container contenedor-nosotros">
                <div className="row description nosotros">
                    <div className="col-md-5 img-nosotros">
                        <img src="images/nosotros/logo-nosotros.png" alt="Baires Flights" />
                    </div>
                    <div className="col-md-7">
                        <h3 className='margin-title'>{t("NOSOTROS")}</h3>
                        <p className='margin-title'> <strong>{t("P-NOS-1")}</strong></p>
                        <p>{t("P-NOS-2")}</p>
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
