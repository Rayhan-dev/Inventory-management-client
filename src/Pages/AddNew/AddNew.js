import React from 'react';
import { useForm } from "react-hook-form";
import Usebooks from '../../Hooks/UseBooks/Usebooks';
import "./AddNew.css"

const AddNew = () => {
    const [books, setBooks] = Usebooks();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/books', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form className='d-flex flex-col w-75 m-auto py-5 my-5 ' onSubmit={handleSubmit(onSubmit)}>
                        <input className='formInput' placeholder='Name' {...register("name")} />
                        <input className='formInput' placeholder='Price' {...register("price")} />
                        <input className='formInput' placeholder='Quantity' {...register("quantity")} />
                        <input className='formInput' placeholder='Supplier' {...register("supplier")} />
                        <input className='formInput' placeholder='Author' {...register("author")} />
                        <input className='formInput' placeholder='Desctiption' {...register("description")} />
                        <input className='formInput' placeholder='Image URL' {...register("img")} />
                        <input className='formButton' type="submit" />
                    </form>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid py-5 my-5' src="https://cdni.iconscout.com/illustration/premium/thumb/woman-adding-products-to-wish-list-4468549-3718549.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddNew;