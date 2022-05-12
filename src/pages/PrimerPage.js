import React from "react";
import PrimerBanner from "../components/ui/PrimerBanner";
import ActiveLastBreadcrumb from "../components/ui/ActiveLastBreadcrump";
import AllPrimerProducts from "../components/ui/AllPrimerProducts";
import Services from "../components/ui/Services";
import BestSellersSection from "../components/ui/BestSellersSection";
import TrendingSection from "../components/ui/TrendingSection";

const PrimerPage = () => {
    return (
        <main>
            <PrimerBanner />
            <ActiveLastBreadcrumb />
            <BestSellersSection />
            <TrendingSection />
            <AllPrimerProducts />
            <Services />
        </main>
    );
};

export default PrimerPage;
