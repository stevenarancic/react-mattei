import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ReviewItem from "./review-item";

export default function ReviewsBlock() {
    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <ReviewItem numberOfStars={4} />
                </Col>
                <Col>
                    <ReviewItem numberOfStars={5} />
                </Col>
                <Col>
                    <ReviewItem numberOfStars={4} />
                </Col>
            </Row>
        </Container>
    );
}
