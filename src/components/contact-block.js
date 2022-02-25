import React from "react";
import { Col, Row } from "react-bootstrap";
import { Envelope, GeoAlt, Phone } from "react-bootstrap-icons";
import ContactCard from "./contact-card";
import OutlinedButton from "./outlined-button";

export default function ContactBlock() {
    return (
        <div>
            <h5>Contato</h5>
            <Row>
                <Col>
                    <ContactCard
                        icon={<Phone />}
                        title="Telefones"
                        content={
                            <ul style={{ listStyle: "none" }}>
                                <li>(51) 3033-5050</li>
                                <li>(51) 3473-3115</li>
                                <li>(51) 9 9964-0860</li>
                            </ul>
                        }
                    />
                </Col>
                <Col>
                    <ContactCard
                        icon={<Envelope />}
                        title="E-Mail"
                        content={
                            <ul style={{ listStyle: "none" }}>
                                <li>mattei@mattei.com.br</li>
                                <li>financeiro@mattei.com.br.br</li>
                            </ul>
                        }
                    />
                </Col>
                <Col>
                    <ContactCard
                        icon={<GeoAlt />}
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
