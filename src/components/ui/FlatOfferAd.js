import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./FlatOfferAd.css";
import flatOfferAds from "../../data/flatOfferAds";

const FlatOfferAd = () => {
    return (
        <>
           <Container>
               <Row>
                   <Image src="images/hottest-deals_web.gif" alt="hottest-deals" className="mb-3" fluid />
               </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        {flatOfferAds.map((flat) => (
                            <Image key={flat.id} src={flat.image} alt={flat.name} className="pad mb-3 mx-auto" fluid />
                        ))}
                    </Col>
                </Row>
            </Container> 
        </>
    )
};

export default FlatOfferAd;
