import React from "react";
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div className="justify-content-center text-center customContactContainer">
      <h1>Cuentanos, ¿En que te podemos ayudar?</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Correo electronico"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control as="textarea" rows={3}/>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Contact;