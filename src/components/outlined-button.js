import React from "react";
import "../styles/outlined-button.css";

export default function OutlinedButton(props) {
    return (
        <button className="outlined-button" onClick={props.onClick}>
            {props.leadingIcon ? <>{props.leadingIcon}&nbsp;</> : ""}
            {props.title}
            {props.trailingIcon ? <>&nbsp;{props.trailingIcon}</> : ""}
        </button>
    );
}
