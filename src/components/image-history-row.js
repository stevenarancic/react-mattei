import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DeliveryBlock } from "./delivery-block";
import HistoryCard from "./history-card";

export default function ImageHistoryRow() {
    return (
        <Container className="mt-4">
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <HistoryCard />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <DeliveryBlock />
                </Col>
            </Row>
        </Container>
    );
}
