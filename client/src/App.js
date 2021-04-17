import React from 'react';
import BookList from './components/BookList';
import ApolloCient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AddBook from './components/AddBook';



//apollo cient
const client = new ApolloCient({

  uri:process.env.REACT_GRAPHQL_SERVER

})


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <h1>GraphQL Demo</h1> */}
        <BookList/>
        <AddBook></AddBook>
      </div>
    </ApolloProvider>
  );
}

export default App;
