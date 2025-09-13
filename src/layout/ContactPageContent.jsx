import React from "react";
import ContactSection from "../components/ContactPage/ContactSection";
import OfficeContactSection from "../components/ContactPage/OfficeContactSection";
import CallToAction from "../components/ContactPage/CallToAction";

export default function ContactPageContent() {
    return (
            <main>
              <ContactSection />
              <OfficeContactSection />
              <CallToAction />
            </main>
        );

}