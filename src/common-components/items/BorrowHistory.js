import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import './Item.css';

const BorrowHistory = ({ borrowHistory, removedFromBorrowedList }) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Row>
          <Col> <strong>{borrowHistory.name}</strong></Col>
          <Col><small> Author: <b>{borrowHistory.author}</b></small></Col>
          <Col className="remove" onClick={e => removedFromBorrowedList('BORROWED_ITEM', borrowHistory)}> Return</Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default BorrowHistory;
