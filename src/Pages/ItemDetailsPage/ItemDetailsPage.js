import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import "./ItemDetailsPage.css";

const ItemDetailsPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const url = `https://stark-fortress-57443.herokuapp.com/inventory/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [url, setItem]);


    const handleDeliver = () => {
        const { quantity, ...rest } = item;
        const newQuantity = JSON.stringify(quantity - 1);
        const newItemValue = { quantity: `${newQuantity}`, ...rest };
        setItem(newItemValue);
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newItemValue })
        })
            .then(response => response.json())
            .then(data => setItem(data));
    }
    const handleRestockSubmit = (event) => {
        event.preventDefault();
        const value = parseInt(event.target.restock.value);
        const { quantity, ...rest } = item;
        const newQuantity = parseInt(quantity) + value;
        const newItemValue = { quantity: `${newQuantity}`, ...rest };
        setItem(newItemValue);
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newItemValue })
        })
            .then(response => response.json())
            .then(data => setItem(data));

    }
    
    return (
        <div className='container vh-100'>
            <div class="card mb-3 text-start detail-card my-5 ">
                <div class="row g-0">
                    <div class="col-md-4 py-5 ">
                        <img className='img-fluid w-50 mx-auto my-auto' src={item.img} alt="" />
                    </div>
                    <div class="col-md-8 my-auto">
                        <div class="card-body details_card_body ">
                            <p className='text-white'><span className="fw-bold ">Name</span>  :{item.name}</p>
                            <p className='text-white'><span className="fw-bold">Price</span>  :{item.price}</p>
                            <p className='text-white'><span className="fw-bold">Quantity</span>  :{item.quantity}</p>
                            <p className='text-white'><span className="fw-bold">Supplier Name</span>:{item.supplier}</p>
                            <p className='text-white'><span className="fw-bold">Description</span>  :{item.description}</p>
                            <div>
                                <button className='login_btn mb-2' onClick={handleDeliver}>Delivered</button>
                                <form onSubmit={handleRestockSubmit}>
                                    <input placeholder='Number of item you want to resotck' className='px-3 py-1' name='restock' style={{
                                       "backgroundColor":"#3c3e56"
                                    }} type="text" />
                                    <button type='submit' className=' login_btn mx-2'>Restock</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button className='login_btn' as={Link} to={'/inventory'}>Manage Inventories</Button>
        </div>
    );
};

export default ItemDetailsPage;