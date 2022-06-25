import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.png';
import { Link } from 'react-router-dom'; 
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <Navbar className="navBg" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />e-SaLe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/categoria/notebooks'>Notebooks</Nav.Link>
            <Nav.Link as={Link} to='/categoria/celulares'>Celulares</Nav.Link>
            <Nav.Link as={Link} to='/categoria/televisores'>Televisores</Nav.Link>
            <Nav.Link as={Link} to='/categoria/electrodomesticos'>Electrodomésticos</Nav.Link>
            <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Brand as={Link} to='/carrito'>
              <img
                src={Cart}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="carrito"
              />
              <CartWidget />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;






