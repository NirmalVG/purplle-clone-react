import React from "react";
import "./Banner.css";
import { Carousel, Container } from "react-bootstrap";
import bannerImages from "../../data/bannerImages";

const Banner = () => {
    return (
        <Container className="mt-1 mb-5 pt-1">
            <Carousel className="banner">
                {bannerImages.map((banner) => (
                    <Carousel.Item key={banner.id}>
                        <img
                            className="d-block w-100"
                            src={banner.image}
                            alt={banner.name}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default Banner;
