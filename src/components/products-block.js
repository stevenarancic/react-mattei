import React from "react";
import { Container } from "react-bootstrap";
import ProductItem from "./product-item";
import PrimaryButton from "./primary-button";

export default function ProductsBlock() {
    return (
        <Container>
            <div className="d-flex flex-column align-items-center">
                <h3 className="mt-4">Nossos principais produtos</h3>
                <div
                    className="pt-3 pb-3 ps-2 pe-2 mb-3 border d-flex flex-row"
                    style={{ borderRadius: "1.2rem", width: "100%" }}
                >
                    <ProductItem
                        title="Canaletas PVC"
                        image={
                            <img
                                src="https://www.abteletrica.com.br/upload/produtos/ace0613df1cc2fc9f26fcc7f3f1fe317.jpg"
                                alt=""
                                style={{
                                    borderRadius: 12,
                                    height: "7rem",
                                    boxFit: "cover",
                                }}
                            />
                        }
                    />
                    <ProductItem
                        title="Canaletas de Alumínio"
                        image={
                            <img
                                src="https://www.abteletrica.com.br/upload/produtos/145c44d8fd15f10f80281ba765b1922c.jpg"
                                alt=""
                                style={{
                                    borderRadius: 12,
                                    height: "7rem",
                                    boxFit: "cover",
                                }}
                            />
                        }
                    />
                    <ProductItem
                        title="Condulete"
                        image={
                            <img
                                src="https://www.abteletrica.com.br/upload/produtos/1c5f8bd7a5404bb0ad0a4a70526bd5d7.jpg"
                                alt=""
                                style={{
                                    borderRadius: 12,
                                    height: "7rem",
                                    boxFit: "cover",
                                }}
                            />
                        }
                    />
                    <ProductItem
                        title="Disjuntor"
                        image={
                            <img
                                src="https://www.abteletrica.com.br/upload/produtos/90f881bee1f6ed5bb423b3fda3f42c52.jpg"
                                alt=""
                                style={{
                                    borderRadius: 12,
                                    height: "7rem",
                                    boxFit: "cover",
                                }}
                            />
                        }
                    />
                    <ProductItem
                        title="Fios e Cabos"
                        image={
                            <img
                                src={require("../assets/img/products/cabo-fio.png")}
                                style={{
                                    borderRadius: 12,
                                    height: "7rem",
                                    boxFit: "cover",
                                }}
                            />
                        }
                    />
                </div>
                <PrimaryButton title="Ver Mais" />
            </div>
        </Container>
    );
}
