import React from "react";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import SocialMediaItem from "./social-media-item";
import "../styles/social-media-block.css";

export default function SocialMediaBlock() {
    return (
        <div className="mt-1">
            {/* <h5>Redes Sociais</h5> */}
            <div className="social-media-block">
                <SocialMediaItem
                    icon={<Facebook />}
                    title="Facebook"
                    link="https://www.facebook.com/pages/Mattei-Materiais-El%C3%A9tricos/402893023398855"
                    color="#1B74E4"
                />
                <div className="ms-3" />
                <SocialMediaItem
                    icon={<Instagram />}
                    title="Instagram"
                    link="https://www.instagram.com/matteimateriaiseletricos/"
                    color="#BD2562"
                />
                <div className="ms-3" />
                <SocialMediaItem
                    icon={<Whatsapp />}
                    title="Whatsapp"
                    color="#1ea852"
                />
            </div>
        </div>
    );
}
