import React from 'react'
import { useTranslation } from 'react-i18next';

const Contacto = () => {
    const { t } = useTranslation();

  return (
    <section id='contacto' className='p-5'>
    <h2 className='text-center margin-title'>{t("CONTACTANOS")}</h2>
    <div className='container-fluid '>
        <div className="row">
            <div className='col-lg-6 contenedor-formulario'>
                <form id="contactForm">
                    <div className="form-group">
                        <label htmlFor="Nombre">{t("F-NOMBRE")}</label>
                        <input type="text" id="nombre" name='user_name' required placeholder={t("F-P-NOMBRE")} />
                    </div>
                    <div className="form-group email-celular">
                        <div>
                            <label htmlFor="Email">{t("F-EMAIL")}</label>
                            <input type="email" id="email" name='user_email' required placeholder={t("F-P-EMAIL")} />
                        </div>
                        <div>
                            <label htmlFor="Celular">{t("F-CELULAR")}</label>
                            <input type="tel" id="tel" name="user_tel" required placeholder={t("F-P-CELULAR")} />
                        </div>

                    </div>
                    <div className="form-group">
                        <label htmlFor="Dejanos tu mensaje">{t("F-MENSAJE")}</label>
                        <textarea id="mensaje" name="mensaje" required placeholder={t("F-P-MENSAJE")}></textarea>
                    </div>
                    <button className='button-2' type="submit" value="Enviar">{t("ENVIAR")}</button>
                </form>
            </div>
            <div className='col-lg-6 redes-contacto'>
                <a href=""><img src="images/contacto/mail.png" alt="Mail Baires Flights" /><h3>info@bairesflights.com.ar</h3></a>
                <a href=""><img src="images/contacto/insta.png" alt="Instagram Baires Flights" /> <h3>@baires.flights</h3></a>
                <a href=""><img src="images/contacto/wp.png" alt="Whatsapp" /> <h3>+54 9 11 6493-0569</h3></a>
            </div>
        </div>

    </div>

</section>
  )
}

export default Contacto