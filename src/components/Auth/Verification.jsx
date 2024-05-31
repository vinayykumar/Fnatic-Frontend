import React, { useState, useRef } from 'react';
import axios from 'axios';
import Logo from '../../svgs/Logo.svg';
import '../../fonts.css';
import Footer from '../Footer/Footer';

const Verification = () => {

  const [otp,setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };
  
  const handleSubmit = async (e) => {
    const otpString = otp.join("");
    const user_email = localStorage.getItem('email');
    console.log("OTP entered: ", otpString);
    console.log("user email", user_email  );
    e.preventDefault();
    try {
      const response = await axios.post('https://fnatic-gamma.vercel.app/api/v1/users/verification', {
        email : user_email,
        otp : otpString
      }
    );
      console.log(response.data);
    } catch (error) {
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
              <a href="" className='text-black-900 underline underline-offset-1'>Sign up</a>
            </div>
          </div>

          {/* Logo */}
          <div className='mt-10'>
            <img src={Logo} alt="Logo" className="w-14 h-14" />
          </div>

          {/* Login para */}
          <div>
            <h1 style={{ fontFamily: 'DrukeWide' }} className='mt-4 text-xl md:text-2xl'>VERIFY YOUR FNATIC ID</h1>
          </div>

          {/* INPUTS */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6 inputs w-full">
            <div>
              <div className='flex gap-4'>
                {
                  otp.map((data,index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      name='email'
                      value={data}
                      className='p-4 mt-2 w-12 h-12 md:w-16 md:h-16 border border-black-900 rounded-md text-center'
                      placeholder='0'
                      onChange={
                        (e) => (handleChange(e.target,index))
                      }
                      onKeyDown={
                        (e) => (handleKeyDown(e,index))
                      }
                      ref={
                        (el) => (inputsRef.current[index] = el)
                      }
                    />
                  ))
                }
              </div>
            </div>
            <button
              className='w-full h-14 bg-black text-white border rounded-md hover:opacity-80'
              onClick={handleSubmit}
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Verification;
