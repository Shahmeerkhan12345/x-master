import React from 'react'
import { Link } from 'react-router-dom';


export default function Contact() {
    return (
        <main>
        <nav className='flex w-[80%] h-[12%] mx-[10%] my-4 rounded-md border-4  bg-gray-100 shadow-lg'>
        <div className='py-8 px-12'>
          <img src="ff.png" alt="" />
        </div>
        <div className='flex flex-row gap-10 py-10 px-[30%] items-center'>
          <h1><Link to="/" >Home</Link></h1>
          <h1><Link to="/Services" >Services</Link></h1>
          <h1><Link to="/About" >About</Link></h1>
          <h1><Link to="/" >Contact</Link></h1>
        </div>
      </nav>

      <div className="flex bg-[#f6db5a1a] w-full mt-[70px] h-[700px] ">
  <div className='bg-[#f6db5a1a] flex w-full'>
   
  </div>
</div>

      </main>
 

      
    )
}
