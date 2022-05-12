import React, { useState } from "react";
import "./MegaMenu.css";
import { Button, Card } from "@mui/material";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";

const MegaMenu = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const color = grey[900];

    return (
        <>
            <div className="text-center">
                <span
                    className="mega-menu-link hover-underline-animation"
                    sx={{ color: "secondary.main" }}
                >
                    <Button
                        id="basic-button"
                        onMouseEnter={handleOpen}
                        style={{ color: color }}
                        sx={{
                            ":hover": {
                                color: "palette.secondary.main",
                            },
                        }}
                    >
                        Makeup
                    </Button>
                </span>
                <span className="mega-menu-link hover-underline-animation">
                    <Button
                        id="basic-button"
                        onMouseEnter={handleOpen}
                        style={{ color: color }}
                        sx={{
                            ":hover": {
                                color: "palette.secondary.main",
                            },
                        }}
                    >
                        Skin Care
                    </Button>
                </span>
                <span className="mega-menu-link hover-underline-animation">
                    <Button
                        id="basic-button"
                        onMouseEnter={handleOpen}
                        style={{ color: color }}
                        sx={{
                            ":hover": {
                                color: "palette.secondary.main",
                            },
                        }}
                    >
                        Hair Care
                    </Button>
                </span>
                <span className="mega-menu-link hover-underline-animation">
                    <Button
                        id="basic-button"
                        onMouseEnter={handleOpen}
                        style={{ color: color }}
                        sx={{
                            ":hover": {
                                color: "palette.secondary.main",
                            },
                        }}
                    >
                        Appliances
                    </Button>
                </span>
                <span className="mega-menu-link hover-underline-animation">
                    <Button
                        id="basic-button"
                        onMouseEnter={handleOpen}
                        style={{ color: color }}
                        sx={{
                            ":hover": {
                                color: "palette.secondary.main",
                            },
                        }}
                    >
                        Personal Care
                    </Button>
                </span>
                <span className="mega-menu-link hover-underline-animation">
                    <Button
                        id="basic-button"
                        onMouseEnter={handleOpen}
                        style={{ color: color }}
                        sx={{
                            ":hover": {
                                color: "palette.secondary.main",
                            },
                        }}
                    >
                        Men
                    </Button>
                </span>
                <span className="mega-menu-link hover-underline-animation">
                    <Button
                        id="basic-button"
                        onMouseEnter={handleOpen}
                        style={{ color: color }}
                        sx={{
                            ":hover": {
                                color: "palette.secondary.main",
                            },
                        }}
                    >
                        Fragrance
                    </Button>
                </span>
                <span className="mega-menu-link hover-underline-animation">
                    <Button
                        id="basic-button"
                        onMouseEnter={handleOpen}
                        style={{ color: color }}
                        sx={{
                            ":hover": {
                                color: "palette.secondary.main",
                            },
                        }}
                    >
                        Health & Wellness
                    </Button>
                </span>
                <span className="mega-menu-link hover-underline-animation">
                    <Button
                        id="basic-button"
                        onMouseEnter={handleOpen}
                        style={{ color: color }}
                        sx={{
                            ":hover": {
                                color: "palette.secondary.main",
                            },
                        }}
                    >
                        Mom & Baby
                    </Button>
                </span>
            </div>
            <div open={open}>
                {open ? (
                    <Card>
                        <Container className="main-mega">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3} >
                                    <h6 className="head-text-primer">FACE MAKEUP</h6>
                                    <NavLink>
                                        <Link to="/primer" className="text-main" >Primer</Link>
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Concieler
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        BB & CC Creams
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Foundation
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Compact
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Loose Powder
                                    </NavLink>
                                    {/*<NavLink href="#!" className="text-main">
                                        Blush
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Highlighters & Illuminators
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Bronzer
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Contour
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Setting Sprays and Fixers
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Sindoor
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Makeup Remover
                                    </NavLink>*/}
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6>LIP MAKEUP</h6>
                                    <NavLink href="#!" className="text-main">
                                        Lipstick
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Liquid Lipstick
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Lip crayon
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Lip Liner
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Lip Gloss
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Lip Stains and Tints
                                    </NavLink>
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6>BRUSHES & TOOLS</h6>
                                    <NavLink href="#!" className="text-main">
                                        Face Brushes
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Eye Brushes
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Lip Brushes
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Brush Sets
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Tweezers
                                    </NavLink>
                                    <NavLink href="#!" className="text-main">
                                        Mirror
                                    </NavLink>
                                </Col>
                                <Col className="offset-3"></Col>
                            </Row>
                        </Container>
                    </Card>
                ) : null}
            </div>
        </>
    );
};

export default MegaMenu;
