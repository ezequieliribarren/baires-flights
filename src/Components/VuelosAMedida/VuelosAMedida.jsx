import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';


const VuelosAMedida = () => {
    const { t } = useTranslation();
    const [mostrarPrimerFormulario, setMostrarPrimerFormulario] = useState(true);
    const [soloIdaSeleccionado, setSoloIdaSeleccionado] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8agyr7d', 'template_vchccbs', form.current, 'o2lkNC19cW0flhLkl') 
            .then((result) => {
                window.location.href = "#/enviado"
            }, (error) => {
                window.location.href = "#/error"
            });
    };


    const toggleFormularios = () => {
        setMostrarPrimerFormulario(!mostrarPrimerFormulario);
    };

    const handleSeleccion = (esSoloIda) => {
        setSoloIdaSeleccionado(esSoloIda);
    };

    return (
        <section id='vuelos-a-medida' className='container'>
            <h3 className='text-center margin-title'>{t("MEDIDA")}</h3>  
            <div className="select-form">
                    <h5>{t("FORM-IDA-VUELTA")}</h5><button className={`button-select ${!soloIdaSeleccionado ? 'selected' : ''}`} onClick={() => handleSeleccion(false)}></button>
                    <h5>{t("FORM-SOLO-IDA")}</h5><button className={`button-select ${soloIdaSeleccionado ? 'selected' : ''}`} onClick={() => handleSeleccion(true)}></button>
                </div> 
            <form className='form-a-medida row ' ref={form} onSubmit={sendEmail}>
            <div className={`row ${mostrarPrimerFormulario ? '' : 'none-a-medida'}`}>
                
             
                    <div className="form-group col-lg-2">
                        <div>
                            <img src="images/origen.png" alt="Origen" />
                            <label>{t("FORM-ORIGEN")}</label>
                        </div>
                        <input type="text"  name='user_origen'/>
                    </div>
                    <div className="form-group col-lg-2">
                        <div>
                            <img src="images/destino.png" alt="Destino" />
                            <label>{t("FORM-DESTINO")}</label>
                        </div>

                        <input type="text" name='user_destino' />
                    </div>
                    <div className="form-group col-lg-2">
                        <label>{t("FORM-PARTIDA")}</label>
                        <input type="date" name='user_partida'/>
                    </div>
                    <div className={`form-group col-lg-2 ${soloIdaSeleccionado ? 'none' : ''}`}>
                        <label>{t("FORM-REGRESO")}</label>
                        <input type="date" name='user_regreso'/>
                    </div>
                    <div className="form-group col-lg-1">
                        <label>{t("FORM-PASAJEROS")}</label>
                        <div className='pasajeros'>
                            <img src="images/pasajeros.png" alt="Pasajeros" />
                            <input type="number" name='user_pasajeros'/>
                        </div>
                        
                    </div>
                    <div className='col-lg-2 siguiente-a-medida'>
                    <button type="button" onClick={toggleFormularios}>{t("SIGUIENTE")}</button>
                    </div>  </div>
                    <div className={`row ${mostrarPrimerFormulario ? 'none-a-medida' : ''}`}>
                        <div className="select-form">
                            <button className='volver-a-medida' onClick={toggleFormularios}>{t("VOLVER")}</button>
                        </div>
                        <div className="form-group col-lg-3">
                            <div>
                                <img src="images/pasajeros.png" alt="Nombre" />
                                <label>{t("FORM-NOMBRE")}</label>
                            </div>
                            <input type="text" required name='user_nombre' />
                        </div>
                        <div className="form-group col-lg-3">
                            <div>
                                <img src="images/pasajeros.png" alt="Apellido" />
                                <label>{t("FORM-APELLIDO")}</label>
                            </div>

                            <input type="text" required name='user_apellido' />
                        </div>
                        <div className="form-group col-lg-2">
                            <div>
                                <img src="images/email.png" alt="Email" />
                                <label>{t("FORM-EMAIL")}</label>
                            </div>
                            <input type="mail" required name='user_email' />
                        </div>
                        <div className="form-group col-lg-2">
                            <div>
                                <img src="images/email.png" alt="Teléfono" />
                                <label>{t("FORM-TEL")}</label>
                            </div>
                            <input type="tel" required name='user_telefono' />
                        </div>
                        <div className='col-lg-2 siguiente-a-medida'>
                            <button type="submit" className='cotizar-a-medida'>{t("COTIZAR")}</button>
                        </div>
                    </div>
                    </form>

          
  

        </section>
    )
}

export default VuelosAMedida
