import React, { useEffect, useState } from 'react';
import BookTable from '../BookSection/BookTable';
import "./MostItemInStock.css"

const MostItemInStock = () => {
    const [topBooks, setTopBooks] = useState([]);
    useEffect(() => {
        fetch('https://stark-fortress-57443.herokuapp.com/mostInStock')
            .then(res => res.json())
            .then(data => setTopBooks(data))
        // http://localhost:5000 
    }, [])
    return (
        <div className=" my-5 pt-5 table-responsive container ">
            <h3>Getting Out Stocked</h3>
            <p className="mb-5">Item that are available less than than 20 pieces</p>
            <div className='book_table_div'>
                <table className="table align-middle book_table text-white">
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
        </div>
    );
};

export default MostItemInStock;