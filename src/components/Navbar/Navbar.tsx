import React,{ useContext } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='mt-4 flex w-full h-16 bg-white p-3 lg:p-8'>
        <div className='flex w-full items-center justify-between bottom-b-1'>

            {/* Right */}
            <div className="left flex flex-row items-center gap-8">
                <div className="lg:hidden w-4 h-16 bg-[url('./svgs/menu_icon.svg')] bg-no-repeat bg-center"></div>
                <div className="lg:hidden w-5 h-16 bg-[url('./svgs/search_icon.svg')] bg-no-repeat bg-center"></div>
                <NavLink to='/' className='text-center'>
                    <div className="hidden lg:block w-10 h-10 lg:w-12 lg:h-12 bg-[url('./svgs/Logo.svg')] bg-no-repeat bg-center ">
                    </div>
                 </NavLink>
                <div className='hidden lg:block'>Products</div>
                <div className='hidden lg:block'>Community</div>
            </div>

            {/* Middle */}
            <div className="logo">
                <div className="lg:hidden w-10 h-10 lg:w-12 lg:h-12 bg-[url('./svgs/Logo.svg')] bg-no-repeat bg-center "></div>
            </div>

            {/* Left */}
            <div className="right flex flex-row items-center gap-5">
                <div className="hidden lg:block w-5 h-16 bg-[url('./svgs/search_icon.svg')] bg-no-repeat bg-center"></div>

                <div className="w-4 h-20 lg:w-5 bg-[url('./svgs/cart_icon.svg')] bg-no-repeat bg-center"></div>
                
                <div className=" w-6 h-20 lg:w-7 bg-[url('./svgs/profile_icon.svg')] bg-no-repeat bg-center"></div>
                
                <div className='flex items-center justify-center hidden md:block w-20 h-10 p-2 border border-gray-300 rounded rounded-md text-center'>
                    <NavLink to='/login' className='text-center'>Login</NavLink>
                </div>
                <div className='flex items-center justify-center hidden md:block w-20 h-10 p-2 bg-black rounded rounded-md text-center'>
                    <NavLink to='/signup' className='text-center text-white text-sm'>Sign Up</NavLink>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Navbar
