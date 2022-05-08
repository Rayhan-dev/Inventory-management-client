import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import GoogleLogin from "./GoogleLogin/GoogleLogin";
import "./Login.css";
const Login = () => {
  const { register, watch, handleSubmit } = useForm();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [email, password] = watch(["email", "password"]);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );
  const onSubmit = (data) => {
    signInWithEmailAndPassword(email, password);
  }

  let errorComponent;
  let successComponent;
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
        <p className="text-success my-4">Signed In User: {user.user.email}</p>
      </div>

    );
  }
  return (
    <div className="container" style={{ "minHeight": "100vh" }}>
      <div className="row">
        <div className="col-md-6 py-5">
          <img
            style={{
              "border": "1px solid transparent",
              "borderRadius": "50px"
            }}
            className="img-fluid"
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="py-4 my-5">Login to your Account</h1>
          <div className="form mb-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Enter Your Email"
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
                className="login_btn  d-flex flex-col mx-auto mb-2"
                type="submit"
              />
            </form>
            <p className="py-3" style={{ "display": "inline" }}>Forgot Password? </p><button onClick={async () => {
              await sendPasswordResetEmail(email);
              toast('Sent email');
            }} className="py-3 text-white">Reset password now!</button>
          </div>

          <GoogleLogin></GoogleLogin>
          {errorComponent}
          {successComponent}
          <p style={{ "display": "inline" }} className=" mt-4">New On BookIpedia? </p>
          <Link

            style={{
              color: "white",
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
