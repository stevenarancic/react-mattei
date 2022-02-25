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

export default function ContactDropdown() {
    const [isClicked, setIsClicked] = useState(false);

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
                        <Phone /> &nbsp; Telefones
                    </div>
                    <div className="mt-2">
                        <Envelope /> &nbsp; E-mails
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
