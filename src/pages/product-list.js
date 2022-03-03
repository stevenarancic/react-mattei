import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CaretLeftFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import ProductItem from "../components/product-item";

export default function ProductList() {
    const products = [
        {
            title: "Torneira Lorenzetti",
            image: require("../assets/img/products/torneira-lorenzetti.png"),
        },
        {
            title: "Torneira Lorenzetti",
            image: require("../assets/img/products/torneira-lorenzetti-2.png"),
        },
        {
            title: "Torneira Hydra",
            image: require("../assets/img/products/torneira-hydra.png"),
        },
        {
            title: "Chuveiro Lorenzetti",
            image: require("../assets/img/products/chuveiro-lorenzetti.png"),
        },
        {
            title: "Chuveiro Hydra",
            image: require("../assets/img/products/chuveiro-hydra-nd.png"),
        },
        {
            title: "Torneira Lorenzetti",
            image: require("../assets/img/products/chuveiro-hydra-nd-2.png"),
        },
        {
            title: "Ducha Lorenzetti",
            image: require("../assets/img/products/ducha-lorenzetti.png"),
        },
        {
            title: "Eletroduto de PVC",
            image: require("../assets/img/products/eletroduto-pvc.png"),
        },
        {
            title: "Fios e Cabos",
            image: require("../assets/img/products/cabo-fio.png"),
        },
        {
            title: "Canaleta de PVC",
            image: require("../assets/img/products/canaleta-pvc.png"),
        },
        {
            title: "Tomada Tramontina",
            image: require("../assets/img/products/tomada-tramontina.png"),
        },
        {
            title: "Chuveiro Lorenzetti",
            image: require("../assets/img/products/chuveiro-lorenzetti-3.png"),
        },
        {
            title: "Eletroduto Galvanizado",
            image: require("../assets/img/products/eletroduto-galvanizado.png"),
        },
    ];

    return (
        <div className="bg-light">
            <Container>
                <div className="pb-5 pt-5 text-center d-flex flex-column align-items-start">
                    <h1>Produtos mais vendidos</h1>
                    <Link to="/">
                        <CaretLeftFill />
                        &nbsp; Voltar
                    </Link>
                </div>
                <div class="parent">
                    {products.map((product) => (
                        <ProductItem
                            title={product.title}
                            image={
                                <img
                                    src={product.image}
                                    alt=""
                                    style={{
                                        borderRadius: 12,
                                        boxFit: "cover",
                                    }}
                                />
                            }
                        />
                    ))}
                    <div className="child"></div>
                    <div className="child"></div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}
