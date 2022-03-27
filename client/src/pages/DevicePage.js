import React from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const device = {id: 5, name: '12 pro', price: 1000, rating: 5, img: `https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`}
    return (
        <Container className='mt-3'>
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Row className='d-flex flex-column align-items-center'>
                    <h2>{device.name}</h2>
                    <div
                    className="d-flex align-items-center justify-content-center"
                    style={{background:`url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize:'cover', fontSize:64}}
                    >
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                    className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                >
                    <h3>от: {device.price} рублей</h3>
                    <Button variant={"outline-dark"}>Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;