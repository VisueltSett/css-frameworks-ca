import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomepageCarousel() {
    return (
        <>

        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/carouselImages/carousel-1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/carouselImages/carousel-2.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/carouselImages/carousel-3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </>
    );
}

export default HomepageCarousel;
