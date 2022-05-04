import React, { useState } from 'react';
import BookTable from '../Home/BookSection/BookTable';


const InventoryPage = () => {
    const [books, setBooks] = useState([]);
    fetch("http://localhost:5000/books")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    return (
        <div className="container my-5">
            <h1 className="mb-5">All Items</h1>
            <table classNAme="table table-striped align-middle">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => <BookTable key={book._id} book={book}></BookTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default InventoryPage;