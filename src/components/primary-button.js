import React from "react";
import "./primary-button.css";

export default function PrimaryButton(props) {
    return (
        <button className="primary-button" onClick={props.onClick}>
            {props.leadingIcon ? <>{props.leadingIcon}&nbsp;</> : ""}
            {props.title}
            {props.trailingIcon ? <>&nbsp;{props.trailingIcon}</> : ""}
        </button>
    );
}
