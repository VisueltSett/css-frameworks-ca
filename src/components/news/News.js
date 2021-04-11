import React from 'react';
import Card from 'react-bootstrap/Card';
import NewsCardBody from './NewsCardBody';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PaginationList from './Pagination';

function News() {
    return (
        <>
        <div className="newsCards">
            <h1>News</h1>
            <PaginationList />
            <Container>
            <Row>

                <Card border="light" style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/newsImages/news-1.jpg" />
                    <NewsCardBody />
                </Card>
                <Card  border="light" style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/newsImages/news-2.jpg" />
                    <NewsCardBody />
                </Card>
                <Card  border="light" style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/newsImages/news-3.jpg" />
                    <NewsCardBody />
                </Card>
                <Card  border="light" style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/newsImages/news-4.jpg" />
                    <NewsCardBody />
                </Card>
                <Card  border="light" style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="/newsImages/news-5.jpg" />
                        <NewsCardBody />
                    </Card>
                    <Card  border="light" style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="/newsImages/news-6.jpg" />
                        <NewsCardBody />
                    </Card>
                    <Card  border="light" style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="/newsImages/news-7.jpg" />
                        <NewsCardBody />
                    </Card>
                    <Card  border="light" style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="/newsImages/news-8.jpg" />
                        <NewsCardBody />
                    </Card>
            </Row>
            </Container>
            <div className="d-sm-none">
                <PaginationList  />
            </div>
         </div>
        </>
    );
}

export default News;
