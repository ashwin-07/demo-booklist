import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails';


function BookList() {

  const [selectedBook, setSelectedBook] = useState(null);

  function displayBooks() {
    return data.books.map((book) => {
      return (
        <li key={book.id} onClick={(e) => setSelectedBook(book.id)}> Book name: {book.name}</li>
      )
    });
  }

  const { loading, error, data } = useQuery(getBooksQuery)
  if (loading) return <p>Loading...</p>;
  if (error) { return <p>Error :(</p>; }



  return (
    <div>
      <ul id="book-list">
        {displayBooks()}
      </ul>
      <BookDetails bookId={selectedBook} />
    </div>
  );

}

export default (BookList);