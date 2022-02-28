import React from "react";
import { StarFill } from "react-bootstrap-icons";
import "../styles/review-item.css";

export default function ReviewItem(props) {
    return (
        <div className="card review-item">
            <h5 className="text-dark">{props.title}</h5>
            <span>{props.content}</span>
            <div className="text-warning">
                {[...Array(props.numberOfStars)].map((x, i) => (
                    <StarFill />
                ))}
            </div>
        </div>
    );
}
