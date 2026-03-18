import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../houk/useAuth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import ScoialLogin from '../SocialLogin/ScoialLogin';

const Login = () => {
    const {register,handleSubmit, formState:{errors}} = useForm();
    const {signInUser} = useAuth()
    const location = useLocation();
    const navigate =  useNavigate();
    console.log('location',location)
    
   
    const handleLogin = (data) => {
  signInUser(data.email, data.password)
    .then(result => {
      const user = result.user;

      //  USER SAVE TO DATABASE
      fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        })
      });

      navigate(location?.state || '/');
    })
    .catch(error => {
      console.log(error);
    });
};

    return (
   
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
  <div className="card bg-white w-full max-w-sm shadow-2xl rounded-2xl">
    <h2 className="text-3xl text-center font-bold mt-6">Welcome Back</h2>
    <p className='text-3xl text-center font-bold mt-6'>Plezzz Login</p>
    <form className="card-body mt-4 space-y-4" onSubmit={handleSubmit(handleLogin)}>
      <fieldset className="space-y-2">
        <label className="label">Email</label>
        <input
          type="email"
          className="input input-bordered w-full"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        {errors.email?.type === 'required' && (
          <p className="text-blue-600 text-sm">Email is required</p>
        )}

        <label className="label">Password</label>
        <input
          type="password"
          className="input input-bordered w-full"
          {...register('password', { required: true, minLength: 6 })}
          placeholder="Password"
        />
        {errors.password?.type === 'minLength' && (
          <p className="text-pink-600 text-sm">Password must be at least 6 characters</p>
        )}

        <div className="text-right">
          <a className="link link-hover text-sm">Forgot password?</a>
        </div>

        <button className="btn btn-neutral w-full mt-2 hover:bg-fuchsia-300">
          Login
        </button>
      </fieldset>
       <ScoialLogin></ScoialLogin>
      
      <p>New to Zap Shift<Link className='text-blue-500 underline' to="/auth/register">
  Register
</Link></p>
    </form>
  </div>
</div>

    );
};

export default Login;
