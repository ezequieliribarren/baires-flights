import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = ({ changeLanguage, selectedLanguage }) => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand"><img src="images/logo.png" alt="" /></Link>
                <button 
                    className={`navbar-toggler ${isMenuOpen ? 'd-none' : ''}`} // Ocultar el botón del toggler cuando el menú está abierto
                    type="button" 
                    onClick={toggleMenu}
                    style={{ backgroundColor: '#FFCF00', borderColor: '#FFCF00' }} // Cambiar el color del botón del toggler
                >
                    &#9776; {/* Ícono de hamburguesa */}
                </button>
                <button 
                    className={`navbar-toggler ${!isMenuOpen ? 'd-none' : ''}`} // Ocultar el botón del toggler cuando el menú está cerrado
                    type="button" 
                    onClick={toggleMenu}
                    style={{ backgroundColor: '#FFCF00', borderColor: '#FFCF00', fontWeight: "800" }} 
                >
                    X
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="/#nosotros" 
                                className="nav-link"
                            >
                                {t("NOSOTROS")}
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {t("SERVICIOS")}
                            </Link>
                            <ul className="dropdown-menu">
                                <li >
                                    <Link to={`/experiencias/${t('SERVICIOS_DETALLE.S1.title')}`} className="dropdown-item">
                                        {t('SERVICIOS_DETALLE.S1.title')}
                                    </Link>
                                    <Link to={`/experiencias/${t(`SERVICIOS_DETALLE.S2.title`)}`} className="dropdown-item" >
                                        {t(`SERVICIOS_DETALLE.S2.title`)}
                                    </Link>
                                    <Link to={`/experiencias/${t(`SERVICIOS_DETALLE.S3.title`)}`} className="dropdown-item" >
                                        {t(`SERVICIOS_DETALLE.S3.title`)}
                                    </Link>
                                    <Link to={`/experiencias/${t(`SERVICIOS_DETALLE.S4.title`)}`} className="dropdown-item" >
                                        {t(`SERVICIOS_DETALLE.S4.title`)}
                                    </Link>
                                    <Link to={`/experiencias/${t(`SERVICIOS_DETALLE.S5.title`)}`} className="dropdown-item" >
                                        {t(`SERVICIOS_DETALLE.S5.title`)}
                                    </Link>
                                    <Link to={`/experiencias/${t(`SERVICIOS_DETALLE.S6.title`)}`} className="dropdown-item" >
                                        {t(`SERVICIOS_DETALLE.S6.title`)}
                                    </Link>
                                    <Link to={`/experiencias/${t(`SERVICIOS_DETALLE.S7.title`)}`} className="dropdown-item" >
                                        {t(`SERVICIOS_DETALLE.S7.title`)}
                                    </Link>
                                    <Link to={`/experiencias/${t(`SERVICIOS_DETALLE.S8.title`)}`} className="dropdown-item" >
                                        {t(`SERVICIOS_DETALLE.S8.title`)}
                                    </Link>
                                    <Link to={`/experiencias/${t(`SERVICIOS_DETALLE.S9.title`)}`} className="dropdown-item" >
                                        {t(`SERVICIOS_DETALLE.S9.title`)}
                                    </Link>
                                    <Link to={`/experiencias/${t(`SERVICIOS_DETALLE.S10.title`)}`} className="dropdown-item" >
                                        {t(`SERVICIOS_DETALLE.S10.title`)}
                                    </Link>


                                </li>


                            </ul>
                        </li>
                        <li className="nav-item esp-en">
                            <div className='nav-link'>
                                <button
                                    className={` ${selectedLanguage === 'es' ? 'active-language' : 'inactive-language'}`}
                                    onClick={() => changeLanguage('es')}
                                >ES
                                </button>
                                /
                                <button
                                    className={` ${selectedLanguage === 'en' ? 'active-language' : 'inactive-language'}`}
                                    onClick={() => changeLanguage('en')}
                                >EN
                                </button>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link style={{color: "#FFCF00"}} to="/shop" className="nav-link">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link contact">{t("CONTACTO")}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
