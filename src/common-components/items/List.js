import React, { Component } from "react";
import Item from "./Item";
import './List.css';
import { ListGroup } from "react-bootstrap";

class List extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let that = this;
    const { items, isBooks, addRemoveBook } = that.props;
    return (
      <div className="list">
        <h2>{isBooks ? 'Library' : 'Borrow History'}</h2>
        {isBooks && <h4>Books for untilization.</h4>}
        {!isBooks && items.length == 2 && <h4>You have Utilized the library fully.</h4>}
       <ListGroup>
         {items.length>0 && items.map(item => ( <ListGroup.Item className="borrowHistory"> <Item isBooks={isBooks} key={item.id}  addRemoveBook={addRemoveBook} item={item} /></ListGroup.Item>))}
        </ListGroup>
      </div>
    );
  }
}

export default List;
