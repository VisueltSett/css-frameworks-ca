import React from 'react';
import Card from 'react-bootstrap/Card';


function CardLinks() {
    return (
        <>
                    <Card.Link href="#">SHARE</Card.Link>
                    <Card.Link href="#"><i className="fab fa-facebook-f"></i></Card.Link>
                    <Card.Link href="#"><i className="fab fa-twitter"></i></Card.Link>
        </>
    );
}

export default CardLinks;
