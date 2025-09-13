import React from "react";
import ContactSection from "../components/ContactSection";
import OfficeContactSection from "../components/OfficeContactSection";
import CallToAction from "../components/CallToAction";

export default function ContactPageContent() {
    return (
            <main>
              <ContactSection />
              <OfficeContactSection />
              <CallToAction />
            </main>
        );

}