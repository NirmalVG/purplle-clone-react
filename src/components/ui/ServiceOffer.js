import React from "react";
import { Container, Row, Image } from "react-bootstrap";

const ServiceOffer = () => {
    return (
        <Container>
            <Row>
                <Image src="images/alert-strip-web.webp" alt="alert" fluid />
            </Row>
            <Row>
                <Image className="mt-5 mb-3" src="images/icons-strip-web.webp" alt="icons strip" fluid />
            </Row>
        </Container>
    );
};

export default ServiceOffer;
