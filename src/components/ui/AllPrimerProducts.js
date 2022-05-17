import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import primerProducts from "../../data/primerProducts";

const AllPrimerProducts = () => {
    return (
        <Container>
            <h4 className="primer-head text-center">ALL PRODUCTS</h4>
            <Row
                style={{ padding: "0 40px", maxWidth: 1000, margin: "0 auto" }}
            >
                {primerProducts.map((products) => (
                    <Col lg={3} md={6} sm={6} xs={6}>
                        <div style={{ height: 330, background: "white" }}>
                            <Image
                                src={products.image}
                                alt={products.name}
                                fluid
                            />
                            <div className="limit">
                                <p>{products.name}</p>
                            </div>
                            <span className="price">{products.price}</span>
                            <span className="original-price">
                                {products.originalPrice}
                            </span>
                            <span className="discount">
                                {products.discount}
                            </span>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AllPrimerProducts;
