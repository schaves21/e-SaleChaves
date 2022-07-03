import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Sucursales</h4>
            <ul className="list-unstyled">
              <li>General Flores 590 - Colonia</li>
              <li>18 de Julio 1005 - Montevideo</li>
              <li>Juan Gorlero 650 - Punta del Este</li>
            </ul>
          </div>

          <div className="col">
            <h4>Preguntas Frecuentes</h4>
            <ul className="list-unstyled">
              <li>Envíos Gratis</li>
              <li>Privacidad y Seguridad</li>
              <li>Términos de Uso</li>
            </ul>
          </div>
          <div className="col">
            <h4>Seguinos en</h4>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Hermanos Sale S.A. | Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;