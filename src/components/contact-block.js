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
    const data = [
        {
            icon: Phone,
            iconFill: PhoneFill,
            title: "Telefones",
            content: [
                "(51) 3033-5050",
                "(51) 3473-3115",
                <a href="https://api.whatsapp.com/send?phone=555199964-0860">
                    (51) 99964-0860
                </a>,
            ],
        },
        {
            icon: Envelope,
            iconFill: EnvelopeFill,
            title: "E-Mail",
            content: [
                <a href="mailto: mattei@mattei.com.br">mattei@mattei.com.br</a>,
                <a href="mailto: financeiro@mattei.com.br">
                    financeiro@mattei.com.br
                </a>,
            ],
        },
        {
            icon: GeoAlt,
            iconFill: GeoAltFill,
            title: "Endereço",
            content: [
                "Rua 24 de Agosto, 2756. Esteio / RS",
                <OutlinedButton title="Como Chegar" />,
            ],
        },
    ];

    return (
        <div>
            <h5>Contato</h5>
            <Row>
                {data.map((item) => (
                    <Col>
                        <ContactCard
                            title={item.title}
                            icon={<item.icon />}
                            iconFill={<item.iconFill />}
                            content={
                                <ul style={{ listStyle: "none" }}>
                                    {item.content.map((content) => (
                                        <li>{content}</li>
                                    ))}
                                </ul>
                            }
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
