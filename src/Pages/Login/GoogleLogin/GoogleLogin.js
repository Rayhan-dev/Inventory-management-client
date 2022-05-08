import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import "./GoogleLogin.css"

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorMsg;
  let successMsg;
  if (error) {
    errorMsg = (
      <div>
        <p className='text-danger pt-2'>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
    successMsg = (
      <div>
        <p>Signed In User: {user.user.email}</p>
      </div>
    );
  }
  return (
    <div className='pb-3' onClick={() => signInWithGoogle()} style={{ "cursor": "pointer" }}>
      <div className="row w-50 mx-auto py-2 google-btn">
        <div className="col-md-2">
          <img className='img-fluid' src="http://www.altinawildlife.com/wp-content/uploads/2016/10/Google-app-icon-small.png" alt="" />
        </div>
        <div className="col-md-10">
          Sign In with Google
        </div>
      </div>
      {errorMsg}
      {successMsg}
    </div>
  );
};

export default GoogleLogin;