import React, { Component } from "react";
import Book from "./Book";
import BorrowHistory from "./BorrowHistory";
import './List.css';

class List extends Component {

  constructor(props) {
    super(props);   
  } 

  render() {
    let that= this;
    const { items, isBooks, addRemoveBook} = that.props;
     return (
      <div className="list">      
       <h2>{isBooks? 'Books': 'Borrow History' }</h2> 
       {isBooks &&<div className="books"> {items.map(item => ( <div  key={item.id}><Book addToBorrowedList={addRemoveBook} book={item}/></div> ) )}</div>}
       {!isBooks &&<div className="borrowHistory"> {items.map(item => ( <div  key={item.id}><BorrowHistory removedFromBorrowedList={addRemoveBook} borrowHistory={item}/></div> ) )}</div>}
      </div>
    );
  }
}

export default List;
