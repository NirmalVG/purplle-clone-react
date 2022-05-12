import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import storeAds from "../../data/storeAds";

const StoreAd = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        {storeAds.map((store) => (
                            <Image key={store.id} src={store.image} alt={store.name} className="mb-3" fluid />
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default StoreAd;
