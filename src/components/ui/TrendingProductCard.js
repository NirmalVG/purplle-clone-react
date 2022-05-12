import React, { useState } from "react";
import "./TrendingProductCard.css";
import ItemsCarousel from "react-items-carousel";
import { Image, Button } from "react-bootstrap";

const PrimerProductCard = ({ trending }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div
            style={{
                padding: `0 ${chevronWidth}px`,
                maxWidth: 1000,
                margin: "0 auto",
            }}
            className="trending-product-card"
        >
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={20}
                slidesToScroll={4}
                leftChevron={<Button>{"<"}</Button>}
                rightChevron={<Button>{">"}</Button>}
                outsideChevron={true}
                chevronWidth={chevronWidth}
            >
                {trending.map((trending) => (
                    <div
                        style={{ maxHeight: 330, background: "white" }}
                        className="trending-card-top"
                    >
                        <Image src={trending.image} alt={trending.name} fluid />
                        <div className="limit">
                            <p>{trending.name}</p>
                        </div>
                        <span className="price">{trending.price}</span>
                        <span className="original-price">
                            {trending.originalPrice}
                        </span>
                        <span className="discount">{trending.discount}</span>
                    </div>
                ))}
            </ItemsCarousel>
        </div>
    );
};

export default PrimerProductCard;
