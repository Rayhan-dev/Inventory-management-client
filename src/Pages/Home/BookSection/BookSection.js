import React, { useState } from "react";
import BookCard from "./BookCard";
const BookSection = () => {
  const [books, setBooks] = useState([]);
  fetch("http://localhost:5000/limitedBooks")
    .then((res) => res.json())
    .then((data) => setBooks(data));
  return (
    <div className="container my-5">
      <h1 className="mb-5">Inventory Section</h1>
      <div className="row">
        {
          books.map(book=><BookCard key={book._id} book={book}></BookCard> )
        }
      </div>
    </div>
  );
};

export default BookSection;
