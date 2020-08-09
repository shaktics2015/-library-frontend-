import React, { Component } from "react";
import Book from "./Book";
import BorrowHistory from "./BorrowHistory";
import './List.css';

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
        {isBooks && <div className="books"> {items.map(item => (<div key={item.id}><Book addToBorrowedList={addRemoveBook} book={item} /></div>))}</div>}
        {!isBooks && <div className="borrowHistory"> {items.map(item => (<div key={item.id}><BorrowHistory removedFromBorrowedList={addRemoveBook} borrowHistory={item} /></div>))}</div>}
      </div>
    );
  }
}

export default List;
