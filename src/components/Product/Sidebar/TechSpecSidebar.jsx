import React from 'react'

    
const Sidebar = ({data,close,photo}) => {
 
  return (
    <>
     <div class="fixed z-50 h-full inset-0 flex  w-screen">
     <div className='w-2/3 h-full inset-0  bg-black opacity-60'></div>
     <div className=' flex flex-col absolute z-50 w-1/3 h-full items-center bg-white  absolute inset-y-0 right-0 overflow-y-scroll opacity-100 '>
      <div className='w-full px-10'>
        <div className='flex flex-row justify-between mt-9 w-full '>
            <div className='text-xl  text-grey-900 font-medium'>
            Tech Specs
            </div>
        <button className='w-10 h-10 rotate-45 bg-[rgba(239,240,242)] rounded-full p-1' onClick={close}>+</button>
      </div>
      <div className='w-full m-5 mx-12'>
        <img className=' bg-[rgba(239,240,242)] w-3/4 h-3/4 px-6' src={photo[1].url} alt="Tech Specs" />
      </div>
      <ul>
      {data.techSpecs.map((item,index) =>
        <div>
           <li className='flex flex-row justify-between m-2'>
          <p className='text-gray-600 text-sm'>{item.name}</p>
          <p className='text-gray-600 text-sm'>{item.value}</p>
        </li>
        <hr></hr>
        </div>
       
      
      )}
      </ul>
      </div>
     
     
       </div>
     </div>
    
     
   
    
    </>
   

  )
}

export default Sidebar