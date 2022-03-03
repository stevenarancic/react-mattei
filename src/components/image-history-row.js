import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DeliveryBlock } from "./delivery-block";
import HistoryCard from "./history-card";

export default function ImageHistoryRow() {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <HistoryCard />
                </Col>
                <Col>
                    <DeliveryBlock />
                </Col>
            </Row>
        </Container>
    );
}
