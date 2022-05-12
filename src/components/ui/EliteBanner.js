import React from "react";
import { Container, Carousel, Row, Image } from "react-bootstrap";
import eliteBannerImages from "../../data/eliteBannerImages";

const EliteBanner = () => {
    return (
        <Container className="mt-1 mb-5 pt-1">
            <Row>
                <Image
                    src="images/elite-web.webp"
                    alt="Elite"
                    className="mb-3"
                    fluid
                />
            </Row>
            <Row>
                <Carousel>
                    {eliteBannerImages.map((elite) => (
                        <Carousel.Item key={elite.id}>
                            <img
                                className="d-block w-100"
                                src={elite.image}
                                alt={elite.name}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>
        </Container>
    );
};

export default EliteBanner;
