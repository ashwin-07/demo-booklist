import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries'


function BookDetails({ bookId }) {

  const { loading, error, data } = useQuery(getBookQuery, { skip: !bookId, variables: { id: bookId } });
  if (loading) return <p>Loading...</p>;
  if (error) { return <p>Error :(</p>; }
  else if (!bookId) {
    return <div></div>
  }
  else {
    return (
      <div id="book-details">
        <div>Name : {data.book.name}</div>
        <div>Genre : {data.book.genre} </div>
        <div>Author: {data.book.author.name}</div>
        <ul className="other-books">
          {
            data.book.author.books.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })
          }
        </ul>
      </div>
    );
  }


}

export default BookDetails;