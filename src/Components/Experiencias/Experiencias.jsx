import React from 'react'
import { useTranslation } from 'react-i18next';
import SliderServices from '../SliderServices/SliderServices';
import { HashLink as Link } from 'react-router-hash-link';

const Experiencias = () => {
  const { t } = useTranslation();

  return (
    <section className='container-fluid'>
      <h3 className='text-center margin-title'>{t("N-EXPERIENCIAS")}</h3>
      <SliderServices />
      <div className='d-flex justify-content-center margin-title'>
        <Link to="/experiencias">
          <button className='button-1'>VER TODAS</button>
        </Link>
      </div>

    </section>
  )
}

export default Experiencias