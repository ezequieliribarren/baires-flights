import React from 'react'
import { useTranslation } from 'react-i18next';
import SliderServices from '../SliderServices/SliderServices';

const Experiencias = () => {
    const { t } = useTranslation();

  return (
    <section>
<h3 className='text-center margin-title'>{t("N-EXPERIENCIAS")}</h3>
<SliderServices/>
    </section>
  )
}

export default Experiencias