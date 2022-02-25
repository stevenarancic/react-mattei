import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons";
import ContactDropdown from "./contact-dropdown";
import OutlinedButton from "./outlined-button";
import PrimaryButton from "./primary-button";

export default function Header() {
    return (
        <div
            className="bg-white d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
            <Container>
                <Row>
                    <Col
                        sm={12}
                        md={6}
                        lg={6}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <img
                            src={require("../assets/img/header/image_5.jpg")}
                        />
                    </Col>
                    <Col
                        sm={12}
                        md={6}
                        lg={6}
                        className="d-flex flex-column justify-content-center align-items-start"
                    >
                        <h1 style={{ fontSize: "4rem", fontWeight: 700 }}>
                            Trazendo luz à sua obra.
                            <br />
                            Do início ao fim.
                        </h1>
                        <div className="d-flex flex-row align-items-center">
                            <PrimaryButton
                                leadingIcon={<Whatsapp />}
                                title="Faça um orçamento"
                            />
                            <div className="ms-3" />
                            <ContactDropdown />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
