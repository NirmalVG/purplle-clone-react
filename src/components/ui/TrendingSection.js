import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrendingProductCard from "./TrendingProductCard";
import trending from "../../data/trending";

const TrendingSection = () => {
    return (
        <Container>
            <h4 className="trending-head text-center">CURRENTLY TRENDING</h4>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <TrendingProductCard trending={trending} />
                </Col>
            </Row>
        </Container>
    );
};

export default TrendingSection;
