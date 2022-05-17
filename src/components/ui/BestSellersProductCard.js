import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { Image, Button } from "react-bootstrap";

const BestSellersProductCard = ({ best }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 30;
    return (
        <div
            style={{
                padding: `0 ${chevronWidth}px`,
                maxWidth: 1000,
                margin: "0 auto",
            }}
            className="featured-product-card"
        >
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={20}
                slclassNameesToScroll={4}
                leftChevron={<Button>{"<"}</Button>}
                rightChevron={<Button>{">"}</Button>}
                outsideChevron={true}
                chevronWidth={chevronWidth}
            >
                {best.map((best) => (
                    <div
                        style={{ height: 330, background: "white" }}
                        id="featured-card-top"
                    >
                        <Image src={best.image} alt={best.name} fluid />
                        <div className="best-limit">
                            <p>{best.name}</p>
                        </div>
                        <span className="price">{best.price}</span>
                        <span className="original-price">
                            {best.originalPrice}
                        </span>
                        <span className="discount">{best.discount}</span>
                    </div>
                ))}
            </ItemsCarousel>
        </div>
    );
};

export default BestSellersProductCard;
