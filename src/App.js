import React, { Component } from "react";
import { connect } from "react-redux";
import './App.css';
import Header from './common-components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getBooks } from "./redux/action/booksAction";
import { getBorrowedList, removeBorrowedBook, addToBorrowedList } from "./redux/action/borrowHistoryAction";
import List from './common-components/items/List'
import { Container, Row, Col } from "react-bootstrap";

const userToken = navigator.userAgent.toLowerCase() || "NO_USERAGENT";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borrowHistoryData: []
    };

    this.addRemoveBook = this.addRemoveBook.bind(this);
    this.loadInitialData = this.loadInitialData.bind(this);
  }

  addRemoveBook(source, data) {
    if (source === 'BOOK') {
      this.props.addToBorrowedList({ userToken: this.generateHashCode(), bookId: data.id });
    } else if (source === 'BORROWED_ITEM') {
      this.props.removeBorrowedBook(this.generateHashCode(), data);
    }
    this.loadInitialData();
  }

  generateHashCode() {
    return userToken.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
  }

  componentDidMount() {
    this.loadInitialData();
  }

  loadInitialData() {
    setTimeout(
      function () {
        this.props.getBooks();
        this.props.getBorrowedList(this.generateHashCode());
      }
        .bind(this),
      500
    );
  }

  render() {
    let that = this;
    const { books, borrowHistory, update } = that.props; 
    if (borrowHistory.data && !borrowHistory.error)
      var borrowHistoryData = borrowHistory.data.books

    return (
      <div>
        <Header />
        <Container className="app-body" fluid>
          <Row>
            {(books && books.data && books.data.length > 0) ? <Col> <List addRemoveBook={that.addRemoveBook} items={books.data} isBooks={true} />  </Col> :
              <Col><h1 className="empty">Empty Library</h1></Col>}
            {borrowHistoryData && borrowHistoryData.length > 0 && <Col> <List addRemoveBook={that.addRemoveBook} items={borrowHistoryData} isBooks={false} />  </Col>}
          </Row>
          {update.error && update.error.errorMessage && <Row className="action-error"><span>{update.error.errorMessage}</span></Row>}
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (state) => ({
  books: state.books,
  borrowHistory: state.borrowHistory,
  update: state.update
});

const mapDispatchToProps = {
  getBooks,
  getBorrowedList,
  addToBorrowedList,
  removeBorrowedBook
};

export default connect(mapStoreToProps, mapDispatchToProps)(App); 
