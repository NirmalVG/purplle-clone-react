import React from "react";
import "./LinkNav.css";
import { Container, Row, Col } from "react-bootstrap";
import {Divider} from "@mui/material"

const LinkNav = () => {
    return (
        <div className="main-link-section">
            <Container>
                <Row>
                    <Col offset-9></Col>
                    <Col
                        className="link-section text-end"
                        lg={4}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        <p>
                            <i class="fa-solid fa-mobile-screen-button"></i>
                            <a
                                href="#download"
                                className="link-download head-link"
                            >
                                DOWNLOAD APP
                            </a>{" "}
                            <span>|</span>{" "}
                            <a href="#support" className="head-link">
                                SUPPORT
                            </a>{" "}
                            <span>|</span>{" "}
                            <a href="track" className="head-link">
                                TRACK ORDER
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
            <Divider />
        </div>
    );
};

export default LinkNav;
