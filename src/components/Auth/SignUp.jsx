import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../svgs/Logo.svg';
import '../../fonts.css';
import axios from 'axios'
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();
  
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

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
    localStorage.setItem('email',data.email);
    // const BASE_URL = process.env.REACT_APP_BASE_URL;
    try {
      const response = await axios.post( `https://fnatic-gamma.vercel.app/api/v1/users/register` , {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      // console.log(response.data);
      navigate('/verification')
    } catch (error) {
      console.error('An error occurred:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
    <div className="main w-full h-full flex justify-center">
      <div className="max-w-100 flex flex-col items-center justify-center p-4">
        <div>
          <div className='flex gap-2 float-right'>
            <p className='text-gray-600'>Already a Fnatic?</p>
            <NavLink to='/login' className='text-black-900 underline underline-offset-1'>Log In</NavLink>
          </div>
        </div>
        <div className='mt-10'>
          <img src={Logo} alt="Logo" className="w-14 h-14" />
        </div>
        <div>
          <h1 style={{ fontFamily: 'DrukeWide' }} className='mt-4 text-xl md:text-2xl'>SIGN UP TO FNATIC ID</h1>
        </div>
        <div className="btns">
          <div className='flex gap-8 mt-6'>
            <button className="w-16 h-12 rounded-md border border-slate-200 bg-[url('./svgs/google.svg')] bg-no-repeat bg-center"></button>
            <button className="w-16 h-12 rounded-md border border-slate-200 bg-[url('./svgs/discord.svg')] bg-no-repeat bg-center bg-blue-500"></button>
            <button className="w-16 h-12 rounded-md border border-slate-200 bg-[url('./svgs/twitter.svg')] bg-no-repeat bg-center bg-sky-500"></button>
            <button className="w-16 h-12 rounded-md border border-slate-200 color-red bg-[url('./svgs/twitch.svg')] bg-no-repeat bg-center bg-violet-500"></button>
          </div>
        </div>
        <div className='flex gap-4 mt-6 items-center'>
          <div className='w-36 h-0.5 bg-slate-200'></div>
          <p className='text-gray-500 sm:text-sm md:text-md lg:text-md'>OR</p>
          <div className='w-36 h-0.5 bg-slate-200'></div>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6 inputs w-full">
          <div>
            <p className='text-gray-800 text-sm'>Email</p>
            <input
              name='email'
              className='p-4 mt-2 w-full h-14 border border-black-900 rounded-md'
              type="text"
              placeholder='Your email address'
              value={data.email}
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
              value={data.password}
              onChange={handleChange}
              />
          </div>
          <button type="submit" className='w-full h-14 bg-black text-white border rounded-md hover:opacity-80'>SignUp</button>
        </form>
      </div>
    </div>
      <Footer></Footer>
      </>
  );
}

export default SignUp;
