import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h1 className="py-4 my-5">Login to your Account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Enter Your Emial"
              className="w-75 form_input d-flex flex-col mx-auto mb-3"
              {...register("email")}
              required
            />
            <input
              placeholder="Pasword"
              className="w-75 form_input d-flex flex-col mx-auto mb-3"
              {...register("password")}
              required
            />
            <input
              className="login_btn d-flex flex-col mx-auto mb-2"
              type="submit"
            />
          </form>
          <h6 className="mt-4">New On BookIpedia ?</h6>
          <Link
            className="fw-bold"
            style={{
              color: "orangered",
              textDecoration: "none",
            }}
            to={"/register"}
          >
            Register Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
