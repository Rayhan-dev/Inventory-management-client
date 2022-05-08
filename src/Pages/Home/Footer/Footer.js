import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='container-fluid footer-div bg-zinc-200 pt-3'>
            <div className="row">
            <div className="col-md-6">
                <Link className='px-2 fw-bold footer-link ' style={{"textDecoration":"none"}} to={"/addItem"}>Add New Item</Link>
                <Link className='px-2 fw-bold footer-link' style={{"textDecoration":"none"}} to={"/blogs"}>Blogs</Link>
                </div>
            <div className="col-md-6">
                <p className='fw-bold copyText'>&copy;Rayhan,2022</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;