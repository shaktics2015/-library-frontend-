import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

const Book = ({ book , addToBorrowedList}) => {
  return (
    <ListGroup>
      <ListGroup.Item> 
      <Row>
        <Col> <strong>{book.name}</strong> <small>({book.copies})</small></Col>
        <Col> Author: <small>{book.author}</small></Col>
        {book.copies>0 && <Col onClick={e => addToBorrowedList('BOOK', book)}> addToBorrowedList</Col>}
      </Row>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Book;
