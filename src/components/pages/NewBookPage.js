import React from 'react';
import { Segment } from 'semantic-ui-react';
import SearchBookForm from '../forms/SearchBookForm';
import BookForm from '../forms/BookForm';
import TopNavigation from '../navigation/TopNavigation';

class NewBookPage extends React.Component {
  state = {
    book: null,
  };

  onBookSelect = book => this.setState({ book });

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
