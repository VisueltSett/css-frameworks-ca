import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Navigation() {
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

        </>
    );
}

export default Navigation;
