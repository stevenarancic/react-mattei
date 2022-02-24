import React from "react";
import { Phone } from "react-bootstrap-icons";

export default function ContactCard() {
    return (
        <div className="card p-3 d-flex flex-column justify-content-center ">
            <div className=" mt-1 mb-1 d-flex flex-row align-items-center fs-5">
                <Phone />
                <h5 className="text-dark m-0">Telefones</h5>
            </div>
            <ul style={{ listStyle: "none" }}>
                <li>(51) 3033-5050</li>
                <li>(51) 3473-3115</li>
                <li>(51) 9 9964-0860</li>
            </ul>
        </div>
    );
}
