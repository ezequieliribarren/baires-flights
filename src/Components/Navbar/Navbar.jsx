import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('es'); 


    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang); // Actualizar el estado del idioma seleccionado
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#"><img src="images/logo.png" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link">{t("NOSOTROS")}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {t("SERVICIOS")}
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">{t("S1")}</Link></li>
                                <li><Link className="dropdown-item" href="#">{t("S2")}</Link></li>
                                <li><Link className="dropdown-item" href="#">{t("S3")}</Link></li>
                                <li><Link className="dropdown-item" href="#">{t("S4")}</Link></li>
                                <li><Link className="dropdown-item" href="#">{t("S5")}</Link></li>
                                <li><Link className="dropdown-item" href="#">{t("S6")}</Link></li>
                                <li><Link className="dropdown-item" href="#">{t("S7")}</Link></li>
                                <li><Link className="dropdown-item" href="#">{t("S8")}</Link></li>
                                <li><Link className="dropdown-item" href="#">{t("S9")}</Link></li>
                                <li><Link className="dropdown-item" href="#">{t("S10")}</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item esp-en">
                            <div className='nav-link'>
                                                        <button
                                className={` ${selectedLanguage === 'es' ? 'active-language' : 'inactive-language'}`}
                                onClick={() => changeLanguage('es')}
                            >
                                ES
                            </button>
                            /
                            <button
                                className={` ${selectedLanguage === 'en' ? 'active-language' : 'inactive-language'}`}
                                onClick={() => changeLanguage('en')}
                            >
                                EN
                            </button>
                            </div>


                        </li>
                        <li className="nav-item">
                            <Link className="nav-link contact">{t("CONTACTO")}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
