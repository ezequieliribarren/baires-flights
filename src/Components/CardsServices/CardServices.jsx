import React from 'react'
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';


const CardServices = () => {

    const { t } = useTranslation(); // Usa useTranslation dentro del componente


    const servicios = [
        {
            id: 1,
            title: t("SERVICIOS_DETALLE.S3.title"), 
            description: t("SERVICIOS_DETALLE.S3.p1"),
            img: "images/servicios/piloto.png"
        },
        {
            id: 2,
            title: t("SERVICIOS_DETALLE.S1.title"),
            description: t("SERVICIOS_DETALLE.S1.p1"),
            img: "images/servicios/bautismo.png"
        },
        {
            id: 3,
            title: t("SERVICIOS_DETALLE.S2.title"),
            description: t("SERVICIOS_DETALLE.S2.p1"),
            img: "images/servicios/exp-aereas.png"
        },
        {
            id: 4,
            title: t("SERVICIOS_DETALLE.S4.title"),
            description: t("SERVICIOS_DETALLE.S4.p1"),
            img: "images/servicios/traslados.png"
        },
        {
            id: 5,
            title: t("SERVICIOS_DETALLE.S5.title"),
            description: t("SERVICIOS_DETALLE.S5.p1"),
            img: "images/servicios/helicoptero.png"
        },
        {
            id: 6,
            title: t("SERVICIOS_DETALLE.S6.title"),
            description: t("SERVICIOS_DETALLE.S6.p1"),
            img: "images/servicios/paracaidismo.png"
        },
        {
            id: 7,
            title: t("SERVICIOS_DETALLE.S9.title"),
            description: t("SERVICIOS_DETALLE.S8.p1"),
            img: "images/servicios/norte.png"
        },
        {
            id: 8,
            title: t("SERVICIOS_DETALLE.S7.title"),
            description: t("SERVICIOS_DETALLE.S7.p1"),
            img: "images/servicios/oeste.png"
        },
        {
            id: 9,
            title: t("SERVICIOS_DETALLE.S7.title"),
            description: t("SERVICIOS_DETALLE.S7.p1"),
            img: "images/servicios/martin-garcia.png"
        },
        {
            id: 10,
            title: t("SERVICIOS_DETALLE.S10.title"),
            description: t("SERVICIOS_DETALLE.S10.p1"),
            img: "images/servicios/internacionales.png"
        }
    ];
    return (
        <section id='services'>
            {servicios.map(service => (
                <div className="card card-services" key={service.id}>
                    <Link to={`/experiencias/${service.title}`}>
                        <img src={service.img} className="card-img-top" alt={service.title} />
                        <div className="card-body">
                            <h4 className="card-title">{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    );
};

export default CardServices;