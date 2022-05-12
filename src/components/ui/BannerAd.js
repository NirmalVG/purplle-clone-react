import React from "react";
import { Image, Container, Row } from "react-bootstrap";
import bannerAds from "../../data/bannerAds";

const BannerAd = () => {
    return (
        <>
            {bannerAds.map((ad) => (
                <Container key={ad.id} className="mt-1 mb-3 pt-1">
                    <Row>
                    <Image
                        src={ad.image}
                        alt={ad.name}
                        style={{ marginBottom: "30px" }}
                    />
                    </Row>
                </Container>
            ))}
        </>
    );
};

export default BannerAd;
