import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function NewsCardBody() {
    return (
        <>
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary">More</Button>
            </Card.Body>
        </>
    );
}

export default NewsCardBody;
