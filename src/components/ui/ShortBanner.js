import React from "react";
import { Carousel, Container } from "react-bootstrap";
import shortBannerImages from "../../data/shortBannerImage";

const ShortBanner = () => {
    return (
        <Container className="mt-1 mb-3 pt-1">
            <Carousel>
                {shortBannerImages.map((short) => (
                    <Carousel.Item key={short.id}>
                        <img
                            className="d-block w-100"
                            src={short.image}
                            alt={short.name}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default ShortBanner;
