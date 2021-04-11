import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Address() {
    return (
        <div>
         <ListGroup variant="flush">
            <ListGroup.Item> <i className="fas fa-envelope"></i> hello@yay.com</ListGroup.Item>
            <ListGroup.Item> <i className="fas fa-phone"></i> 123 456 7890</ListGroup.Item>
            <ListGroup.Item>  <i className="fas fa-map-marker-alt"></i> 
                        123 Some Street
                        Somewhere
                        Some City
                        10000
            </ListGroup.Item>
         </ListGroup>
            
        </div>
    );
}

export default Address;
