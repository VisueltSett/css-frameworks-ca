import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <>
        <Container>
        <Row>
                <Col xs={12} md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item> <i class="fas fa-envelope"></i> hello@yay.com</ListGroup.Item>
                        <ListGroup.Item> <i class="fas fa-phone"></i> 123 456 7890</ListGroup.Item>
                        <ListGroup.Item>  <i class="fas fa-map-marker-alt"></i> 
                        123 Some Street
                        Somewhere
                        Some City
                        10000
                    </ListGroup.Item>
                    </ListGroup>
                </Col>
            
            <Col xs={12} md={6}>
                <ContactForm />
            </Col>
        </Row>
        </Container>
        <footer>
        <Container>
        <Row>
            <Col xs={12} md={4}>
                <i class="fab fa-vimeo-v"></i>
                <i class="fab fa-youtube"></i>
            </Col>
            <Col xs={6} md={4}>
                <a href="mailto:hello@yay.com">hello@yay.com</a>
            </Col>
            <Col xs={6} md={4}>
                <p>Copyright &copy;2021</p>
            </Col>
        </Row>
        </Container>
        </footer>

        </>
    );
}

export default Contact;
