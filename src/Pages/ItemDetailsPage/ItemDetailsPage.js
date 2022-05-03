import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailsPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const url = `http://localhost:5000/inventory/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto ">
                    <img className='img-fluid' src={item.img} alt="" />
                </div>
                <div className="col-md-6 text-start my-5 py-5 mx-auto">
                    <p><span className="fw-bold">Name</span>  :{item.name}</p>
                    <p><span className="fw-bold">Price</span>  :{item.price}</p>
                    <p><span className="fw-bold">Quantity</span>  :{item.quantity}</p>
                    <p><span className="fw-bold">Supplier Name</span>:{item.supplier}</p>
                    <p><span className="fw-bold">Description</span>  :{item.description}</p>
                    <div>
                    <button className='btn btn-success'>Delivered</button>
                        <form>
                            <input style={{"border":"1px solid black"}} type="text" />
                            <button className='btn btn-primary'>Restock</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailsPage;