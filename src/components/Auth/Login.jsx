import React, { useState } from 'react';
// import { auth, googleProvider } from '../../../firebase/firebaseConfig';
// import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import Logo from '../../svgs/Logo.svg';
import '../../fonts.css';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  // const handleEmailLogin = async () => {
  //   try {
  //     await signInWithEmailAndPassword(auth, data.email, data.password);   
  //   } catch (error) {
  //     console.error("Error logging in: ", error);
  //   }
  // };
  
  // const handleGoogleLogin = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //   } catch (error) {
  //     console.error("Error logging in: ", error);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data); 
    try {
      const response = await axios.post('https://fnatic-gamma.vercel.app/api/v1/users/login', {
        email: data.email,
        password: data.password
      }
      // ,{
      //   withCredentials : true
      // }
    );
      console.log(response.data);
    } catch (error) {
      // console.error('An error occurred:', error.response ? error.response.data : error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="main w-full h-full flex justify-center">
        {/* Signup text */}
        <div className="max-w-100 flex flex-col items-center justify-center p-4">
          <div>
            <div className='flex gap-2 float-right'>
              <p className='text-gray-600'>New to Fnatic?</p>
              <NavLink to='/signup' className='text-black-900 underline underline-offset-1'>Sign Up</NavLink>
            </div>
          </div>

          {/* Logo */}
          <div className='mt-10'>
            <NavLink to='/' className='text-center'>
              <img src={Logo} alt="Logo" className="w-14 h-14" />
            </NavLink>
          </div>

          {/* Login para */}
          <div>
            <h1 style={{ fontFamily: 'DrukeWide' }} className='mt-4 text-xl md:text-2xl'>LOG INTO FNATIC ID</h1>
          </div>

          {/* Social buttons */}
          <div className="btns">
            <div className='flex gap-8 mt-6'>
              <button className="google w-16 h-12 rounded-md border border-slate-200 bg-[url('./svgs/google.svg')] bg-no-repeat bg-center" 
              // onClick={handleGoogleLogin}
              >
              </button>
              <button className="google w-16 h-12 rounded-md border border-slate-200 bg-[url('./svgs/discord.svg')] bg-no-repeat bg-center bg-blue-500">
              </button>
              <button className="google w-16 h-12 rounded-md border border-slate-200 bg-[url('./svgs/twitter.svg')] bg-no-repeat bg-center bg-sky-500">
              </button>
              <button className="google w-16 h-12 rounded-md border border-slate-200 color-red bg-[url('./svgs/twitch.svg')] bg-no-repeat bg-center bg-violet-500">
              </button>
            </div>
          </div>

          <div className='flex gap-4 mt-6 items-center'>
            <div className='w-36 h-0.5 bg-slate-200'></div>
            <p className='text-gray-500 sm:text-sm md:text-md lg:text-md'>OR</p>
            <div className='w-36 h-0.5 bg-slate-200'></div>
          </div>

          {/* INPUTS */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6 inputs w-full">
            <div>
              <p className='text-gray-800 text-sm'>Email</p>
              <input
                name='email'
                className='p-4 mt-2 w-full h-14 border border-black-900 rounded-md'
                type="text"
                placeholder='Your email address'
                onChange={handleChange}
              />
            </div>
            <div>
              <p className='text-gray-800 text-sm'>Password</p>
              <input
                name='password'
                className='p-4 mt-2 w-full h-14 border border-black-900 rounded-md'
                type="password"
                placeholder='Your Password'
                onChange={handleChange}
              />
            </div>
            <button
              className='w-full h-14 bg-black text-white border rounded-md hover:opacity-80'
              // onClick={handleSubmit}
            >
              Log In
            </button>
            <a className='text-gray-400 text-center font-semibold'>Forgot your password?</a>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
