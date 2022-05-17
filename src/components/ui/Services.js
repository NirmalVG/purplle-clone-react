import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import services from "../../data/sevices";

const Services = () => {
    return (
        <>
            <Container>
                <Row>
                    {services.map((services) => (
                        <Col
                            className="service-list"
                            lg={4}
                            md={4}
                            sm={4}
                            xs={4}
                            key={services.id}
                        >
                            <Image
                                src={services.image}
                                alt={services.title}
                                className="mt-3 mb-3"
                                fluid
                            />
                            <h4 className="service-head">{services.title}</h4>
                            <p className="service-text">
                                {services.description}
                            </p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Services;
