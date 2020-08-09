import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

const BorrowHistory = ({ borrowHistory, removedFromBorrowedList }) => {
  return (
    <ListGroup>
      <ListGroup.Item> 
      <Row>
        <Col> <strong>{borrowHistory.name}</strong></Col>
        <Col> Author: <small>{borrowHistory.author}</small> ({borrowHistory.copies})</Col>
        <Col onClick={e => removedFromBorrowedList('BORROWED_ITEM', borrowHistory)}> removedFromBorrowedList</Col>
      </Row>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default BorrowHistory;
