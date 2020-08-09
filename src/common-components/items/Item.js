import React from "react";
import { Row, Col } from "react-bootstrap";
import './Item.css';

const Item = ({ item, addRemoveBook, isBooks }) => {
  return ( 
        <Row>
          <Col> <strong>{item.name}</strong> {isBooks && <small>(copies: {item.copies})</small>}</Col>
          <Col><small> Author: <b>{item.author}</b></small></Col>
          <Col className={isBooks ? 'add' :'remove'} onClick={e => addRemoveBook(isBooks? 'BOOK': 'BORROWED_ITEM', item)}> {isBooks?'Borrow': 'Return'}</Col>
        </Row> 
  );
};

export default Item;
