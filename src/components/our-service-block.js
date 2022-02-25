import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CompanyCard from "./company-card";

export default function OurService() {
    return (
        <Container>
            <h2 className="text-center p-5">Nosso Atendimento</h2>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <CompanyCard
                        image={
                            <img
                                src={require("../assets/img/industry/image-5.png")}
                                style={{ width: "100%" }}
                            />
                        }
                        title="Cliente Empresarial"
                        content="Diante das dificuldades diárias, as empresas buscam parceiros que estejam dispostos a abraçar os desafios do dia a dia para que a rotina não seja afetada, principalmente quando ocorrem imprevistos. Nossos clientes empresariais contam com a prioridade no atendimento e na entrega dos produtos, pois o atraso do pedido pode ocasionar grandes problemas para a empresa e até mesmo, a perda de um dia de trabalho."
                    />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <CompanyCard
                        image={
                            <img
                                src={require("../assets/img/industry/image-1.jpg")}
                                style={{ width: "100%" }}
                            />
                        }
                        title="Linha Industrial"
                        content="Comercializamos uma grande variedade de marcas em materiais elétricos industriais, dentre elas, estão Siemens, Schneider Electric, Weg, Cemar, Margirius, Soprano, entre outras. Trabalhamos também, com produtos específicos sob encomenda. Consulte nosso chat online para maiores informações."
                    />
                </Col>
            </Row>
        </Container>
    );
}
