import React from "react";
import SectionHeader from "../components/TeamPage/SectionHeader";
import ImageGallery from "../components/TeamPage/ImageGallery";
import TeamSection from "../components/TeamPage/TeamSection";
import FreeTrialSection from "../components/TeamPage/FreeTrialSection";


export default function TeamPageContent() {
    return (
        <main>
            <SectionHeader />
            <ImageGallery />
            <TeamSection />
            <FreeTrialSection />
        </main>
    );
}