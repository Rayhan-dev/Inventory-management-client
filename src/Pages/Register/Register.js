import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from '../Shared/Loading/Loading';
import auth from "../../firebase.init";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const { register, watch, handleSubmit } = useForm();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [name, email, password] = watch(["name", "email", "password"]);
  const onSubmit = async (data) => {
    createUserWithEmailAndPassword(email, password);
  };
  let errorComponent;
  let successComponent
  if (error) {
    errorComponent = (
      <div>
        <p className="text-danger my-4">Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
    successComponent = (
      <div>
        <p className="text-success my-4">Registered User: {user.user.email}</p>
      </div>
    );

  }
  return (
    <div className="py-5 container" style={{ "minHeight": "100vh" }}>
      <div className="row">
        <div className="col-md-6">
          <img
            style={{
              "border": "1px solid transparent",
              "borderRadius": "50px"
            }}
            className="img-fluid my-5"
            src="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-woman-signing-login-to-account-smartphone-app-user-interface-secure-password-194944775.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h1 className="py-3">Please Sign Up</h1>
          <div className="form mb-3">
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
          </div>
          {errorComponent}
          {successComponent}
          <p style={{"display":"inline"}} className="pt-3">Already Have an account?</p>
          <Link
            className="fw-bold"
            style={{
              color: "white",
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
