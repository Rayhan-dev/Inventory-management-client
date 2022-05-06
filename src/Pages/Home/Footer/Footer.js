import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid bg-zinc-200 pt-3'>
            <div className="row">
            <div className="col-md-6">
                <Link className='px-2 text-orange-500 fw-bold ' style={{"textDecoration":"none"}} to={"/addItem"}>Add New Item</Link>
                <Link className='px-2 text-orange-500 fw-bold' style={{"textDecoration":"none"}} to={"/blog"}>Blogs</Link>
                </div>
            <div className="col-md-6">
                <p className='fw-bold'>&copy;Rayhan,2022</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;