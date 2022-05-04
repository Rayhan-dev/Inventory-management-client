import React from 'react';
import { Link } from 'react-router-dom';
import "./BookTable.css"

const BookTable = ({ book }) => {
  const { img, name, description, price, quantity, supplier } = book;
  return (
    <tr>
      <td><img style={{ "height": "100px", "width": "60px" }} src={img} alt="" /></td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{supplier}</td>
      <td><Link className="btn btn-primary inventory-btn" to={`/inventory/${book._id}`}>Update Item</Link></td>
    </tr>
  );
};

export default BookTable;