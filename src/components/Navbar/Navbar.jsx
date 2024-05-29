import React from 'react'

const Navbar = () => {
  return (
      <div className='flex w-full h-16 bg-white p-3'>
        <div className='flex w-full justify-between items-center border bottom-b-1'>
            <div className="left flex flex-row items-center gap-4">
                <div className="w-4 h-16 bg-[url('./svgs/menu_icon.svg')] bg-no-repeat bg-center"></div>
                <div className="w-5 h-16 bg-[url('./svgs/search_icon.svg')] bg-no-repeat bg-center"></div>
            </div>
            <div className="logo">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[url('./svgs/Logo.svg')] bg-no-repeat bg-center "></div>
            </div>
            <div className="right flex flex-row items-center gap-4">
                <div className="w-4 h-20 bg-[url('./svgs/cart_icon.svg')] bg-no-repeat bg-center"></div>
                <div className="w-6 h-20 bg-[url('./svgs/profile_icon.svg')] bg-no-repeat bg-center"></div>
            </div>
        </div>
      </div>
  )
}

export default Navbar
