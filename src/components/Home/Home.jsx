import React from 'react';
import Category from './Category/Category';

const Home = () => {
  return (
    <div className='flex flex-col gap-8 w-full h-full'>
      <Category></Category>
      <div className='flex flex-col items-center w-full'>
        <h1 style={{ fontFamily: 'DrukeWide' }} className='text-3xl text-center md:text-4xl md:w-96 '>LEVEL UP YOUR GAME.</h1>
        <img src="https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=3200,width=1280,trim=266;0;267;0/https://cdn.sanity.io/images/5gii1snx/production/58717b85213e0cbf8f8b1663204eeb6bb2b60c5c-1600x1600.png" alt="Keyboard" className='w-96 h-auto lg:w-3/4 md:mt-[-170px]' />
        <p className='text-center mt-[-170px] w-96'>Esports gear is about simplicity, comfort and reliability - it's exactly what you need to perform and nothing else</p>
        <button className='mt-4 w-36 h-12 bg-black text-white rounded rounded-lg p-2 text-sm mt-0'>See Fnatic Gear</button>
      </div>
    </div>
  );
}

export default Home;
