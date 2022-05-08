import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import Usebooks from '../../Hooks/UseBooks/Usebooks';
import "./AddNew.css"

const AddNew = () => {
    const [books, setBooks] = Usebooks();
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    console.log(user.email)
    const onSubmit = data => {
        console.log(data);
        fetch('https://stark-fortress-57443.herokuapp.com/books', {
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
        <div className="container vh-100">
            <div className="row">
                <div className="col-md-6">
                    <div className="form">
                        <h1>Add New Item</h1>
                    <form className='d-flex flex-col w-75 m-auto py-5 my-5 ' onSubmit={handleSubmit(onSubmit)}>
                        <input required className='formInput' placeholder='Name' {...register("name")} />
                        <input required  className='formInput' placeholder='Email' {...register("email")} value={user.email} readOnly />
                        <input required className='formInput' placeholder='Price' {...register("price")} />
                        <input required className='formInput' placeholder='Quantity' {...register("quantity")} />
                        <input required className='formInput' placeholder='Supplier' {...register("supplier")} />
                        <input required className='formInput' placeholder='Author' {...register("author")} />
                        <input required className='formInput' placeholder='Desctiption' {...register("description")} />
                        <input required className='formInput' placeholder='Image URL' {...register("img")} />
                        <input className='login_btn' type="submit" />
                    </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid py-5 my-5 ms-auto' src="https://cdni.iconscout.com/illustration/premium/thumb/woman-adding-products-to-wish-list-4468549-3718549.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddNew;