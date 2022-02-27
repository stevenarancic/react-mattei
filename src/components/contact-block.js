import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    Envelope,
    EnvelopeFill,
    GeoAlt,
    GeoAltFill,
    Phone,
    PhoneFill,
} from "react-bootstrap-icons";
import ContactCard from "./contact-card";
import OutlinedButton from "./outlined-button";

export default function ContactBlock() {
    return (
        <div>
            <h5>Contato</h5>
            <Row>
                <Col sm={12} md={4} lg={4}>
                    <ContactCard
                        icon={<Phone />}
                        iconFill={<PhoneFill />}
                        title="Telefones"
                        content={
                            <ul style={{ listStyle: "none" }}>
                                <li>(51) 3033-5050</li>
                                <li>(51) 3473-3115</li>
                                <li>
                                    <a href="https://api.whatsapp.com/send?phone=555199964-0860">
                                        (51) 9 9964-0860
                                    </a>
                                </li>
                            </ul>
                        }
                    />
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <ContactCard
                        icon={<Envelope />}
                        iconFill={<EnvelopeFill />}
                        title="E-Mail"
                        content={
                            <ul style={{ listStyle: "none" }}>
                                <li>
                                    <a href="mailto: mattei@mattei.com.br">
                                        mattei@mattei.com.br
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto: financeiro@mattei.com.br">
                                        financeiro@mattei.com.br
                                    </a>
                                </li>
                            </ul>
                        }
                    />
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <ContactCard
                        icon={<GeoAlt />}
                        iconFill={<GeoAltFill />}
                        title="Endereço"
                        content={
                            <ul style={{ listStyle: "none" }}>
                                <li>Rua 24 de Agosto, 2756. Esteio / RS</li>
                                <li className="mt-2">
                                    <OutlinedButton title="Como Chegar" />
                                </li>
                            </ul>
                        }
                    />
                </Col>
            </Row>
        </div>
    );
}
