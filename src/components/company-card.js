import React from "react";

export default function CompanyCard(props) {
    return (
        <div className="card p-3 d-flex flex-column justify-content-center">
            {props.image}
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    );
}
