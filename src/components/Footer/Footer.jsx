import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Sucursales</h4>
            <ul className="list-unstyled">
              <li>Suc XXXXXXXXXXX</li>
              <li>Suc XXXXXXXXXXX</li>
              <li>Suc XXXXXXXXXXX</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Ayuda</h4>
            <ul className="list-unstyled">
              <li>Ayuda XXXXXXXXXXX</li>
              <li>Ayuda XXXXXXXXXXX</li>
              <li>Ayuda XXXXXXXXXXX</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Redes</h4>
            <ul className="list-unstyled">
              <li>Redes XXXXXXXXXXX</li>
              <li>Redes XXXXXXXXXXX</li>
              <li>Redes XXXXXXXXXXX</li>
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