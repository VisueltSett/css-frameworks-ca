import React from 'react';
import CardLinks from './CardLinks';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function HomepageTabs() {
    return (
        <>
            <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
                <Tab eventKey="first" title="First">
                    <Card.Body>
                        <Row>
                            <Col sm={3}>
                                <Card.Img src="/tabImages/tab-1.jpg" alt="first-tab"/>
                            </Col>
                            <Col sm={9}>
                                <Card.Text>
                                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </Card.Text>
                                <CardLinks />       
                            </Col>
                        </Row>
                    </Card.Body>
                </Tab>
                <Tab eventKey="second" title="Second">
                    <Card.Body>
                        <Row>
                            <Col sm={3}>
                                <Card.Img src="/tabImages/tab-2.jpg" alt="second-tab"/>
                            </Col>
                            <Col sm={9}>
                                <Card.Text>
                                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </Card.Text>
                             <CardLinks />      
                            </Col>
                        </Row>
                    </Card.Body>
                </Tab>
                <Tab eventKey="third" title="Third">
                    <Card.Body>
                        <Row>
                            <Col sm={3}>
                                <Card.Img src="/tabImages/tab-3.jpg" alt="third-tab"/>
                            </Col>
                            <Col sm={9}>
                                <Card.Text>
                                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                                </Card.Text>
                                <CardLinks />         
                            </Col>
                        </Row>
                    </Card.Body>
                </Tab>
            </Tabs>
        </>
    );
}

export default HomepageTabs;
