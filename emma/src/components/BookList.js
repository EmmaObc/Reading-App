import React from 'react'
import { graphql } from '@apollo/react-hoc'
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
    this.displayBooks = this.displayBooks.bind(this);
  }

  displayBooks() {
    const data = this.props.data;
    if (data && data.books) {
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={(e) => {this.setState({selected:book.id})}}>{book.name}</li>
        )
      })
    } else {
      return (<div>Loading books...</div>);
    }
  };

  render() {
    return (
      <div>
        <ul id='book-list'>
          {this.displayBooks()}
        </ul>
        <BookDetails bookid={ this.state.selected } />
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList)

