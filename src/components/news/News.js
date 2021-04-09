import React from 'react';
import Card from 'react-bootstrap/Card';
import NewsCardBody from './NewsCardBody';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function News() {
    return (
        <>
        <h1>News</h1>
        <Container>
        <Row>

            <Card  border="light" style={{ width: '16rem' }}>
                <Card.Img variant="top" src="/News images/news-1.jpg" />
                <NewsCardBody />
            </Card>
            <Card  border="light" style={{ width: '16rem' }}>
                <Card.Img variant="top" src="/News images/news-2.jpg" />
                <NewsCardBody />
            </Card>
            <Card  border="light" style={{ width: '16rem' }}>
                <Card.Img variant="top" src="/News images/news-3.jpg" />
                <NewsCardBody />
            </Card>
            <Card  border="light" style={{ width: '16rem' }}>
                <Card.Img variant="top" src="/News images/news-4.jpg" />
                <NewsCardBody />
            </Card>
            <Card  border="light" style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/News images/news-5.jpg" />
                    <NewsCardBody />
                </Card>
                <Card  border="light" style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/News images/news-6.jpg" />
                    <NewsCardBody />
                </Card>
                <Card  border="light" style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/News images/news-7.jpg" />
                    <NewsCardBody />
                </Card>
                <Card  border="light" style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/News images/news-8.jpg" />
                    <NewsCardBody />
                </Card>
         </Row>
         </Container>
       
        </>
    );
}

export default News;
