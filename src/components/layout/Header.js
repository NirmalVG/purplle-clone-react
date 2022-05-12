import React from "react";
import OfferCode from "../ui/OfferCode";
import LinkNav from "../ui/LinkNav";
import MainNavigation from "../ui/MainNavigation";

const Header = () => {
    return (
        <header>
            <OfferCode />
            <LinkNav />
            <MainNavigation />
        </header>
    );
};

export default Header;
