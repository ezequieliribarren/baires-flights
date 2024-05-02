import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer >
      <div className="row">
        <div className="col-lg-6 redes-logo-footer">
          <div className="row">
            <div className='col-sm-6'>
              <img src="images/logo-footer.png" alt="Footer" />
            </div>
            <div className='col-sm-6 redes-footer'>
              <a href=""><img src="images/contacto/insta.png" alt="Instagram" />@baires.flights</a>
              <a href=""><img src="images/contacto/mail.png" alt="Mail" />info@baires.flights.com.ar</a>
              <a href=""><img src="images/contacto/wp.png" alt="Whatsapp" />+54 9 11 6493-0569</a>
            </div>
          </div>

        </div>
        <div className="col-lg-6">
          <div className="row links-footer">
            <div className="col-md-3"><Link><h4>{t("NOSOTROS")}</h4></Link></div>
            <div className="col-md-3">
              <Link><h4>{t("SERVICIOS")}</h4></Link>
              <Link><h5 className='first-h5'>{t('SERVICIOS_DETALLE.S1.title')}</h5></Link>
              <Link><h5>{t('SERVICIOS_DETALLE.S2.title')}</h5></Link>
              <Link><h5>{t('SERVICIOS_DETALLE.S3.title')}</h5></Link>
              <Link><h5>{t('SERVICIOS_DETALLE.S4.title')}</h5></Link>
            </div>
            <div className="col-md-3" style={{ marginTop: "4rem" }}>
              <Link><h5>{t('SERVICIOS_DETALLE.S5.title')}</h5></Link>
              <Link><h5>{t('SERVICIOS_DETALLE.S10.title')}</h5></Link>
              <Link><h5>{t('SERVICIOS_DETALLE.S6.title')}</h5></Link>
              <Link><h5>{t('SERVICIOS_DETALLE.S7.title')}</h5></Link>
            </div>
            <div className="col-md-3" style={{ marginTop: "4rem" }}>
              <Link><h5>{t('SERVICIOS_DETALLE.S8.title')}</h5></Link>
              <Link><h5>{t('SERVICIOS_DETALLE.S9.title')}</h5></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="line">

        </div>
      </div>

      <div className="row mt-3">
        <div className='d-flex justify-content-center'>
          <h5><a href="">{t('COPY')}<strong> Versa Digital</strong></a></h5>
        </div>

      </div>
    </footer>
  )
}

export default Footer