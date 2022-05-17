import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { Image, Button } from "react-bootstrap";

const AllBestSellersProductCard = ({ all }) => {
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
                {all.map((all) => (
                    <div
                        style={{ height: 330, background: "white" }}
                        id="trending-card-top"
                    >
                        <Image src={all.image} alt={all.name} fluid />
                        <div className="trending-limit">
                            <p>{all.name}</p>
                        </div>
                        <span className="price">{all.price}</span>
                        <span className="original-price">
                            {all.originalPrice}
                        </span>
                        <span className="discount">{all.discount}</span>
                    </div>
                ))}
            </ItemsCarousel>
        </div>
    );
};

export default AllBestSellersProductCard;
