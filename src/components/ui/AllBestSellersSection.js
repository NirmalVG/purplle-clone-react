import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import allBestSellers from "../../data/allBestSellers";
import AllBestSellersProductCard from "./AllBestSellersProductCard";

const AllBestSellersSection = () => {
    return (
        <Container>
            <Image src="images/best-seller-d.webp" alt="Best Sellers" fluid />
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <AllBestSellersProductCard all={allBestSellers} />
                </Col>
            </Row>
        </Container>
    );
};

export default AllBestSellersSection;
