import React, { useState } from "react";
import {
    CaretDown,
    Envelope,
    Facebook,
    Instagram,
    Phone,
} from "react-bootstrap-icons";
import OutlinedButton from "../outlined-button";
import "./contact-dropdown.css";
import PhoneModal from "./phone-modal";
import MailModal from "./mail-modal";
import { Button } from "react-bootstrap";

export default function ContactDropdown() {
    const [isClicked, setIsClicked] = useState(false);
    const [phoneModalShow, setPhoneModalShow] = useState(false);
    const [mailModalShow, setMailModalShow] = useState(false);

    return (
        <div className="dropdown-block">
            <OutlinedButton
                title="+ Contato"
                trailingIcon={<CaretDown />}
                onClick={() => setIsClicked(!isClicked)}
            />
            <div
                className="menu-dropdown"
                style={{
                    opacity: isClicked ? 1 : 0,
                    transform: isClicked
                        ? "translateY(5px)"
                        : "translateY(-10px)",
                }}
            >
                <div className="d-flex flex-column">
                    <div>
                        <Button
                            style={{
                                color: "var(--primary-color)",
                                padding: 0,
                            }}
                            variant=""
                            onClick={() => setPhoneModalShow(true)}
                        >
                            <Phone /> &nbsp; Telefones
                        </Button>
                        <PhoneModal
                            show={phoneModalShow}
                            onHide={() => setPhoneModalShow(false)}
                        />
                    </div>
                    <div>
                        <Button
                            style={{
                                color: "var(--primary-color)",
                                padding: 0,
                                marginTop: 8,
                            }}
                            variant=""
                            onClick={() => setMailModalShow(true)}
                        >
                            <Envelope /> &nbsp; E-mails
                        </Button>
                        <MailModal
                            show={mailModalShow}
                            onHide={() => setMailModalShow(false)}
                        />
                    </div>
                    <div>
                        <Button
                            style={{
                                color: "var(--primary-color)",
                                padding: 0,
                                marginTop: 8,
                            }}
                            variant=""
                            onClick={() =>
                                (window.location.href =
                                    "https://www.facebook.com/pages/Mattei-Materiais-El%C3%A9tricos/402893023398855")
                            }
                        >
                            <Facebook /> &nbsp; Facebook
                        </Button>
                    </div>
                    <div>
                        <Button
                            style={{
                                color: "var(--primary-color)",
                                padding: 0,
                                marginTop: 8,
                            }}
                            variant=""
                            onClick={() =>
                                (window.location.href =
                                    "https://www.instagram.com/matteimateriaiseletricos/")
                            }
                        >
                            <Instagram /> &nbsp; Instagram
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
