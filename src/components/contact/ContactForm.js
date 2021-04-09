import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  return (
    <Form>
     <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="" />
    </Form.Group>
      <Form.Label htmlFor="formInputName2">
        Name
      </Form.Label>
      <Form.Control
        className="mb-2 mr-sm-2"
        id="formInputName2"
        placeholder=""
      />
      <label htmlFor="basic-url">Website</label>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon3">
          https://
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control id="basic-url" aria-describedby="basic-addon3" />
    </InputGroup>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={5} />
    </Form.Group>
    <Form.Check
      type="checkbox"
      className="mb-2 mr-sm-2"
      id="inlineFormCheck"
      label="Allow us to sell your personal details to whomever we want"
    />
     
    <Button type="submit" className="mb-2">
      Submit
    </Button>
  </Form>
  );
}

export default ContactForm;
