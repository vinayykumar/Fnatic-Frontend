import React from 'react'
import { useState } from 'react'
import Logo from '../../svgs/Logo.svg'
import '../../fonts.css'
import Footer from '../Footer/Footer'


const Login = () => {

    const [data,setData] = useState({
        email : '',
        password : ''
    });

    function changeHandler(event){
        setData( (prev) => (
            {
                ...prev,
                [event.target.name] : event.target.value
            }
        ))
        // console.log(data);
    }

  return (  
    <>
    <div className="main w-full h-full flex justify-center">
      {/* signup text */}
      <div className="max-w-100 flex flex-col  items-center justify-center  p-4">
        <div>
          <div className='flex gap-2 float-right'>
            <p className='text-gray-600'>New to Fnatic?</p>
            <a href="" className='text-black-900 underline underline-offset-1'>Sign up</a>
          </div>
        </div>

      
      {/* LOGO */}
        <div className='mt-10'>
            <img src={Logo} alt="Logo" className="w-14 h-14" />
        </div>


        {/* LOGIN PARA */}
        <div>
          <h1 style={{ fontFamily: 'DrukeWide' }} className=' mt-4 text-xl md:text-2xl '>LOG INTO FNATIC ID</h1>
        </div>


        {/* SOCIAL_BUTTONS */}
        <div className="btns">
          <div className='flex gap-8 mt-6'>
            <button className="google w-16 h-12 rounded-md border border-slate-200 bg-[url('./svgs/google.svg')] bg-no-repeat bg-center">
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


        <div className="mt-6 flex flex-col gap-6 inputs w-full ">
            <div >
              <p className='text-gray-800 text-sm'>Email</p>
              <input name='email' className='p-4 mt-2 w-full h-14 border border-black-900 rounded-md ' type="text"  placeholder='Your email address' onChange={changeHandler}/>
            </div>
            <div >
              <p className='text-gray-800 text-sm'>Password</p>
              <input name='password' className=' p-4 mt-2 w-full h-14 border border-black-900 rounded-md ' type="password"  placeholder='Your Password' onChange={changeHandler}/>
            </div>
            <button className='w-full h-14 bg-black text-white border rounded-md hover:opacity-80'>Log In</button>
            <a className='text-gray-400 text-center font-semibold'>Forgot your password?</a>
        </div>

        {/* <div className='w-full h-96 bg-red-50'></div> */}
      </div>
    </div>
      <Footer></Footer>
    </>
  );
}

export default Login;
