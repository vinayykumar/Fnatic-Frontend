import React, { useState } from 'react'
import Category from '../Home/Category/Category'
import { Rating } from '@material-tailwind/react'

import Sidebar from './Sidebar/TechSpecSidebar'
import ShippingSidebar from './Sidebar/ShippingSidebar'

const Product = () => {
const [showTech, setShowTech] = useState(false)
const [showShipping, setShowShipping] = useState(false)
 const urls = [
    {   
        id: 1,
        url:
        'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=1998,width=1536,trim=0;400;0;399/https://cdn.sanity.io/images/5gii1snx/production/ee8edec747f0ecd40a366831e98cf690d6e6257e-2000x1500.png'
    },
    {
        id: 2,
        url:
   ' https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=1998,width=1536,trim=0;499;0;499/https://cdn.sanity.io/images/5gii1snx/production/cf1f04ba54cef93a5f88f3ce77176c89bc122ea0-2500x1875.png'

    },
    {
        id: 3,
        url:'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=1998,width=1536,trim=0;499;0;499/https://cdn.sanity.io/images/5gii1snx/production/cf3ca33e7eaedf0e1d66735dc9a8596313273a98-2500x1875.png'
    },
    {
        id: 4,
        url:'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=1998,width=1536,trim=0;499;0;499/https://cdn.sanity.io/images/5gii1snx/production/cf1f04ba54cef93a5f88f3ce77176c89bc122ea0-2500x1875.png'
    },
   
    {
        id: 5,
        url:
   ' https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=1998,width=1536,trim=0;400;0;399/https://cdn.sanity.io/images/5gii1snx/production/20b0c8d484b99306484d4125c327ae444913d854-2000x1500.png'

    },
    {
        id: 6,
        url:
    'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=1998,width=1536,trim=0;264;0;239/https://cdn.sanity.io/images/5gii1snx/production/44c39175b4aeda00f4193e21a5b62088d1f757af-1080x720.jpg'

    },
    {
        id: 7,
        url:
   ' https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=1998,width=1536,trim=2;0;3;0/https://cdn.sanity.io/images/5gii1snx/production/acb8e6497242ee081025984db56caceab3af309e-4422x5527.jpg'

    }
   ]
const ProductDetails = {
    rating: 4,
    Category:'Headphones',
    title:{main:"React",sub:"Esports Performance Headset"},
    Price: "$200",
    Description: 
    `The REACT+ headset has been designed to provide maximum advantage in-game through audio. Distinguish the most important sounds with clarity, whilst providing crystal clear comms to teammates. It's a headset crafted by the world’s elite esports athletes, for performance.
    
    The REACT+ comes with an advanced USB 7.1 sound card, with independent controls for output audio and microphone, as well as enabling FNATIC's precision-tuned virtual 7.1 surround sound. This model comes with both Protein Leather and Velour Earpads, giving you the choice.`,
    inStock: false,
    version:[
        {
            version_name:"React",
            version_photo:'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=1998,width=1536,trim=0;400;0;399/https://cdn.sanity.io/images/5gii1snx/production/ee8edec747f0ecd40a366831e98cf690d6e6257e-2000x1500.png'
        },
        {
            version_name:"React+",
            version_photo:'https://cf-img.fnatic.com/cdn-cgi/image/dpr=1,fit=contain,format=auto,height=1998,width=1536,trim=0;400;0;399/https://cdn.sanity.io/images/5gii1snx/production/a215bb74877126affd45358533049038c4c95630-2000x1500.png'
        },
    ],
    techSpecs: [{name:"Battery Life",value:"24 hours"},{name:"Weight",value:"200g"}]


}
const toggleTech = () => {
     setShowTech(!showTech)
}
const toggleShipping = () => {  
    setShowShipping(!showShipping)
}
const handleClose = () => {
    setShowTech(false)
    setShowShipping(false)
}
  return (
    <>
     <Category/>
     <div className='flex flex-row m-5'>
     <div className='w-2/3 m-5 flex flex-row flex-wrap '>
     {urls.map((item,index) => 
        <div className=' w-1/2 p-2 '>
          <img className=' bg-[rgba(239,240,242)] rounded-xl ' src={item.url} alt="Image" />
        </div>
     )}
     </div>
     <div className='w-1/3 p-5 flex flex-col align-start justify-start mt-14'>
       <Rating className='flex flex-row mb-4' value={ProductDetails.rating} ratedColor='yellow'  readonly />
       <p className='text-gray-600 text-sm mb-2'>{ProductDetails.Category}</p>
       <p className='text-4xl uppercase font-druk mb-2'>{ProductDetails.title.main}</p>
       <p className='text-gray-600 text-sm mb-2'>{ProductDetails.title.sub}</p>
       <p className='mb-4' >{ProductDetails.Price}</p>
       <hr></hr>
       <div className='flex mt-4 mb-4'>
        {ProductDetails.version.map((item,index) =>
            <div className='mb-2'>
                <p className='text-gray-600 text-sm mb-1 ml-2'>{item.version_name}</p>
                <img className='w-16 h-17.5 bg-[rgba(239,240,242)] rounded m-1 hover:border-2 border-black ' src={item.version_photo} alt="Version" />
            </div>
        )}
       </div>
       <hr></hr>
       {ProductDetails.inStock ?  <button className='bg-black text-white w-full p-3 mt-4 mb-6  rounded'>Add to Cart</button>
        :
        <div className='mb-6'>
             <p className='text-red-600 mt-4 text-sm'>Item is out of stock</p>
        <button className='bg-black text-white w-full p-3 mt-4  rounded'>Notify Me</button>
        </div>
       
        }
        <hr></hr>
        <p className='text-gray-600 text-sm mb-6 mt-6 whitespace-pre-line'>
            {ProductDetails.Description}
        </p>
        <button className='cursor-pointer flex flex-row justify-between m-3 text-base font-semibold' onClick={toggleTech} >
            <p>Technical Specifications</p>
            <p>+</p>
        </button>
        {showTech && (<Sidebar data={ProductDetails} close={handleClose} photo={urls}/>)}
        <hr></hr>
        <button className='flex flex-row justify-between cursor-pointer m-3 bold text-base font-semibold' onClick={toggleShipping}  onBlur={(()=>setShowTech(false))}>
            <p>Shipping & Returns</p>
            <p>+</p>
        </button>
        {showShipping && (<ShippingSidebar data={ProductDetails} close={handleClose}/>)}
        <hr></hr>
        <div className='flex flex-row align-center border border-gray-200 text-left text-sm p-4 m-1 rounded-md mt-9'>
            <img src="https://cdn.sanity.io/images/5gii1snx/production/c1a8febaf045ae70290ac4200fb76c05e2dfc679-20x18.svg" alt="Support" className='w-6 h-6 m-1' />
            <p  className='m-1'>5 days a week support and live chat</p>
        </div>
        <div className='flex flex-row align-center border border-gray-200 text-left text-sm p-4 m-1 rounded-md'>
            <img src="https://cdn.sanity.io/images/5gii1snx/production/1743da5e13a11aab198ae41245dfcc15a78246bf-20x16.svg" alt="Shipping" className='w-6 h-6 m-1' />
            <p  className='m-1'>Free shipping within EU, UK & US on all orders over €100</p>
        </div>
        <div className='flex flex-row align-center  border text-sm border-gray-200 text-left m-1 p-4 rounded-md'>
            <img src="https://cdn.sanity.io/images/5gii1snx/production/5e593872a8d56a88a8647f7f715e7eed4f7d1983-20x21.svg" alt="Warranty" className='w-6 h-6 m-1' />
            <p className='m-1'>2 year warranty on all Fnatic Gear</p>
        </div>
     </div>
     </div>
     
     
    </>
   
  )
}

export default Product
