import React from "react";
import "./BestSellersSection.css";
import { Container, Row, Col } from "react-bootstrap";
import BestSellersProductCard from "./BestSellersProductCard";
import bestSellers from "../../data/bestSellers";

const BestSellersSection = () => {
    return (
        <Container>
            <h4 className="primer-head text-center">BEST SELLERS</h4>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <BestSellersProductCard best={bestSellers} />
                </Col>
            </Row>
        </Container>
    );
};

export default BestSellersSection;
