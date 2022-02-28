import { React, useState } from "react";
import "./contact-card.css";

export default function ContactCard(props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="card contact-card "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="mt-1 mb-1 fs-5">
                {isHovered ? props.iconFill : props.icon}
                &nbsp;
                <h5 className="text-dark m-0">{props.title}</h5>
            </div>
            {props.content}
        </div>
    );
}
