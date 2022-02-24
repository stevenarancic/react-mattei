import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CompanyCard from "./company-card";

export default function OurService() {
    return (
        <Container>
            <h2 className="text-center p-5">Nosso Atendimento</h2>
            <Row>
                <Col>
                    <CompanyCard />
                </Col>
                <Col>
                    <CompanyCard />
                </Col>
            </Row>
        </Container>
    );
}
