import React from "react";
import "./social-media-item.css";

export default function SocialMediaItem(props) {
    return (
        <a href={props.link}>
            <div className="social-media-item card p-4">
                <div style={{ marginBottom: 4, fontSize: "1.5rem" }}>
                    {props.icon}
                </div>
                {props.title}
            </div>
        </a>
    );
}
