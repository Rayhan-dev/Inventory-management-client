import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import "./Login.css";
const Login = () => {
  const { register, watch, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [email, password] = watch(["email", "password"]);
  const onSubmit = (data) =>  signInWithEmailAndPassword(email, password);

  let errorComponent;
  let successComponent;
  if (error) {
    errorComponent= (
      <div>
        <p className="text-danger my-4">Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    successComponent= (
      <div>
        <p className="text-success my-4">Signed In User: {user.user.email}</p>
      </div>
    );
  }
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
              type="email"
              className="w-75 form_input d-flex flex-col mx-auto mb-3"
              {...register("email")}
              required
            />
            <input
              placeholder="Pasword"
              type="password"
              className="w-75 form_input d-flex flex-col mx-auto mb-3"
              {...register("password")}
              required
            />
            <input
              className="login_btn d-flex flex-col mx-auto mb-2"
              type="submit"
            />
          </form>
          {errorComponent}
          {successComponent}
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
