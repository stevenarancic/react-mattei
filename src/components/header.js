import React, { useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons";
import ContactDropdown from "../components/dropdown-menu/contact-dropdown";
import OutlinedButton from "./outlined-button";
import PrimaryButton from "./primary-button";
import "../styles/header.css";
import SocialMediaBlock from "./social-media-block";
import DynamicModal from "./dynamic-modal";

export default function Header() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="bg-white header center">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} className="center">
                        <div className="image-background-card">
                            <img
                                src={require("../assets/img/mattei_1.png")}
                                onClick={() => setModalShow(!modalShow)}
                            />
                            <DynamicModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                title="Mattei"
                                body={
                                    <>
                                        <Carousel variant="dark">
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={require("../assets/img/mattei_1.png")}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={require("../assets/img/mattei_2.png")}
                                                    alt="Second slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={require("../assets/img/mattei_3.png")}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </>
                                }
                                size="lg"
                            />
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="second-column">
                        <h1>
                            Trazendo luz ?? sua obra.
                            <br />
                            Do in??cio ao fim.
                        </h1>
                        {/* <SocialMediaBlock /> */}
                        <div className="d-flex flex-row align-items-center mt-3">
                            <PrimaryButton
                                // leadingIcon={<Whatsapp />}
                                title="Fa??a um or??amento"
                                onClick={() =>
                                    (window.location.href =
                                        "https://api.whatsapp.com/send?phone=5551999640860&text=Ol%C3%A1!%20quero%20fazer%20um%20or%C3%A7amento%2C%20pode%20me%20ajudar%3F")
                                }
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
