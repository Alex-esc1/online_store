import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";

const DeviceItem = ({device}) => {
    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Lenovo</div>
                    <div className="d-flex">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
            <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;