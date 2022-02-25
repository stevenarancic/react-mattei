import React from "react";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import SocialMediaItem from "./social-media-item";

export default function SocialMediaBlock() {
    return (
        <div className="mt-4">
            <h5>Redes Sociais</h5>
            <div className="d-flex flex-row">
                <SocialMediaItem icon={<Facebook />} title="Facebook" />
                <div className="ms-3" />
                <SocialMediaItem icon={<Instagram />} title="Instagram" />
                <div className="ms-3" />
                <SocialMediaItem icon={<Whatsapp />} title="Whatsapp" />
            </div>
        </div>
    );
}
