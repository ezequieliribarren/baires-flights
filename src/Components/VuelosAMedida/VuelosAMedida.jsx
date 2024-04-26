import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const VuelosAMedida = () => {
    const { t } = useTranslation();
    const [mostrarPrimerFormulario, setMostrarPrimerFormulario] = useState(true);
    const [soloIdaSeleccionado, setSoloIdaSeleccionado] = useState(false);

    const toggleFormularios = () => {
        setMostrarPrimerFormulario(!mostrarPrimerFormulario);
    };

    const handleSeleccion = (esSoloIda) => {
        setSoloIdaSeleccionado(esSoloIda);
    };

    return (
        <section id='vuelos-a-medida' className='container'>
            <h3 className='text-center margin-title'>{t("MEDIDA")}</h3>
            <div className={`row contenedor-a-medida ${mostrarPrimerFormulario ? '' : 'none-a-medida'}`}>
                <div className="select-form">
                    <h5>{t("FORM-IDA-VUELTA")}</h5><button className={`button-select ${!soloIdaSeleccionado ? 'selected' : ''}`} onClick={() => handleSeleccion(false)}></button>
                    <h5>{t("FORM-SOLO-IDA")}</h5><button className={`button-select ${soloIdaSeleccionado ? 'selected' : ''}`} onClick={() => handleSeleccion(true)}></button>
                </div>
                <form className='form-a-medida row' action="">
                    <div className="form-group col-sm-2">
                        <div>
                            <img src="images/origen.png" alt="Origen" />
                            <label>{t("FORM-ORIGEN")}</label>
                        </div>
                        <input type="text" />
                    </div>
                    <div className="form-group col-sm-2">
                        <div>
                            <img src="images/destino.png" alt="Destino" />
                            <label>{t("FORM-DESTINO")}</label>
                        </div>

                        <input type="text" />
                    </div>
                    <div className="form-group col-sm-2">
                        <label>{t("FORM-PARTIDA")}</label>
                        <input type="date" />
                    </div>
                    <div className={`form-group col-sm-2 ${soloIdaSeleccionado ? 'none' : ''}`}>
                        <label>{t("FORM-REGRESO")}</label>
                        <input type="date" />
                    </div>
                    <div className="form-group col-sm-1">
                        <label>{t("FORM-PASAJEROS")}</label>
                        <div className='pasajeros'>
                            <img src="images/pasajeros.png" alt="Pasajeros" />
                            <input type="number" />
                        </div>
                        
                    </div>
                    <div className='col-sm-2 siguiente-a-medida'>
                    <button type="button" onClick={toggleFormularios}>{t("SIGUIENTE")}</button>
                    </div>
                </form>

            </div>
            <div className={`row contenedor-a-medida ${mostrarPrimerFormulario ? 'none-a-medida' : ''}`}>
                <div className="select-form">
                <button className='volver-a-medida' onClick={toggleFormularios}>{t("VOLVER")}</button>
                </div>
                <form className='form-a-medida row' action="">
                    <div className="form-group col-sm-3">
                        <div>
                            <img src="images/pasajeros.png" alt="Nombre" />
                            <label>{t("FORM-NOMBRE")}</label>
                        </div>
                        <input type="text" />
                    </div>
                    <div className="form-group col-sm-3">
                        <div>
                            <img src="images/pasajeros.png" alt="Apellido" />
                            <label>{t("FORM-APELLIDO")}</label>
                        </div>

                        <input type="text" />
                    </div>
                    <div className="form-group col-sm-2">
                    <div>
                            <img src="images/email.png" alt="Email" />
                            <label>{t("FORM-EMAIL")}</label>
                        </div>
                        <input type="mail" />
                    </div>
                    <div className="form-group col-sm-2">
                    <div>
                            <img src="images/email.png" alt="Teléfono" />
                            <label>{t("FORM-TEL")}</label>
                        </div>
                        <input type="tel" />
                    </div> 
                    <div className='col-sm-2 siguiente-a-medida'>
                    <button type="button" className='cotizar-a-medida'>{t("COTIZAR")}</button>
                    </div>
                </form>

            </div>

        </section>
    )
}

export default VuelosAMedida
