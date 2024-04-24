import React from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = ({ changeLanguage, selectedLanguage }) => {
    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg ">
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
                                {Object.keys(t("SERVICIOS_DETALLE")).map((key) => (
                                    <li key={key}><Link className="dropdown-item" href="#">{t(`SERVICIOS_DETALLE.${key}`)}</Link></li>
                                ))}
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
