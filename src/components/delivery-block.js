import React from "react";
import { Container } from "react-bootstrap";

export const DeliveryBlock = () => {
    return (
        <div>
            <Container>
                <div className="p-3 mt-4 card rounded">
                    <h3>Fazemos Entrega</h3>
                    <img
                        src={require("../assets/img/delivery-truck/image-1.jpeg")}
                        alt=""
                        style={{ borderRadius: 16 }}
                    />
                    <video
                        src={require("../assets/img/delivery-truck/video-1.mp4")}
                    ></video>
                </div>
            </Container>
        </div>
    );
};
