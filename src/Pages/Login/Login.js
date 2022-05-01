import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
      <div className="my-5">
          <h1 className="py-4">Login to your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter Your Emial"
          className="w-25 h-10 form_input d-flex flex-col mx-auto mb-3"
          {...register("email")}
        />
        <input
          placeholder="Pasword"
          className="w-25 h-10 form_input d-flex flex-col mx-auto mb-3"
          {...register("password")}
        />
        <input
          className="login_btn d-flex flex-col mx-auto mb-2"
          type="submit"
        />
          </form>
          <h6>New On BookIpedia ?</h6>
          <Link className="fw-bold" style={{
              "color": "orangered",
                "textDecoration":"none"
          }} to={'/register'}>Register Now!</Link>
    </div>
  );
};

export default Login;
