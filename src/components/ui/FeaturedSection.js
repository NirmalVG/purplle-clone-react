import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import featuredProducts from "../../data/featuredProducts";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedSection = () => {
    return (
        <Container>
            <Image src="images/featured.webp" alt="featured" fluid />
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <FeaturedProductCard featured={featuredProducts} />
                </Col>
            </Row>
        </Container>
    )
};

export default FeaturedSection;
