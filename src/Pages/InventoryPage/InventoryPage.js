import React, { useState } from 'react';
import BookCard from "../Home/BookSection/BookCard";


const InventoryPage = () => {
    const [books, setBooks] = useState([]);
    fetch("http://localhost:5000/books")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    return (
        <div className="container my-5">
            <h1 className="mb-5">All Items</h1>
            <div className="row">
                {
                    books.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default InventoryPage;