import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CaretLeftFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Footer from "./footer";
import ProductItem from "./product-item";
import "./products-list.css";

export default function ProductList() {
    return (
        <>
            <Container>
                <div className="pb-5 pt-5 text-center d-flex flex-column align-items-start">
                    <h1>Produtos mais vendidos</h1>
                    <Link to="/">
                        <CaretLeftFill />
                        &nbsp; Voltar
                    </Link>
                </div>
                <div class="parent">
                    <div class="child">
                        {" "}
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
                    </div>
                    <div class="child">
                        {" "}
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
                    </div>
                    <div class="child">
                        {" "}
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
                    <div class="child">
                        {" "}
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
                    </div>
                    <div class="child">
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
                    </div>
                    <div class="child">
                        {" "}
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
                    </div>
                    <div class="child">
                        {" "}
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
                    <div class="child">
                        {" "}
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
                    <div className="child">
                        {" "}
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
                    <div className="child">
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
                    </div>
                    <div className="child">
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
                    </div>
                    <div className="child"></div>
                </div>
            </Container>
            <Footer />
        </>
    );
}
