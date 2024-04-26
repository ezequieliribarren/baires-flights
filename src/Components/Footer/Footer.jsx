import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer >
      <div className="row">
        <div className="col-md-5 redes-logo-footer">
          <div>
            <img src="images/logo-footer.png" alt="Footer" />
          </div>
          <div className='redes-footer'>
            <a href=""><img src="images/contacto/insta.png" alt="Instagram" />@baires.flights</a>
            <a href=""><img src="images/contacto/mail.png" alt="Mail" />info@baires.flights.com.ar</a>
            <a href=""><img src="images/contacto/wp.png" alt="Whatsapp" />+54 9 11 6493-0569</a>
          </div>
        </div>
        <div className="col-md-7">
          <div className="row links-footer">
            <div className="col-3"><Link><h4>Nosotros</h4></Link></div>
            <div className="col-3">
              <Link><h4>Servicios</h4></Link>
              <Link><h5>Vuelos de Bautismo</h5></Link>
              <Link><h5>Experiencias aéreas</h5></Link>
              <Link><h5>Piloto por un día</h5></Link>
              <Link><h5>Traslados aéreos</h5></Link>
            </div>
            <div className="col-3" style={{ marginTop: "4rem" }}>
              <Link><h5>Vuelos en helicóptero</h5></Link>
              <Link><h5>Paracaidismo</h5></Link>
              <Link><h5>Day Tour Martín García</h5></Link>
              <Link><h5>Circuito sector Oeste</h5></Link>
            </div>
            <div className="col-3" style={{ marginTop: "4rem" }}>
              <Link><h5>Circuito sector norte</h5></Link>
              <Link><h5>Destinos internacionales</h5></Link>
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
          <h5>Diseñada y desarrollada por<a href=""> <strong> Versa Digital</strong></a></h5>
        </div>

      </div>
    </footer>
  )
}

export default Footer