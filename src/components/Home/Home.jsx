import React from 'react';
import Category from './Category/Category';

const Home = () => {
  return (
    <div className='flex flex-col gap-8 w-full h-full'>
      <Category></Category>

      <div className='w-full h-screen '>
        <div className='flex h-[800px] pl-16 pr-16 gap-4'>
          <div className="flex-1 w-1/2 h-full rounded-lg bg-[url('https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1280/https://cdn.sanity.io/images/5gii1snx/production/26c06ca39b45e8ec6429072fa3c877823d3edbac-1350x1350.jpg')] bg-cover"></div>
          <div className="flex-1 w-1/2 h-full rounded-lg bg-[url('https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,width=1536/https://cdn.sanity.io/images/5gii1snx/production/3fcad6d9201002292383d70160bdf634293f551c-2668x4000.jpg')] bg-cover"></div>
        </div>
      </div>

      <div className='flex flex-col items-center w-full mt-8'>
        <h1 style={{ fontFamily: 'DrukeWide' }} className='text-3xl text-center  '>LEVEL UP YOUR GAME.</h1>
        <img src="https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=3200,width=1280,trim=266;0;267;0/https://cdn.sanity.io/images/5gii1snx/production/58717b85213e0cbf8f8b1663204eeb6bb2b60c5c-1600x1600.png" alt="Keyboard" className='w-96 h-auto lg:w-3/4 ' />
        <p className='text-center mt-[-170px] w-96'>Esports gear is about simplicity, comfort and reliability - it's exactly what you need to perform and nothing else</p>
        <button className='mt-4 w-36 h-12 bg-black text-white rounded-lg p-2 text-sm'>See Fnatic Gear</button>
      </div>

    </div>
  );
}

export default Home;
