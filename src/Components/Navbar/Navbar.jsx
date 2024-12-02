import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = ({ changeLanguage, selectedLanguage, noneTraductor }) => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Al cargar la página, verifica si hay un idioma seleccionado en el almacenamiento local
    useEffect(() => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage) {
            changeLanguage(storedLanguage);
        }
    }, []);

    // Función para cambiar el idioma y almacenarlo en el almacenamiento local
    const handleLanguageChange = (language) => {
        changeLanguage(language);
        localStorage.setItem('selectedLanguage', language);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Función para hacer scroll a una sección en particular
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
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
                                to="/"
                                onClick={() => scrollToSection("nosotros")}
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
                                {[...Array(10)].map((_, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={`/experiencias/${t(`SERVICIOS_DETALLE.S${index + 1}.title`)}`} 
                                            className="dropdown-item"
                                        >
                                            {t(`SERVICIOS_DETALLE.S${index + 1}.title`)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item esp-en">
                            <div className={`nav-link ${noneTraductor}`}>
                                <button
                                    className={`${i18n.language === 'es' ? 'active-language' : 'inactive-language'}`}
                                    onClick={() => handleLanguageChange('es')}
                                >ES
                                </button>
                                /
                                <button
                                    className={`${i18n.language === 'en' ? 'active-language' : 'inactive-language'}`}
                                    onClick={() => handleLanguageChange('en')}
                                >EN
                                </button>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link style={{ color: "#FFCF00" }} to="/shop" className="nav-link">Shop</Link>
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
