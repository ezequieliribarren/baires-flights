import React, { useState, useEffect } from 'react';

import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../Components/Navbar/Navbar';
import { useTranslation } from 'react-i18next';
import Layout from '../Layout/Layout';

const Shop = () => {

    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('es');
    const { t } = useTranslation();


    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang); // Actualizar el estado del idioma seleccionado
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

<Layout end={"end"} contentH1={"Nuestras Experiencias"} changeLanguage={changeLanguage} selectedLanguage={selectedLanguage} inherit={"inherit"} none={"none"} height={"auto"} noneTraductor="none" >            
<div className='shop'>
                <section className='contenedor-shop'>
                    <div>
                        <img src="images/avion.png" alt="" />
                    </div>
                    <div>
                        <h2>{t("ESTA-PAGINA")}</h2>
                        <h1>{t("ATERRIZA")}</h1>
                        <h3>{t("MIENTRAS")} <Link to="/experiencias"><span style={{ color: "#FFCF00", textDecoration: "underline" }}>{t("NUESTRAS")}</span></Link></h3>
                    </div>

                </section>
            </div>
        </Layout>


    )
}

export default Shop