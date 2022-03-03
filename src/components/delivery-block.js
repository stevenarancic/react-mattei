import { React, useState } from "react";
import { Container } from "react-bootstrap";
import DynamicModal from "./dynamic-modal";

export const DeliveryBlock = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <div className="p-3 card rounded second-column">
                <h3>Fazemos Entrega</h3>
                <img
                    src={require("../assets/img/delivery-truck/image-1.jpeg")}
                    alt=""
                    style={{ borderRadius: 16 }}
                    onClick={() => setModalShow(!modalShow)}
                />
                <small className="text-secondary">
                    Clique na imagem e assista ao vídeo.
                </small>
                <DynamicModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title="Mattei"
                    size="md"
                    body={
                        <div className="d-flex flex-row justify-content-center">
                            <video width="100%" height="100%" controls>
                                <source
                                    src={require("../assets/img/delivery-truck/video-1.mp4")}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    }
                />
            </div>
        </div>
    );
};
