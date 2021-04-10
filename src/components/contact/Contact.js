import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Address from './Address'
import ContactForm from './ContactForm';

function Contact() {
    return (
        <>
        <Container>
        <Row>
                <Col xs={8} md={{ span: 6, order: 'last' }}>
                   <Address />
                </Col>
            
            <Col xs={12} md={{ span: 6, order: 'first' }}>
                <ContactForm />
            </Col>
        </Row>
        </Container>

        </>
    );
}

export default Contact;
