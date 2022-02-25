import React, { useState } from "react";
import {
    CaretDown,
    Envelope,
    Facebook,
    Instagram,
    Phone,
} from "react-bootstrap-icons";
import OutlinedButton from "./outlined-button";
import "./contact-dropdown.css";
import PhoneModal from "./dropdown-menu/phone-modal";
import MailModal from "./dropdown-menu/mail-modal";
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
                            style={{ color: "var(--primary-color)" }}
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
                            style={{ color: "var(--primary-color)" }}
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
                    <div className="mt-2">
                        <Facebook /> &nbsp; Facebook
                    </div>
                    <div className="mt-2">
                        <Instagram /> &nbsp; Instagram
                    </div>
                </div>
            </div>
        </div>
    );
}
