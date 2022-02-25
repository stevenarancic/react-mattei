import React from "react";

export default function CompanyCard(props) {
    return (
        <div
            className="card p-3 d-flex flex-column"
            style={{ height: "46rem" }}
        >
            {props.image}
            <h4 className="mt-2">{props.title}</h4>
            <p>{props.content}</p>
        </div>
    );
}
