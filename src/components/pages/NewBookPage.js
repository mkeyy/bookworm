import React from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';
import SearchBookForm from '../forms/SearchBookForm';
import BookForm from '../forms/BookForm';
import TopNavigation from '../navigation/TopNavigation';

class NewBookPage extends React.Component {
  state = {
    book: null,
  };

  onBookSelect = book => {
    this.setState({ book });
    axios
      .get(`/api/books/fetchPages?goodreadsId=${book.goodreadsId}`)
      .then(res => res.data.pages)
      .then(pages => this.setState({ book: { ...book, pages } }));
  };

  addBook = () => console.log('hi added book');

  render() {
    return (
      <div>
        <TopNavigation />
        <Segment>
          <h3>Add books to your collection</h3>
          <SearchBookForm onBookSelect={this.onBookSelect} />

          {this.state.book && (
            <BookForm submit={this.addBook} book={this.state.book} />
          )}
        </Segment>
      </div>
    );
  }
}

export default NewBookPage;
