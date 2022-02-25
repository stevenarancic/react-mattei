import React from "react";
import SocialMediaItem from "./social-media-item";

export default function SocialMediaBlock() {
    return (
        <div className="mt-4">
            <h5>Redes Sociais</h5>
            <div className="d-flex flex-row">
                <SocialMediaItem />
                <div className="ms-3" />
                <SocialMediaItem />
                <div className="ms-3" />
                <SocialMediaItem />
            </div>
        </div>
    );
}
