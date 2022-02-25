import React, { useState } from "react";
import { CaretDown } from "react-bootstrap-icons";
import OutlinedButton from "./outlined-button";
import "./contact-dropdown.css";

export default function ContactDropdown() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="dropdown-block">
            <OutlinedButton
                title="Contato"
                trailingIcon={<CaretDown />}
                onClick={() => setIsClicked(!isClicked)}
            />
            <div
                className="menu-dropdown"
                style={{
                    opacity: isClicked ? 1 : 0,
                    transform: isClicked
                        ? "translateY(0px)"
                        : "translateY(-10px)",
                }}
            >
                content
            </div>
        </div>
    );
}
