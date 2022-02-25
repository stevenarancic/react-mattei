import React from "react";
import { Facebook } from "react-bootstrap-icons";
import "./social-media-item.css";

export default function SocialMediaItem() {
    return (
        <div className="social-media-item card p-4 d-flex flex-column align-items-center">
            <Facebook style={{ marginBottom: 8, fontSize: "1.5rem" }} />
            Facebook
        </div>
    );
}
