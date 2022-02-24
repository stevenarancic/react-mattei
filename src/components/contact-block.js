import React from "react";
import { Col, Row } from "react-bootstrap";
import ContactCard from "./contact-card";

export default function ContactBlock() {
    return (
        <div>
            <h4>Contato</h4>
            <Row>
                <Col>
                    <ContactCard />
                </Col>
                <Col>
                    <ContactCard />
                </Col>
                <Col>
                    <ContactCard />
                </Col>
            </Row>
        </div>
    );
}
