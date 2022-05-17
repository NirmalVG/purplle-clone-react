import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { Image, Button } from "react-bootstrap";

const FeaturedProductCard = ({ featured }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 30;
    return (
        <div
            style={{
                padding: `0 ${chevronWidth}px`,
                maxWidth: 1300,
                margin: "0 auto",
            }}
            className="trending-product-card"
        >
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={5}
                gutter={20}
                slclassNameesToScroll={2}
                leftChevron={<Button>{"<"}</Button>}
                rightChevron={<Button>{">"}</Button>}
                outsideChevron={true}
                chevronWidth={chevronWidth}
            >
                {featured.map((featured) => (
                    <div
                        style={{ height: 330, background: "white" }}
                        id="trending-card-top"
                    >
                        <Image src={featured.image} alt={featured.name} fluid />
                        <div className="trending-limit">
                            <p>{featured.name}</p>
                        </div>
                        <span className="price">{featured.price}</span>
                        <span className="original-price">
                            {featured.originalPrice}
                        </span>
                        <span className="discount">{featured.discount}</span>
                    </div>
                ))}
            </ItemsCarousel>
        </div>
    );
};

export default FeaturedProductCard;