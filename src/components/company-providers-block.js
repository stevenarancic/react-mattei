import React from "react";
import { Container } from "react-bootstrap";
import "../styles/company-providers-block.css";

export default function CompanyProvidersBlock() {
    const data = [
        "https://mattei.com.br/images/marcas/113_53248Cemar_logo.png",
        "https://mattei.com.br/images/marcas/110_86016tramontina-logo.png",
        "https://mattei.com.br/images/marcas/111_20480Schneider_Electric.svg_.png",
        "https://mattei.com.br/images/marcas/112_0ourolux-201507062305561.png",
    ];

    return (
        <Container>
            <div className="card rounded bg-white mt-3 pb-4">
                <h2 className="text-center p-3">
                    Alguns de nossos fornecedores
                </h2>
                <div className="slider">
                    <div className="slider-track">
                        {[...Array(3)].map(() =>
                            data.map((item) => (
                                <div className="slide">
                                    <img src={item} alt="" />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}
