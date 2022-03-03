import React from "react";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import SocialMediaItem from "./social-media-item";
import "../styles/social-media-block.css";

export default function SocialMediaBlock() {
    const data = [
        {
            icon: Facebook,
            title: "Facebook",
            link: "https://www.facebook.com/pages/Mattei-Materiais-El%C3%A9tricos/402893023398855",
            color: "#1B74E4",
        },
        {
            icon: Instagram,
            title: "Instagram",
            link: "https://www.instagram.com/matteimateriaiseletricos/",
            color: "#BD2562",
        },
        {
            icon: Whatsapp,
            title: "Whatsapp",
            link: "https://www.facebook.com/pages/Mattei-Materiais-El%C3%A9tricos/402893023398855",
            color: "#1ea852",
        },
    ];

    return (
        <div className="mt-1">
            {/* <h5>Redes Sociais</h5> */}
            <div className="social-media-block">
                {data.map((item) => (
                    <>
                        <SocialMediaItem
                            icon={<item.icon />}
                            title={item.title}
                            link={item.link}
                            color={item.color}
                        />
                        <div className="me-3" />
                    </>
                ))}
            </div>
        </div>
    );
}
