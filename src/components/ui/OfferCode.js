import React from "react";
import "./OfferCode.css";
import {
    Container,
    Row,
    Col,
    Image,
    CloseButton,
} from "react-bootstrap";
import { Button } from "@mui/material"
import { pink } from "@mui/material/colors";

const OfferCode = () => {
    const color = pink[500];
    const [close, setClose] = React.useState(true);
    return (
        <>
            {close ? (
                <div className="offer-nav sticky-top">
                    <Container>
                        <Row className="logo-row">
                            <Col lg={9} md={9} sm={9} xs={9}>
                                <Image
                                    className="logo-img"
                                    src="images/logo.png"
                                    alt="logo"
                                />
                                <span className="flat-offer">
                                    ⭐⭐
                                    <span className="flat-text">
                                        Get Flat 15% Off up to Rs.100
                                    </span>
                                    ⭐⭐
                                </span>
                                <span class="use-code">
                                    Use Code:
                                    <span className="code-name">APPFIRST</span>
                                </span>
                            </Col>
                            <Col
                                lg={3}
                                md={3}
                                sm={3}
                                xs={3}
                                className="close-head text-end"
                            >
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: color, color:"white" }}
                                    className="close"
                                >
                                    DOWNLOAD APP
                                </Button>
                                <span className="close-button">
                                    <CloseButton
                                        onClick={() => setClose(false)}
                                    />
                                </span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) : null}
        </>
    );
};

export default OfferCode;
