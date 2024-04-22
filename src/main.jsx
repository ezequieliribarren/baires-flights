import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.scss'
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json'
import es from './i18n/es.json'
import Root from './Routes/Root';

i18next.use(initReactI18next)
.init({
    lng: 'es',
    interpolation:{
      escapeValue: false
    },
    resources:{
      en:{
       translation: en,
      } ,
      
      es:{
        translation: es,
       } 
    }
}


)

const router = createHashRouter([
  {
    path: "/",
    element: (
          <Root />
    ),
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
