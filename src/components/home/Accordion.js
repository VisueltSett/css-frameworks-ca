import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardLinks from './CardLinks';

function HomepageAccordion() {
    return (
        <>
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
                    <Card.Img src="/tabImages/tab-1.jpg" alt="first-tab" />
                    <CardLinks />

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
                    <Card.Img src="/tabImages/tab-2.jpg" alt="second-tab"/>
                    <CardLinks />


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
                    <Card.Img src="/tabImages/tab-3.jpg" alt="third-tab"/>
                    <CardLinks />


                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </>
    );
}

export default HomepageAccordion;
