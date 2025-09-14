import React from "react";
import AboutUsSection from "../components/AboutUsPage/AboutUsSection";
import StatsSection from "../components/AboutUsPage/StatsSection";
import VideoSection from "../components/AboutUsPage/VideoSection";
import MeetTeam from "../components/AboutUsPage/MeetTeam";
import BigCompaniesHero from "../components/AboutUsPage/BigCompaniesHero";
import Brands from "../components/HomePage/Brands";
import WorkWithUsSection from "../components/AboutUsPage/WorkWithUsSection";

export default function AboutUsPageContent() {
    return (
            <main>
                <AboutUsSection />
                <StatsSection />
                <VideoSection />
                <MeetTeam />
                <BigCompaniesHero />
                <Brands />
                <WorkWithUsSection />
            </main>
        );

}