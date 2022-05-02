import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { register, watch, handleSubmit } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [name, email, password] = watch(["name", "email", "password"]);
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(email, password);
    console.log(user);
  };
  let errorComponent;
  let loadingComponente;
  let successComponent
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="py-5 container">
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-woman-signing-login-to-account-smartphone-app-user-interface-secure-password-194944775.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h1 className="py-3">Please Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="LastName"
              type="text"
              className="w-75 h-10 form_input d-flex flex-col mx-auto mb-3"
              {...register("name")}
              required
            />
            <input
              placeholder="Enter Your Emial"
              type="email"
              className="w-75 h-10 form_input d-flex flex-col mx-auto mb-3"
              {...register("email")}
              required
            />
            <input
              placeholder="Pasword"
              type="password"
              className="w-75 h-10 form_input d-flex flex-col mx-auto mb-3"
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
      </div>
    </div>
  );
};

export default Register;
