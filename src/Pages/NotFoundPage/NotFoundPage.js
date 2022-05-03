import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=826&t=st=1651484774~exp=1651485374~hmac=10c83c4e311b1d0406cb8273862e525c367bff56810720f31d4ac7756954a5cf" alt="" />
                </div>
                <div className="col-md-6 text-center my-5 py-5">
                    <h1 className='text-danger'>404 ERROR!!</h1>
                    <h3>This page is not found!</h3>
                    <p>We have no idea how you ended up here :')</p>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;