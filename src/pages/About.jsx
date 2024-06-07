import React from "react";
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>

        
<nav className='flex w-[80%] h-[12%] mx-[10%] my-4 rounded-md border-4  bg-gray-100 shadow-lg'>
  <div className='py-8 px-12'>
    <img src="ff.png" alt="" />
  </div>
  <div className='flex flex-row gap-10 py-10 px-[30%] items-center'>
    <h1><Link to="/" >Home</Link></h1>
    <h1><Link to="/Services" >Services</Link></h1>
    <h1><Link to="/" >About</Link></h1>
    <h1><Link to="/Contact" >Contact</Link></h1>
  </div>
</nav>

<div className="flex bg-[#f6db5a1a] w-[1500px] mt-[70px] h-[700px] ml-[200px] mr-[150px]">
  <div className='bg-[#f6db5a1a] flex w-full'>
    <div className='flex w-1/2 flex-col justify-center p-8 gap-10'>
      <h1 className='font-black text-[35px] leading-[26px] tracking-normal text-black opacity-100'>About</h1>
    
      <h2 className='font-[gabriola] text-[25px] leading-[26px] tracking-0px text-[custom-blue] opacity-[100] mb-4'>
        Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Our expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance. With competitive pricing and access to superior consulting services, we have become the favored choice among travelers. Fateh Al Mustaqbil plays a pivotal role in shaping the landscape of travel and tour services not only within the Kingdom of Saudi Arabia but also on a global scale. Welcome to Fateh Al Mustaqbil, where we advocate exploring the world one adventure at a time. Come, be a part of this remarkable journey, and together, let's craft experiences that transcend time and place.
      </h2>
    </div>
    <div className='flex w-1/2 items-center justify-center'>
      <img src="rec8.png" alt="Image" className='mr-4' />
    </div>
  </div>
</div>


<div className="bg-black h-[600px] flex flex-col items-center pt-28">
  <div className="flex flex-col items-center">
    <img className="w-[167px] h-[128px]" src="/FATEH LOGO.png" alt="Logo" />

    <div className="flex gap-10 mt-4">
      <h1 className="text-white list-none">
        <Link to="/">Home</Link>
      </h1>
      <h1 className="text-white list-none">
        <Link to="/about">About</Link>
      </h1>
      <h1 className="text-white list-none">
        <Link to="/services">Services</Link>
      </h1>
      <h1 className="text-white list-none">
        <Link to="/contact">Contact</Link>
      </h1>
    </div>

    <div className="flex gap-10 mt-6">
      <img src="/fb.svg" alt="Facebook" className="w-6 h-6" />
      <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
      <img src="/x.svg" alt="Twitter" className="w-6 h-6" />
    </div>

    <div className="mt-6">
      <h1 className="text-white">All rights reserved for 2023</h1>
    </div>
  </div>
</div>

      
    </main>
  )
}
