import React from "react";
import { StarFill } from "react-bootstrap-icons";

export default function ReviewItem(props) {
    return (
        <div className="card p-3 d-flex flex-column justify-content-center">
            <h5 className="text-dark">Odegar</h5>
            <span>Bom atendimento e bastante variedade de produtos</span>
            <div className="d-flex flex-row text-warning fs-4 mt-2">
                {[...Array(props.numberOfStars)].map((x, i) => (
                    <StarFill />
                ))}
            </div>
        </div>
    );
}
