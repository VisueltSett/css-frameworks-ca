import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <>
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

export default Footer;
