import React from "react";
import { Container } from "react-bootstrap";
import ProductItem from "./product-item";
import PrimaryButton from "./primary-button";
import { Link } from "react-router-dom";
import "../styles/products-block.css";

export default function ProductsBlock() {
    const data = [
        {
            title: "Canaletas PVC",
            image: "https://www.abteletrica.com.br/upload/produtos/ace0613df1cc2fc9f26fcc7f3f1fe317.jpg",
        },
        {
            title: "Canaletas de Alumínio",
            image: "https://www.abteletrica.com.br/upload/produtos/145c44d8fd15f10f80281ba765b1922c.jpg",
        },
        {
            title: "Condulete",
            image: "https://www.abteletrica.com.br/upload/produtos/1c5f8bd7a5404bb0ad0a4a70526bd5d7.jpg",
        },
        {
            title: "Disjuntor",
            image: "https://www.abteletrica.com.br/upload/produtos/90f881bee1f6ed5bb423b3fda3f42c52.jpg",
        },
    ];

    return (
        <Container>
            <div className="products-block">
                <h3>Nossos principais produtos</h3>
                <div className="parent border">
                    {data.map((item) => (
                        <ProductItem
                            title={item.title}
                            image={<img src={item.image} alt="produto" />}
                        />
                    ))}
                </div>

                <Link
                    to="/product-list"
                    style={{ textDecoration: "none", marginTop: 16 }}
                >
                    <PrimaryButton title="Ver Mais" />
                </Link>
            </div>
        </Container>
    );
}
