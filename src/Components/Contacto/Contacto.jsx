import React from 'react'

const Contacto = () => {
  return (
    <section id='contacto' className='p-5'>
    <h2 className='text-center margin-title'>Contactanos</h2>
    <div className='container-fluid '>
        <div className="row">
            <div className='col-lg-6 contenedor-formulario'>
                <form id="contactForm">
                    <div className="form-group">
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" id="nombre" name='user_name' required placeholder='Tu nombre' />
                    </div>
                    <div className="form-group email-celular">
                        <div>
                            <label htmlFor="Email">Email</label>
                            <input type="email" id="email" name='user_email' required placeholder='ejemplo@gmail.com' />
                        </div>
                        <div>
                            <label htmlFor="Celular">Celular</label>
                            <input type="tel" id="tel" name="user_tel" required placeholder='11-0000-0000' />
                        </div>

                    </div>
                    <div className="form-group">
                        <label htmlFor="Dejanos tu mensaje">Dejanos tu mensaje</label>
                        <textarea id="mensaje" name="mensaje" required placeholder='Por favor escribí aquí tu mensaje'></textarea>
                    </div>
                    <button className='button-2' type="submit" value="Enviar">ENVIAR</button>
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