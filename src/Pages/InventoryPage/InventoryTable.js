import React from 'react';
import { Link } from 'react-router-dom';

const InventoryTable = ({ book,handleDelete }) => {
    const { img, name, description, price, quantity, supplier } = book;
    
    return (
       <tr>
            <td><img style={{ "height": "100px", "width": "60px" }} src={img} alt="" /></td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td><Link className="btn btn-primary inventory-btn" to={`/inventory/${book._id}`}>Update</Link></td>
            <td><button className="btn btn-primary inventory-btn" onClick={handleDelete} >Delete</button></td>
        </tr>
    );
};

export default InventoryTable;