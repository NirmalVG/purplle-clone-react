import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import offerAds from "../../data/offerAds";

const OfferAd = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        {offerAds.map((offer) => (
                            <Image key={offer.id} src={offer.image} alt={offer.name} className="mb-3 p-1" fluid />
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default OfferAd;
