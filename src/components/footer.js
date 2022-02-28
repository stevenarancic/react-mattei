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
            <div className="p-2"></div>
            <small className="text-secondary">
                &copy;Mattei {new Date().getFullYear()}. Desenvolvido por &nbsp;
                <a href="https://stevenarancic.github.io/site">
                    Steve Narancic
                </a>
            </small>
        </Container>
    );
}
