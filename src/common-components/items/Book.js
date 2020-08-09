import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import './Item.css';

const Book = ({ book , addToBorrowedList}) => {
  return (
    <ListGroup>
      <ListGroup.Item> 
      <Row>
        <Col> <strong>{book.name}</strong> <small>({book.copies})</small></Col>
        <Col> Author: <small>{book.author}</small></Col>
        {book.copies>0 && <Col className="add" onClick={e => addToBorrowedList('BOOK', book)}> Add</Col>}
      </Row>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Book;
