import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./footer";
import ProductItem from "./product-item";

export default function ProductList() {
    return (
        <>
            <Container>
                <h1>Produtos mais vendidos</h1>
                <Row>
                    <Col xs={6} sm={6} md={3} lg={3}>
                        <div className="d-flex flex-column">
                            <ProductItem
                                title="Torneira Lorenzetti"
                                image={
                                    <img
                                        src={require("../assets/img/products/torneira-lorenzetti.png")}
                                        alt=""
                                        style={{
                                            borderRadius: 12,
                                            boxFit: "cover",
                                        }}
                                    />
                                }
                            />
                            <ProductItem
                                title="Torneira Lorenzetti"
                                image={
                                    <img
                                        src={require("../assets/img/products/torneira-lorenzetti-2.png")}
                                        alt=""
                                        style={{
                                            borderRadius: 12,
                                            boxFit: "cover",
                                        }}
                                    />
                                }
                            />
                            <ProductItem
                                title="Torneira Hydra"
                                image={
                                    <img
                                        src={require("../assets/img/products/torneira-hydra.png")}
                                        alt=""
                                        style={{
                                            borderRadius: 12,
                                            boxFit: "cover",
                                        }}
                                    />
                                }
                            />
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3}>
                        <div className="d-flex flex-column">
                            <ProductItem
                                title="Chuveiro Lorenzetti"
                                image={
                                    <img
                                        src={require("../assets/img/products/chuveiro-lorenzetti.png")}
                                        alt=""
                                        style={{
                                            borderRadius: 12,
                                            boxFit: "cover",
                                        }}
                                    />
                                }
                            />
                            <ProductItem
                                title="Chuveiro Hydra"
                                image={
                                    <img
                                        src={require("../assets/img/products/chuveiro-hydra-nd.png")}
                                        alt=""
                                        style={{
                                            borderRadius: 12,
                                            boxFit: "cover",
                                        }}
                                    />
                                }
                            />
                            <ProductItem
                                title="Chuveiro Hydra"
                                image={
                                    <img
                                        src={require("../assets/img/products/chuveiro-hydra-nd-2.png")}
                                        alt=""
                                        style={{
                                            borderRadius: 12,
                                            boxFit: "cover",
                                        }}
                                    />
                                }
                            />
                            <ProductItem
                                title="Ducha Lorenzetti"
                                image={
                                    <img
                                        src={require("../assets/img/products/ducha-lorenzetti.png")}
                                        alt=""
                                        style={{
                                            borderRadius: 12,
                                            boxFit: "cover",
                                        }}
                                    />
                                }
                            />
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3}>
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <div className="d-flex flex-column">
                                    <ProductItem
                                        title="Canaleta de PVC"
                                        image={
                                            <img
                                                src={require("../assets/img/products/canaleta-pvc.png")}
                                                alt=""
                                                style={{
                                                    borderRadius: 12,
                                                    boxFit: "cover",
                                                }}
                                            />
                                        }
                                    />
                                    <ProductItem
                                        title="Eletroduto Galvanizado"
                                        image={
                                            <img
                                                src={require("../assets/img/products/eletroduto-galvanizado.png")}
                                                alt=""
                                                style={{
                                                    borderRadius: 12,
                                                    boxFit: "cover",
                                                }}
                                            />
                                        }
                                    />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <div className="d-flex flex-column">
                                    <ProductItem
                                        title="Tomada Tramontina"
                                        image={
                                            <img
                                                src={require("../assets/img/products/tomada-tramontina.png")}
                                                alt=""
                                                style={{
                                                    borderRadius: 12,
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
                                                alt=""
                                                style={{
                                                    borderRadius: 12,
                                                    boxFit: "cover",
                                                }}
                                            />
                                        }
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}
