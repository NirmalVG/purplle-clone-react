import React from "react";
import { Container, Carousel } from "react-bootstrap";
import primerBanner from "../../data/primerBanner";

const PrimerBanner = () => {
    return (
        <Container className="mt-1 mb-5 pt-1">
            <Carousel className="banner">
                {primerBanner.map((primer) => (
                    <Carousel.Item key={primer.id}>
                        <img
                            className="d-block w-100"
                            src={primer.image}
                            alt={primer.name}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default PrimerBanner;
