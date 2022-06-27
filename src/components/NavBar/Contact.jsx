import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css';

const Contact = () => {
  return (

    <div className="contactForm">

      <Form className="form">

        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="LastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button className="button" variant="light" type="submit">
          Enviar
        </Button>

      </Form>

    </div>

  )
}

export default Contact;