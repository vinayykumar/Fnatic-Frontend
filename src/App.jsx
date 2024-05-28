import React from 'react';
import './index.css';
import Logo from './svgs/Logo.svg';

function App() {
  return (
    <div className="main w-full h-full">

      <div className="flex flex-col justify-center items-center p-6">
        <div>
          <div className='flex gap-2'>
            <p className='text-gray-600'>New to Fnatic?</p>
            <a href="" className='text-black-900'>Signup</a>
          </div>
        </div>

        <div className='mt-10'>
            <img src={Logo} alt="Logo" className="w-12 h-12" />
        </div>

        <div>
          <h1 className='font-black mt-4 text-lg'>LOG INTO FNATIC ID</h1>
        </div>

        <div className="btns">
          <div className='flex gap-6 mt-8'>
            <button className="google w-16 h-12 rounded-md border border-slate-200 bg-[url('./svgs/google.svg')] bg-no-repeat bg-center">
            </button>
            <button className="google w-16 h-12 rounded-md border border-slate-200 color-red bg-[url('./svgs/twitch.svg')] bg-no-repeat bg-center bg-violet-500">
            </button>
            <button className="google w-16 h-12 rounded-md border border-slate-200 bg-[url('./svgs/twitter.svg')] bg-no-repeat bg-center bg-sky-500">
            </button>
            <button className="google w-16 h-12 rounded-md border border-slate-200 bg-[url('./svgs/google.svg')] bg-no-repeat bg-center">
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
