import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ReviewItem from "./review-item";
import PrimaryButton from "./primary-button";

export default function ReviewsBlock() {
    return (
        <Container>
            <h4 className="text-center mt-4">Confira nossas avaliações</h4>
            <Row className="mt-4">
                <Col sm={12} md={4} lg={4}>
                    <ReviewItem
                        title="Odegar"
                        numberOfStars={4}
                        content="Bom atendimento e bastante variedade de produtos"
                    />
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <ReviewItem
                        title="Agnes"
                        numberOfStars={5}
                        content="Ótima loja de materiais elétricos e bom atendimento recomendo"
                    />
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <ReviewItem
                        title="Jefferson"
                        numberOfStars={4}
                        content="Otimo atendimento. Muitas variedades."
                    />
                </Col>
            </Row>
            <div className="d-flex flex-row justify-content-center mt-3">
                <PrimaryButton
                    title="Avalie-nos"
                    onClick={() =>
                        (window.location.href =
                            "https://g.page/r/CaZkQTHB_X1HEAg/review")
                    }
                />
            </div>
        </Container>
    );
}
