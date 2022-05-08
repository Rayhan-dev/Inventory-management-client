import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import InventoryTable from '../InventoryPage/InventoryTable';

const MyItems = () => {
    const [books, setBooks] = useState([]);
    const [user] = useAuthState(auth);
    const url = `https://stark-fortress-57443.herokuapp.com/myitems?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [setBooks]);
    const handleDelete = (id) => {
        const proceed = window.confirm("Do you want to delete this item?");
        if (proceed) {
            const url = `http://localhost:5000 /inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = books.filter(book => book._id !== id);
                    setBooks(remaining);
                })
        }
    }
    return (

        <div className="container py-5 vh-100">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="mb-5">All Items</h1>
                </div>
                <div className="col-md-3">
                    <Link className="btn btn-primary inventory-btn" to={"/addItem"}>Add New Item</Link>
                </div>
            </div>

            <div className="book_table">
            <table className="table text-white align-middle">
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
                        books.map(book => <InventoryTable handleDelete={() => handleDelete(book._id)} key={book._id} book={book}></InventoryTable>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyItems;