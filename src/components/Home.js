import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


function Home() {
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
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../../public/Carousel images/carousel-1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../../public/Carousel images/carousel-2.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../../public/Carousel images/carousel-3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <h1>We do YAY Things</h1>
        <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                First
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Card.Text>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    </Card.Text>
                    <Card.Img src="../../public/Tab images/tab-1.jpg" alt="first-tab" />
                    <Card.Link href="#">SHARE</Card.Link>
                    <Card.Link href="#"><i class="fab fa-facebook-f"></i></Card.Link>
                    <Card.Link href="#"><i class="fab fa-twitter"></i></Card.Link>

                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Second
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <Card.Text>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    </Card.Text>
                    <Card.Img src="../../public/Tab images/tab-2.jpg" alt="second-tab"/>
                    <Card.Link href="#">SHARE</Card.Link>
                    <Card.Link href="#"><i class="fab fa-facebook-f"></i></Card.Link>
                    <Card.Link href="#"><i class="fab fa-twitter"></i></Card.Link>

                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                Third
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <Card.Text>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    </Card.Text>
                    <Card.Img src="../../public/Tab images/tab-1.jpg" alt="third-tab"/>
                    <Card.Link href="#">SHARE</Card.Link>
                    <Card.Link href="#"><i class="fab fa-facebook-f"></i></Card.Link>
                    <Card.Link href="#"><i class="fab fa-twitter"></i></Card.Link>

                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        
        
        </>
    );
}

export default Home;
