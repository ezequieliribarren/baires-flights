import React from 'react'
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

const Contacto = () => {
    const { t } = useTranslation();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8agyr7d', 'template_j8xzgta', form.current, 'o2lkNC19cW0flhLkl')
            .then((result) => {
                window.location.href = "#/enviado"
            }, (error) => {
                window.location.href = "#/error"
            });
    };

    return (
        <section id='contacto' className='p-5'>
            <h2 className='text-center margin-title'>{t("CONTACTANOS")}</h2>
            <div className='container-fluid '>
                <div className="row">
                    <div className='col-lg-6 contenedor-formulario'>
                        <form id="contactForm" ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label htmlFor="Nombre">{t("F-NOMBRE")}</label>
                                <input type="text" id="nombre" name='consult_name' required placeholder={t("F-P-NOMBRE")} />
                            </div>
                            <div className="form-group email-celular">
                                <div>
                                    <label htmlFor="Email">{t("F-EMAIL")}</label>
                                    <input type="email" id="email" name='user_email' required placeholder={t("F-P-EMAIL")} />
                                </div>
                                <div>
                                    <label htmlFor="Celular">{t("F-CELULAR")}</label>
                                    <input type="tel" id="tel" name="consult_tel" required placeholder={t("F-P-CELULAR")} />
                                </div>

                            </div>
                            <div className="form-group">
                                <label htmlFor="Dejanos tu mensaje">{t("F-MENSAJE")}</label>
                                <textarea id="mensaje" name="consult_message" required placeholder={t("F-P-MENSAJE")}></textarea>
                            </div>
                            <button className='button-2' type="submit" value="Enviar">{t("ENVIAR")}</button>
                        </form>
                    </div>
                    <div className='col-lg-6 redes-contacto'>
                        <a href="mailto:info@bairesflights.com.ar">
                            <img src="images/contacto/mail.png" alt="Mail Baires Flights" />
                            <h3>info@bairesflights.com.ar</h3>
                        </a>
                        <a href="https://www.instagram.com/baires.flights/"><img src="images/contacto/insta.png" alt="Instagram Baires Flights" /> <h3>@baires.flights</h3></a>
                        <a href="https://wa.me/+5491164930569?text=Hola,%20estoy%20en%20la%20página%20de%20Baires%20Flights%20y%20quiero%20pedir%20más%20información"><img src="images/contacto/wp.png" alt="Whatsapp" /> <h3>+54 9 11 6493-0569</h3></a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Contacto