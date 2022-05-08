import React from "react";
import "./Banner.css"

const Banner = () => {
  return (
    <div className="container banner_section my-5"> 
      <div className="row">
        <div className="col-md-5 ms-auto my-auto text-md-start pt-2  ">
          <h1>Manage all <b>Books</b> <br /> at one place</h1>
          <p className="py-4">Managing a Inventory is not an easy task. <br />In this web-app you can manage your your Inventory/Warehouse at one place.</p>
        </div>
        <div className="col-md-6 ">
          <img className="img-fluid  banner-image py-5 w-50 m-auto" src="/images/inventory.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
