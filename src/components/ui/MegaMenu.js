import React, { useState } from "react";
import { Button, Card } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";

const MegaMenu = () => {
    const [open, setOpen] = useState(false);
    const [skinCareOpen, setSkinCareOpen] = useState(false);
    const [hairCareOpen, setHairCareOpen] = useState(false);
    const [appliancesOpen, setAppliancesOpen] = useState(false);
    const [personalCareOpen, setPersonalCareOpen] = useState(false);
    const [menOpen, setMenOpen] = useState(false);
    const [fragranceOpen, setFragranceOpen] = useState(false);
    const [healthOpen, setHealthOpen] = useState(false);
    const [babyOpen, setBabyOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSkinCareOpen = () => setSkinCareOpen(true);
    const handleSkinCareClose = () => setSkinCareOpen(false);
    const handleHairCareOpen = () => setHairCareOpen(true);
    const handleHairCareClose = () => setHairCareOpen(false);
    const handleAppliancesOpen = () => setAppliancesOpen(true);
    const handleAppliancesClose = () => setAppliancesOpen(false);
    const handlePersonalCareOpen = () => setPersonalCareOpen(true);
    const handlePersonalCareClose = () => setPersonalCareOpen(false);
    const handleMenOpen = () => setMenOpen(true);
    const handleMenClose = () => setMenOpen(false);
    const handleFragranceOpen = () => setFragranceOpen(true);
    const handleFragranceClose = () => setFragranceOpen(false);
    const handleHealthOpen = () => setHealthOpen(true);
    const handleHealthClose = () => setHealthOpen(false);
    const handleBabyOpen = () => setBabyOpen(true);
    const handleBabyClose = () => setBabyOpen(false);
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
                        onMouseLeave={handleClose}
                        show={open}
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
                        onMouseEnter={handleSkinCareOpen}
                        onMouseLeave={handleSkinCareClose}
                        show={skinCareOpen}
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
                        onMouseEnter={handleHairCareOpen}
                        onMouseLeave={handleHairCareClose}
                        show={hairCareOpen}
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
                        onMouseEnter={handleAppliancesOpen}
                        onMouseLeave={handleAppliancesClose}
                        show={appliancesOpen}
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
                        onMouseEnter={handlePersonalCareOpen}
                        onMouseLeave={handlePersonalCareClose}
                        show={personalCareOpen}
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
                        onMouseEnter={handleMenOpen}
                        onMouseLeave={handleMenClose}
                        show={menOpen}
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
                        onMouseEnter={handleFragranceOpen}
                        onMouseLeave={handleFragranceClose}
                        show={fragranceOpen}
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
                        onMouseEnter={handleHealthOpen}
                        onMouseLeave={handleHealthClose}
                        show={healthOpen}
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
                        onMouseEnter={handleBabyOpen}
                        onMouseLeave={handleBabyClose}
                        show={babyOpen}
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
            <div>
                {open ? (
                    <Card>
                        <Container className="main-mega">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        FACE MAKEUP
                                    </h6>
                                    <Link to="/primer" className="text-main">
                                        Primer
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Concieler
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        BB & CC Creams
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Foundation
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Compact
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Loose Powder
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Blush
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Highlighters & Illuminators
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Bronzer
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Contour
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Setting Sprays and Fixers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Sindoor
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Makeup Remover
                                    </Link>
                                    <h6 className="head-text-primer mt-4">
                                        EYE MAKEUP
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Eyeliner
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Under Eye Conceilers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Eye Shadow
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Kajal
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Mascara
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        False Eyelashes
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Eyebrow Enhancer
                                    </Link>
                                </Col>
                                <Col className="gray-sec" lg={3} md={3} sm={3} xs={3}>
                                    <h6>LIP MAKEUP</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Lipstick
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Liquid Lipstick
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Crayon
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Liner
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Gloss
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Stains and Tints
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Balms & Treatments
                                    </Link>
                                    <h6 className="mt-4">NAILS</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Nail Polish
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Gel Nail Polish
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Matte Nail Polish
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Top and Base Coat
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Top and Base Coat
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Nail Polish Remover
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Manicure & Pedicure Kits
                                    </Link>
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6>BRUSHES & TOOLS</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Face Brushes
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Eye Brushes
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Brushes
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Brush Sets
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Tweezers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Sponges & Applications
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Makeup Pouches
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Makeup Brush Cleaner
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Sharpener
                                    </Link>
                                    <h6 className="mt-4">GIFTS & VALUE SETS</h6>
                                    <h6 className="mt-4">BY SKIN TONES</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Fair
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Dusky
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Ivory
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Brush Sets
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Tweezers
                                    </Link>
                                </Col>
                                <Col className="offset-3"></Col>
                            </Row>
                        </Container>
                    </Card>
                ) : null}
            </div>
            <div>
                {skinCareOpen ? (
                    <Card>
                        <Container className="main-mega">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        CLEANSERS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Face Wash
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Cleanser
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        BB & CC Creams
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Foundation
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Compact
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Loose Powder
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Blush
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Highlighters & Illuminators
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Bronzer
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Contour
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Setting Sprays and Fixers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Sindoor
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Makeup Remover
                                    </Link>
                                    <h6 className="head-text-primer mt-4">
                                        TONER & FACE MISTS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Toner
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Face Mists
                                    </Link>
                                    <h6 className="head-text-primer mt-4">
                                        MOISTURIZERS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Face Moisturizers & Day Creams
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Night cream
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Serums and Essences
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Facial Oils
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        BB & CC Creams
                                    </Link>
                                    <h6 className="head-text-primer mt-4">
                                        MASKS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Sheet Masks
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Face Mask, Packs & Peels
                                    </Link>
                                    <h6 className="head-text-primer mt-4">
                                        SUNSCREEN
                                    </h6>
                                </Col>

                                <Col className="gray-sec" lg={3} md={3} sm={3} xs={3}>
                                    <h6>EYECARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Lipstick
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Liquid Lipstick
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip crayon
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Liner
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Gloss
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Stains and Tints
                                    </Link>
                                    <h6 className="mt-4">LIP CARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Balm
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Scrub
                                    </Link>
                                    <h6 className="mt-4">LIP CARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Balm
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Lip Scrub
                                    </Link>
                                    <h6 className="mt-4">BODY CARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Body Lotion & Moisturizers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Body Creams & Body Butters
                                    </Link>
                                    <h6 className="mt-4">BODY CARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Talc
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Body & Massage Oil
                                    </Link>
                                    <h6 className="mt-4">BATH AND SHOVER</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Body Wash & Shower Gel
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Body Scrub Polish & Exfoliant
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Soap
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Bath Salts and Bubble Bath
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Bath Accessories
                                    </Link>
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6>HAND AND FOOTCARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Hand Wash & Soaps
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hand Sanitizer
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hand Cream
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Foot Creams & Scrubs
                                    </Link>
                                    <h6 className="mt-4">
                                        MASSAGERS & FACE TOOLS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Face Tools
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Massagers
                                    </Link>
                                    <h6 className="mt-4">AROMATHERAPY</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Essential Oil
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Carrier Oil
                                    </Link>
                                    <h6 className="mt-4">GIFT & VALUE SETS</h6>
                                    <h6 className="mt-4">BY CONCERN</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Essential Oil
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Carrier Oil
                                    </Link>
                                </Col>
                                <Col className="offset-3"></Col>
                            </Row>
                        </Container>
                    </Card>
                ) : null}
            </div>
            <div>
                {hairCareOpen ? (
                    <Card>
                        <Container className="main-mega">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        SHAMPOO & CONDITIONERS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Shampoo
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Dry Shampoo
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Conditioner
                                    </Link>
                                    <h6 className="mt-4">NOURISHMENT</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Oil
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Serum
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Spa & Mask
                                    </Link>
                                    <h6 className="mt-4">
                                        HAIR STYLING & TOOLS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Color
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Sprey
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Styling cream, Gel & Waxes
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Serum
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair brushes & Combs
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Dryers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Starighteners
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Roller & Curlers
                                    </Link>
                                </Col>
                                <Col className="gray-sec" lg={3} md={3} sm={3} xs={3}>
                                    <h6>HAIR ACCESSORIES</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Clips, Brands & More
                                    </Link>
                                    <h6 className="mt-4">GIFTS & VALUE SETS</h6>
                                    <h6 className="mt-4">BY CONCERNS</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Color Protection
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Damaged Hair
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Dandruff
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Dry & Frizzy Hair
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Dull & Dry
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Grey Hair
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        HAir Thinnining & Hair Fall
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Heat Protection
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Split Ends
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Volume
                                    </Link>
                                    <h6 className="mt-4">BODY HAIR TYPE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        All Hair Types
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Curly and Wavy Hair
                                    </Link>
                                </Col>
                                <Col className="offset-3"></Col>
                                <Col className="offset-3"></Col>
                            </Row>
                        </Container>
                    </Card>
                ) : null}
            </div>
            <div>
                {appliancesOpen ? (
                    <Card>
                        <Container className="main-mega">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        Hair Styling Tools
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Stylers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Starighteners
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Crimpers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Dryers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Curlers
                                    </Link>
                                </Col>

                                <Col className="gray-sec" lg={3} md={3} sm={3} xs={3}>
                                    <h6>HAIR REMOVAL TOOLS</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Body Groomers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Trimmers & Clippers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Epilators
                                    </Link>
                                    <br />
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6>FACE AND BODY TOOLS</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Face aplliances
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Massagers
                                    </Link>
                                    <br />
                                </Col>
                                <Col className="offset-3"></Col>
                            </Row>
                        </Container>
                    </Card>
                ) : null}
            </div>

            <div>
                {personalCareOpen ? (
                    <Card>
                        <Container className="main-mega">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        BATH & BODY
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Body Wash & Shower Gels
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Body Scrub, Polish & Exfoliant
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Soaps
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Bath Soaps and Bubble Bath
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Body Lotion & Moisturizers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Body Cream & Body Butters
                                    </Link>
                                    <h6 className="mt-4">FEMININE HYGIENE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Sanitary Napkins
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Tampons
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Pantyliners
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Menstrual Cups
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Intimate Care
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Shaving & Hair Removal
                                    </Link>
                                    <h6 className="mt-4">WOOMEN'S GROOMING</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Cotton Buds & Balls
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Manicure & Pedicure Kits
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Loofahs & Scrubbers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Wipes/Tissues
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Deodorants & Roll-Ons
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Body Mists & Sprays
                                    </Link>
                                </Col>

                                <Col className="gray-sec" lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        MEN'S GROOMING
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Shaving Cream
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Razers & Catridges
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Aftershaves
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Beard Care
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Deodorants & Roll-Ons
                                    </Link>
                                    <h6 className="mt-4">DENTAL CARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Toothpaste & Tooth-powder
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Toothbrush
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Pantyliners
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Floss & Tongue Cleaner
                                    </Link>
                                    <h6 className="mt-4">HAND & FOOT CARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Hand Wash & Soaps
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hand Sanitizer
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hand Cream
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Foot Creams & Scrubs
                                    </Link>
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        HAIR CARE
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Shampoo
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Conditioner
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Oil
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Serum
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Treatment
                                    </Link>
                                    <h6 className="mt-4">GIFTS & VALUE SETS</h6>
                                </Col>
                                <Col className="offset-3"></Col>
                            </Row>
                        </Container>
                    </Card>
                ) : null}
            </div>
            <div>
                {menOpen ? (
                    <Card>
                        <Container className="main-mega">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        SHAVING CARE
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Shaving cream
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Brazers & Catridges
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Aftershaves
                                    </Link>
                                    <h6 className="mt-4">SKIN CARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Face Wash
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Scrubs & Exfoliators
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Moisturizers
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Face Cream
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Face Mask
                                    </Link>
                                    <h6 className="mt-4">BATH & BODY</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Shower Gel
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Soap
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Talc
                                    </Link>
                                </Col>

                                <Col className="gray-sec" lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        HAIR CARE
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Shampoo
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Conditioner
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair styling
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Color
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Oils
                                    </Link>
                                    <h6 className="mt-4">BEARD CARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Beard Oil & Wax
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Beard Wash
                                    </Link>
                                    <h6 className="mt-4">FRAGRANCE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Perfumes
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Deodorants & Roll-Ons
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Colognes
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        After Shaves
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Gift & Value Sets
                                    </Link>
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        TOP SEARCHES
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Fairness
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Anti-Aging
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Dryness
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Anti-Dandruff
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Thinning & Hair Fall
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Grey Hair
                                    </Link>
                                </Col>
                                <Col className="offset-3"></Col>
                            </Row>
                        </Container>
                    </Card>
                ) : null}
            </div>
            <div>
                {fragranceOpen ? (
                    <Card>
                        <Container className="main-mega">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        FRAGRANCE FOR WOMEN
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Perfumes
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Deodorants & Roll-Ons
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Body Mists & Sprays
                                    </Link>
                                    <Link href="#!" className="text-main pb-0">
                                        Perfumed Creams & Solid Perfumes
                                    </Link>
                                    <h6 className="mt-4">FRAGRANCE FOR MEN</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Perfumes
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Deodorants & Roll-Ons
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Colognes
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        After Shaves
                                    </Link>
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}></Col>
                                <Col lg={3} md={3} sm={3} xs={3}></Col>
                                <Col className="offset-3"></Col>
                            </Row>
                        </Container>
                    </Card>
                ) : null}
            </div>
            <div>
                {healthOpen ? (
                    <Card>
                        <Container className="main-mega">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        HEALTH SUPPLEMENTS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Multivitamins
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Minerals
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Omega Fatty Acids
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Weight Management
                                    </Link>
                                    <h6 className="mt-4">
                                        SEXUAL HEALTH PRODUCTS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Condoms & Lubricants
                                    </Link>
                                    <br />
                                    <h6 className="mt-4">
                                        HEALTH FOOD & DRINKS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Herbal & Detox Teas
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Healthy Juices and Drinks
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Nutrition Supplements
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Super Foods
                                    </Link>
                                    <h6 className="mt-4">
                                        PAIN RELIEF & FIRST AID
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Pain Relief & First Aid
                                    </Link>
                                </Col>
                                <Col className="gray-sec" lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        BY CONCERNS
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Bones and Joints
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Digestion
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Immunity
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Pregnancy
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair, Skin and Nails
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Wellbeing
                                    </Link>
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}></Col>
                                <Col className="offset-3"></Col>
                            </Row>
                        </Container>
                    </Card>
                ) : null}
            </div>
            <div>
                {babyOpen ? (
                    <Card>
                        <Container className="main-mega">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        BABY SKIN CARE
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Powders
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Diaper Creams
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Sunscreen
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Baby Wipes
                                    </Link>
                                    <h6 className="mt-4">BABY BATH AND OILS</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Soaps
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Shampoos
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Conditioners
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Body Wash
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Oil
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Massage Oil
                                    </Link>
                                    <br />
                                    <h6 className="mt-4">KIDS CARE</h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Hair Care
                                    </Link>
                                </Col>
                                <Col className="gray-sec" lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="head-text-primer">
                                        MATERNITY CARE
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Maternity Pads
                                    </Link>
                                    <Link href="#!" className="text-main pb-0">
                                        Firming Gels
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Stretch Mark Creams and Oils
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Face and Body Care
                                    </Link>
                                    <br />
                                    <Link href="#!" className="text-main pb-0">
                                        Nutritional Supplements
                                    </Link>
                                    <br />
                                    <h6 className="mt-4">
                                        NURSING AND FEEDING
                                    </h6>
                                    <Link href="#!" className="text-main pb-0">
                                        Breast Pads
                                    </Link>
                                    <h6 className="mt-4">
                                        GIFTS AND VALUE SETS
                                    </h6>
                                </Col>
                                <Col lg={3} md={3} sm={3} xs={3}></Col>
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
