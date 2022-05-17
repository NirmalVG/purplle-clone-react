import React from "react";
import Banner from "../components/ui/Banner";
import ShortBanner from "../components/ui/ShortBanner";
import BannerAd from "../components/ui/BannerAd";
import StoreAd from "../components/ui/StoreAd";
import OfferAd from "../components/ui/OfferAd";
import FlatOfferAd from "../components/ui/FlatOfferAd";
import EliteBanner from "../components/ui/EliteBanner";
import Services from "../components/ui/Services";
import ServiceOffer from "../components/ui/ServiceOffer";
import FeaturedSection from "../components/ui/FeaturedSection";
import AllBestSellersSection from "../components/ui/AllBestSellersSection";

const HomePage = () => {
    return (
        <main>
            <Banner />
            <FeaturedSection />
            <BannerAd />
            <StoreAd />
            <OfferAd />
            <AllBestSellersSection />
            <ShortBanner />
            <FlatOfferAd />
            <EliteBanner />
            <ServiceOffer />
            <Services />
        </main>
    );
};

export default HomePage;
