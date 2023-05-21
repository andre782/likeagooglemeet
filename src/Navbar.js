import React from 'react';
import Logo from "../src/aset/zoom.png"

const Navbar= ()=> {
  return (
    <div className='bg-black/90'>

    <div className=' h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto'>
        {/* left */}
      <div className='flex items-center'>
        <div className='flex w-[3rem] h-[3rem] bg-white rounded-full'>
          <img src={Logo}  className="object-cover p-2"/>
        </div>
        <div className='text-white font-bold'>
          <p className='text-[20px] pl-2'>Meeting app</p>
        </div>
      </div>
      {/* right */}
      <div>
      <ul className='text-white font-bold flex items-center gap-4 cursor-pointer'>
        <li>About us</li>
        <li>Product</li>
        <li>Blogs</li>
      </ul>
      </div>
    </div>
    </div>
  )
}
export default Navbar;
