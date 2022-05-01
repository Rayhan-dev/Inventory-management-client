import React, { useState } from "react";
import { Button } from "react-bootstrap";

const BookSection = () => {
  const [books, setBooks] = useState([]);
  fetch("http://localhost:5000/limitedBooks")
    .then((res) => res.json())
    .then((data) => setBooks(data));
  return (
    <div className="container my-5">
      <h1 className="mb-5">Inventory Section</h1>
      <table class="table-fixed w-100 border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="py-3 border border-slate-300 bg-neutral-200 ">
              Image
            </th>
            <th className="py-3 border border-slate-300">Name</th>
            <th className="py-3 border border-slate-300 bg-neutral-200 ">
              Price
            </th>
            <th className="py-3 border border-slate-300">Description</th>
            <th className="py-3 border border-slate-300 bg-neutral-200 ">
              Quantity
            </th>
            <th className="py-3 border border-slate-300">Supplier</th>
            <th className="py-3 border border-slate-300 bg-neutral-200">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td className="bg-zinc-100  border border-slate-300">
                <img
                  className="img-fluid mx-auto"
                  style={{ height: "50%", width: "50%" }}
                  src={book.img}
                  alt=""
                />
              </td>
              <td className="bg-zinc-100 border border-slate-300">{book.name}</td>
              <td className="bg-zinc-100 border border-slate-300">{book.price}</td>
              <td className="bg-zinc-100  m-5 border border-slate-300">
                {book.description}
              </td>
              <td className="bg-zinc-100 border border-slate-300">{book.quantity}</td>
              <td className="bg-zinc-100 border border-slate-300">{book.supplier}</td>
              <td className="bg-zinc-100 border border-slate-300">
                <Button>Update Product</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookSection;
