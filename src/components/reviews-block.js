import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ReviewItem from "./review-item";

export default function ReviewsBlock() {
    return (
        <Container>
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
        </Container>
    );
}
