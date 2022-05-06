import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailsPage =  () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const url = `http://localhost:5000/inventory/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [url,setItem]);


    const handleDeliver = () => {
        const { quantity, ...rest } = item;
        const newQuantity = quantity - 1;
        const newItemValue = { quantity: newQuantity, ...rest };
        setItem(newItemValue);
         fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newItemValue })
        })
            .then (response => response.json())
            .then (data => setItem(data));
    }
    const handleRestockSubmit = (event) => {
        event.preventDefault();
        const value = event.target.restock.value;
        const { quantity, ...rest } = item;
        const newQuantity = quantity + parseInt(value);
        const newItemValue = { quantity: newQuantity, ...rest };
        setItem(newItemValue);
         fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newItemValue })
        })
            .then (response => response.json())
            .then (data => setItem(data));

    }
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
                        <button className='btn btn-success' onClick={handleDeliver}>Delivered</button>
                        <form onSubmit={handleRestockSubmit}>
                            <input name='restock'  style={{ "border": "1px solid black" }} type="text" />
                            <button type='submit' className='btn btn-primary'>Restock</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailsPage;