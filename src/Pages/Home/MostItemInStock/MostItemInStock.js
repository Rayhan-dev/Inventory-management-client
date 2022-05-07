import React, { useEffect, useState } from 'react';
import BookTable from '../BookSection/BookTable';

const MostItemInStock = () => {
    const [topBooks, setTopBooks] = useState([]);
    useEffect(() => {
        fetch('https://stark-fortress-57443.herokuapp.com/mostInStock')
            .then(res => res.json())
            .then(data => setTopBooks(data))
    }, [])
    return (
        <div className=" my-5 pt-5 table-responsive container">
            <h3 style={{"color":"orangered"}} className="mb-5">Item that are available more than 50 pieces</h3>
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
                        topBooks.map(topBook => <BookTable key={topBook._id} book={topBook}></BookTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MostItemInStock;