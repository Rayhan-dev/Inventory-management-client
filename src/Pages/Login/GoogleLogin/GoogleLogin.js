import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorMsg;
    let successMsg;
    if (error) {
        errorMsg = (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <Loading></Loading>;
      }
      if (user) {
        successMsg = (
          <div>
            <p>Signed In User: {user.user.email}</p>
          </div>
        );
      }
    return (
        <div onClick={() => signInWithGoogle()} style={{"cursor":"pointer"}}>
            <div className="row border border-2 border-solid border-slate-400">
                <div className="col-md-2">
                    <img className='img-fluid' src="http://www.altinawildlife.com/wp-content/uploads/2016/10/Google-app-icon-small.png" alt="" />
                </div>
                <div className="col-md-10">
                    Sign In with Google
                </div>
                {errorMsg}
                {successMsg}
            </div>
        </div>
    );
};

export default GoogleLogin;