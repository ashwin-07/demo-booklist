import React, { useState } from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'

function AddBook() {


    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');


    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [saveBookData, { addBookData }] = useMutation(addBookMutation);


    if (loading) return <p>Loading...</p>;
    if (error) { return <p>Error :(</p>; }

    function displayAuthors() {
        return data.authors.map(author => {
            return (<option key={author.id} value={author.id}>{author.name}</option>);
        });
    }

    function submitForm(e) {
        //if (name)
        e.preventDefault();
        saveBookData({
            variables: {
                name,
                genre,
                authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
        //  addBookData.addBookMutation()
    }


    return (

        <form id="add-book" onSubmit={(e) => submitForm(e)}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setAuthorId(e.target.value)}>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>

        </form>

    );

}

export default AddBook;