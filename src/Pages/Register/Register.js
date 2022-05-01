import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="py-5">
      <h1 className="py-3">Please Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Last Name"
          className="w-25 h-10 form_input d-flex flex-col mx-auto mb-3"
          {...register("name")}
          required
        />
        <input
          placeholder="Enter Your Emial"
          className="w-25 h-10 form_input d-flex flex-col mx-auto mb-3"
          {...register("email")}
          required
        />
        <input
          placeholder="Pasword"
          className="w-25 h-10 form_input d-flex flex-col mx-auto mb-3"
          {...register("password")}
          required
        />
        <input
          className="login_btn d-flex flex-col mx-auto mb-2"
          type="submit"
        />
          </form>
          <h6 className="pt-3">Already Have an account?</h6>
      <Link
        className="fw-bold"
        style={{
          color: "orangered",
          textDecoration: "none",
        }}
        to={"/login"}
      >
        Log in to your account!
      </Link>
    </div>
  );
};

export default Register;
