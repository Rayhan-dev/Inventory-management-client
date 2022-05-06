import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookTable from "./BookTable";
const BookSection = () => {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/limitedBooks")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [setBooks])
  return (
    <div className=" my-5 table-responsive container">
      <h1 className="mb-5">Inventory Section</h1>
      <table className="table table-striped align-middle">
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
      <Button as={Link} to={'/inventory'}>Manage Inventories</Button>
      
    </div>
  );
};

export default BookSection;
