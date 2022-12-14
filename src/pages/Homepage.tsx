import React from "react";
import Activity from "../ components/Activity/Activity";
import Appbar from "../ components/Appbar/Appbar";
import MobileAppbar from "../ components/Appbar/MobileAppbar";
import MobileFooter from "../ components/Appbar/MobileFooter";
import Challenge from "../ components/Challenge/Challenge";
import Footer from "../ components/Footer/Footer";
import Hero from "../ components/Hero/Hero";
import LeaderBoard from "../ components/LeaderBoard/LeaderBoard";
import Unclaimed from "../ components/Unclaimed/Unclaimed";
import Yetiinfo from "../ components/Yetiinfo/Yetiinfo";

function Homepage() {
    return (
        <>
            <Appbar />
            <MobileAppbar />
            <Hero />
            <Yetiinfo />
            <LeaderBoard />
            <Unclaimed />
            <Challenge />
            <Activity />
            <Footer />
            <MobileFooter />
        </>
    );
}

export default Homepage;
