import React, { useState } from "react";
import "../styles/social-media-item.css";

export default function SocialMediaItem(props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <a href={props.link}>
            <div
                className="social-media-item card p-4"
                style={{
                    color: isHovered ? "var(--primary-color)" : props.color,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={{ marginBottom: 4, fontSize: "1.8rem" }}>
                    {props.icon}
                </div>
                {props.title}
            </div>
        </a>
    );
}
