import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div>
                    <div>Lenovo</div>
                    <div>
                        <div>{device.rating}</div>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;