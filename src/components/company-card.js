import React from "react";
import "../styles/company-card.css";

export default function CompanyCard(props) {
    return (
        <div className="card company-card">
            {props.image}
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    );
}
