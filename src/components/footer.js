import React from "react";
import { Container } from "react-bootstrap";
import ContactBlock from "./contact-block";

export default function Footer() {
    return (
        <Container className="mt-5 mb-5">
            <ContactBlock />
        </Container>
    );
}
