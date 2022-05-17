import React from "react";
import { Container, Navbar, Nav, Image, Row, Col } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const MainNavigation = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <div onMouseLeave={() => setOpen(false)}>
                <Navbar
                    className="bg-white main-navigation"
                    collapseOnSelect
                    expand="lg"
                    bg="light"
                    variant="light"
                >
                    <Container>
                        <Navbar.Brand className="text-start">
                            <Link to="/">
                            <Image
                                src="images/purplle-logo.svg"
                                className="main-logo"
                            ></Image>
                            <Image
                                src="images/elite.webp"
                                className="elite"
                            ></Image>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto category-nav">
                                <Nav.Link
                                    className="hover-underline-animation link-list me-3"
                                    href="#features"
                                    onMouseEnter={handleOpen}
                                >
                                    SHOP CATEGORIES
                                </Nav.Link>
                                <Nav.Link
                                    className="hover-underline-animation link-list me-3"
                                    href="#features"
                                >
                                    BRANDS
                                </Nav.Link>
                                <Nav.Link
                                    className="hover-underline-animation link-list me-3"
                                    href="#features"
                                >
                                    OFFERS
                                </Nav.Link>
                                <Nav.Link
                                    className="hover-underline-animation link-list me-3"
                                    href="#features"
                                >
                                    NEW
                                </Nav.Link>
                                <Nav.Link
                                    className="hover-underline-animation link-list me-3"
                                    href="#features"
                                >
                                    SPLURGE
                                </Nav.Link>
                                <Nav.Link
                                    className="hover-underline-animation link-list me-3"
                                    href="#features"
                                >
                                    MAGAZINE
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#search">
                                    <i class="heart-icon fa-2x fa-solid fa-magnifying-glass"></i>
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="#favourites">
                                    <i class="heart-icon fa-2x fa-solid fa-heart"></i>
                                </Nav.Link>
                                <Nav.Link eventKey={3} href="#sign">
                                    <i class="heart-icon fa-solid fa-2x fa-face-smile"></i>
                                </Nav.Link>
                                <Nav.Link eventKey={4} href="#cart">
                                    <i class="heart-icon fa-solid fa-2x fa-cart-shopping"></i>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Divider />
                <Container open={open} className="mega">
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            {open ? <MegaMenu /> : null}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default MainNavigation;
