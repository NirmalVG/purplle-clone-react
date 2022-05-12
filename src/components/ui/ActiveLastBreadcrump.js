import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Container } from "react-bootstrap";

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

export default function ActiveLastBreadcrumb() {
    return (
        <div
            role="presentation"
            onClick={handleClick}
            className="d-flex align-items-center justify-content-center"
        >
            <Container className="mx-auto">
                <Breadcrumbs aria-label="breadcrumb" className="text-center">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Makeup
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Face Makeup
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/material-ui/react-breadcrumbs/"
                        aria-current="page"
                    >
                        Primer
                    </Link>
                </Breadcrumbs>
            </Container>
        </div>
    );
}
