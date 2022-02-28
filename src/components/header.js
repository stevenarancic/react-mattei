import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons";
import ContactDropdown from "../components/dropdown-menu/contact-dropdown";
import OutlinedButton from "./outlined-button";
import PrimaryButton from "./primary-button";
import "../styles/header.css";
import SocialMediaBlock from "./social-media-block";

export default function Header() {
    return (
        <div className="bg-light header center">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} className="center">
                        <div className="image-background-card">
                            <img src={require("../assets/img/mattei_1.png")} />
                        </div>
                    </Col>
                    <Col
                        sm={12}
                        md={6}
                        lg={6}
                        className="d-flex flex-column justify-content-center align-items-start"
                    >
                        <h1>
                            Trazendo luz à sua obra.
                            <br />
                            Do início ao fim.
                        </h1>
                        <SocialMediaBlock />
                        <div className="d-flex flex-row align-items-center mt-3">
                            <PrimaryButton
                                // leadingIcon={<Whatsapp />}
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
