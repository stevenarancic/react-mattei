import React from "react";
import { Container } from "react-bootstrap";
import ContactBlock from "./contact-block";
import PaymentsMethodBlock from "./payment-methods-block";
import SocialMediaBlock from "./social-media-block";

export default function Footer() {
    return (
        <Container className="mt-5 mb-5">
            <ContactBlock />
            <PaymentsMethodBlock />
            <SocialMediaBlock />
        </Container>
    );
}
