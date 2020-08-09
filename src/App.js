import React, { Component } from "react";
import { connect } from "react-redux";
import './App.css';
import Header from './common-components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getBooks } from "./redux/action/booksAction";
import { getBorrowedList, removeBorrowedBook, addToBorrowedList } from "./redux/action/borrowHistoryAction";
 import List from './common-components/items/List'
import { Container, Row, Col } from "react-bootstrap";

const userToken= 'string';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.addRemoveBook= this.addRemoveBook.bind(this);
    this.loadInitialData= this.loadInitialData.bind(this);
 
  }
   addRemoveBook(source, data) {
     console.log("App addRemoveBook source: "+ source, data );
    if(source==='BOOK'){ 
      this.props.addToBorrowedList({userToken: userToken, bookId: data.id}); 
    } else if(source==='BORROWED_ITEM'){ 
      this.props.removeBorrowedBook(userToken, data); 
    }
    this.loadInitialData();
   }
 
  

  componentDidMount() {
    this.loadInitialData()
  } 

  loadInitialData(){ 
    this.props.getBooks();
    this.props.getBorrowedList(userToken); 
    this.setState({});
  }


  render() {
    let that = this;
    const { books , borrowHistory, remove, add} = that.props;
    console.log("remove", remove, add);
    return (
      <div>
        <Header />
        <Container className="app-body">
         <Row>
         {books.data && <Col> <List addRemoveBook={that.addRemoveBook} items={books.data} isBooks={true} />  </Col>}
         {borrowHistory.data && borrowHistory.data.books && borrowHistory.data.books.length>0 &&   <Col> <List addRemoveBook={that.addRemoveBook} items={borrowHistory.data.books} isBooks={false} />  </Col>}
          </Row>
        </Container>
        <pre>{JSON.stringify(borrowHistory, null, 2)}</pre> 

      </div>
    );
  }
}

const mapStoreToProps = (state) => ({
  books: state.books,
  borrowHistory: state.borrowHistory,
  add: state.add,
  remove: state.remove
});

const mapDispatchToProps = {
  getBooks,
  getBorrowedList,
  addToBorrowedList,
  removeBorrowedBook
};

export default connect(mapStoreToProps, mapDispatchToProps)(App); 
