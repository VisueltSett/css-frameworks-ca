import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Contact() {
    return (
        <>
           <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Go</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>  


        <footer>
        <Container>
        <Row>
            <Col xs={12} md={4}>
                <i class="fab fa-vimeo-v"></i>
                <i class="fab fa-youtube"></i>
            </Col>
            <Col>
                <a href="mailto:hello@yay.com">hello@yay.com</a>
            </Col>
            <Col>
                <p>Copyright &copy;2021</p>
            </Col>
        </Row>
        </Container>
    </footer>

        </>
    );
}

export default Contact;
