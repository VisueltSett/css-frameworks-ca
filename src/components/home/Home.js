import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Home() {
    return (
        <>

        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Carousel images/carousel-1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Carousel images/carousel-2.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Carousel images/carousel-3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <h1>We do YAY Things</h1>
        <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
        
        <Accordion defaultActiveKey="0" className="d-md-none">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                First
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Card.Text>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    </Card.Text>
                    <Card.Img src="/Tab images/tab-1.jpg" alt="first-tab" />
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
                    <Card.Img src="/Tab images/tab-2.jpg" alt="second-tab"/>
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
                    <Card.Img src="/Tab images/tab-3.jpg" alt="third-tab"/>
                    <Card.Link href="#">SHARE</Card.Link>
                    <Card.Link href="#"><i class="fab fa-facebook-f"></i></Card.Link>
                    <Card.Link href="#"><i class="fab fa-twitter"></i></Card.Link>

                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <div className="d-none d-md-block">
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
            <Tab eventKey="first" title="First">
                  <Card.Body>
                    <Row>
                        <Col sm={3}>
                            <Card.Img src="/Tab images/tab-1.jpg" alt="first-tab"/>
                        </Col>
                        <Col sm={9}>
                            <Card.Text>
                            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                            </Card.Text>
                        
                            <Card.Link href="#">SHARE</Card.Link>
                            <Card.Link href="#"><i class="fab fa-facebook-f"></i></Card.Link>
                            <Card.Link href="#"><i class="fab fa-twitter"></i></Card.Link>           
                        </Col>
                    </Row>
                 </Card.Body>
            </Tab>
            <Tab eventKey="second" title="Second">
                  <Card.Body>
                    <Row>
                        <Col sm={3}>
                            <Card.Img src="/Tab images/tab-2.jpg" alt="second-tab"/>
                        </Col>
                        <Col sm={9}>
                            <Card.Text>
                            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                            </Card.Text>
                        
                            <Card.Link href="#">SHARE</Card.Link>
                            <Card.Link href="#"><i class="fab fa-facebook-f"></i></Card.Link>
                            <Card.Link href="#"><i class="fab fa-twitter"></i></Card.Link>           
                        </Col>
                    </Row>
                 </Card.Body>
            </Tab>
            <Tab eventKey="third" title="Third">
                 <Card.Body>
                    <Row>
                        <Col sm={3}>
                            <Card.Img src="/Tab images/tab-3.jpg" alt="third-tab"/>
                        </Col>
                        <Col sm={9}>
                            <Card.Text>
                            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                            </Card.Text>
                        
                            <Card.Link href="#">SHARE</Card.Link>
                            <Card.Link href="#"><i class="fab fa-facebook-f"></i></Card.Link>
                            <Card.Link href="#"><i class="fab fa-twitter"></i></Card.Link>           
                        </Col>
                    </Row>
                 </Card.Body>
            </Tab>
        </Tabs>
    </div>
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

export default Home;
