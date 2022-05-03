import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const bookCard = ({ book }) => {
  
    return (
    <div className="col-md-4 my-3 text-start">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.name}</Card.Title>
          <Card.Text>{book.description}</Card.Text>
          <p>
            <b>Price</b> : {book.price}
          </p>
          <p>
            <b>Quantity</b> : {book.quantity}
          </p>
          <p>
            <b>Supplier</b> : {book.supplier}
          </p>
            <Link className="btn btn-primary" to={`/inventory/${book._id}`}>Update Item</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default bookCard;
