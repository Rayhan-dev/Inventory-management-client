import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookTable from "./BookTable";
import "./BookSection.css";
const BookSection = () => {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://stark-fortress-57443.herokuapp.com/limitedBooks")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [setBooks])
  return (
    <div className=" my-5 table-responsive container">
      <h1 className="mb-5">Inventory Section</h1>
      <div className="book_table_div">
      <table className="table text-white book_table  align-middle">
        <thead>
          <tr className="py-2 text-white fs-5">
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
      <Button className="inventory-btn mt-4" as={Link} to={'/inventory'}>Manage Inventories</Button>
      
    </div>
  );
};

export default BookSection;
