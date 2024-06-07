import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
<main>
    <div className='bg-[#f6db5a1a] h-screen w-full flex flex-col'>
    <nav className='flex w-[80%] h-[12%] mx-[10%] my-4 rounded-md border-4  bg-gray-100 shadow-lg'>
  <div className='py-8 px-12'>
    <img src="ff.png" alt="" />
  </div>
  <div className='flex flex-row gap-10 py-10 px-[30%] items-center'>
    <h1><Link to="/" >Home</Link></h1>
    <h1><Link to="/" >Services</Link></h1>
    <h1><Link to="/About" >About</Link></h1>
    <h1><Link to="/Contact" >Contact</Link></h1>
  </div>
</nav>
        
        <div className='flex h-[10%]    my-[1%] font-bold text-4xl leading-10  w-full flex-col'>
           <h1 className='py-10 px-[40%] flex'>Services by FATEH</h1>
           <div className='flex   justify-center font-normal  text-base leading-10 tracking-normal text-gray-600 py-[-5%]'>
            <h2 >Elevate your travel experience with our comprehensive and efficient solutions. We leverage <br />a wide range of travel services, all aimed at making your travel journey smooth and enjoyable.</h2>
           </div>
        </div>
        <div className='grid grid-cols-2 gap-4 h-[60%] my-[5%]'>
  <div className='flex items-start mx-[20%]'>
    <img src="Rec.png" alt="" className='mr-4' />
  </div>  
  <div className=''>
    <h1 className='mx-[5%] w-[2%] font-general-sans text-[70px] leading-95px font-medium text-[#BD9C0080] mb-4'>01</h1>
    <h1 className=' text-left font-cooper text-[36px] leading-[52px] font-black tracking-[0px] text-[custom-blue] opacity-[100] mb-4'>International And Domestic Flight Tickets</h1>
    <h2 className=' font-[gabriola] text-[30px] leading-[26px] tracking-0px text-[custom-blue] opacity-[100] '>
      Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
     
      posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id
    
   
      ligula sed magna dictum porta.
    </h2>
<br /><br />
    <button className='bg-[#BD9C00] rounded-md opacity-100 w-[139px] h-[46px] hover:bg-[#FFD700] duration-500'>Get started</button>
  </div>
</div>




  </div>
  <div className='bg-[#f6db5a1a] h-screen flex'>
  <div className='grid grid-cols-2 gap-4 h-[60%] my-[5%] mx-[5%]'>
  <div className=''>
    <h1 className='mx-[5%] w-[2%] font-general-sans text-[76px] leading-[95px] font-medium text-[#BD9C0080] mb-4'>02</h1>
    <h1 className=' text-left font-cooper text-[36px] leading-[52px] font-black tracking-[0px] text-[custom-blue] opacity-[100] mb-4'>Hotel Reservation World Wide</h1>
    <h2 className=' font-[gabriola] text-[25px] leading-[26px] tracking-0px text-[custom-blue] opacity-[100] '>
      Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices

      posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id
   
      imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies
      
      ligula sed magna dictum porta.
    </h2>
    <button className='bg-[#BD9C00] rounded-md opacity-100 w-[139px] h-[46px] hover:bg-[#FFD700] duration-500  '>Get started</button>
  </div>
  <div className='flex items-start justify-end mx-[20%]'>
    <img src="rec2.png" alt="" className='mr-4' />
  </div>  
 
</div>
</div>
<div className='flex h-screen bg-[#f6db5a1a]'>

<div className='grid grid-cols-2 gap-4 h-[60%] my-[5%] '>
  <div className='flex items-start mx-[20%]'>
    <img src="rec3.png" alt="" className='mr-4' />
  </div>  
  <div className=''>
    <h1 className='mx-[5%] w-[2%] font-general-sans text-[70px] leading-95px font-medium text-[#BD9C0080] mb-4'>03</h1>
    <h1 className=' text-left font-cooper text-[36px] leading-[52px] font-black tracking-[0px] text-[custom-blue] opacity-[100] mb-4'>Visa services</h1>
    <h2 className=' font-[gabriola] text-[30px] leading-[26px] tracking-0px text-[custom-blue] opacity-[100] '>
      Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
   
      posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id
     
      imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies
    
      ligula sed magna dictum porta.
    </h2>

    <button className='bg-[#BD9C00] rounded-md opacity-100 w-[139px] h-[46px] hover:bg-[#FFD700] duration-500  '>Get started</button>
  </div>
</div>
</div>
<div className='bg-[#f6db5a1a] h-screen flex'>
  <div className='grid grid-cols-2 gap-4 h-[60%] my-[5%] mx-[5%]'>
  <div className=''>
    <h1 className='mx-[5%] w-[2%] font-general-sans text-[76px] leading-[95px] font-medium text-[#BD9C0080] mb-4'>04</h1>
    <h1 className=' text-left font-cooper text-[36px] leading-[52px] font-black tracking-[0px] text-[custom-blue] opacity-[100] mb-4'>International driving license</h1>
    <h2 className=' font-[gabriola] text-[22px] leading-[26px] tracking-0px text-[custom-blue] opacity-[100] '>
      Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      
      posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id
     
      imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies
      
      ligula sed magna dictum porta.
    </h2>
    <button className='bg-[#BD9C00] rounded-md opacity-100 w-[139px] h-[46px] hover:bg-[#FFD700] duration-500  '>Get started</button>
  </div>
  <div className='flex items-start justify-end mx-[20%]'>
    <img src="rec4.png" alt="" className='mr-4' />
  </div>  
</div>
         
</div>
<div className='flex h-screen bg-[#f6db5a1a]'>

<div className='grid grid-cols-2 gap-4 h-[60%] my-[5%] '>
  <div className='flex items-start mx-[20%]'>
    <img src="rec5.png" alt="" className='mr-4' />
  </div>  
  <div className=''>
    <h1 className='mx-[5%] w-[2%] font-general-sans text-[70px] leading-95px font-medium text-[#BD9C0080] mb-4'>05</h1>
    <h1 className=' text-left font-[cooper] font-black text-[36px] leading-[52px] tracking-normal text-[#182F43] opacity-100'>Airport VIP <br />Services(Meet & Greet)</h1>
    <h2 className=' font-[gabriola] text-[30px] leading-[26px] tracking-0px text-[custom-blue] opacity-[100] '>
      Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
   
      posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id
     
      imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies
    
      ligula sed magna dictum porta.
    </h2>
<br />
    <button className='bg-[#BD9C00] rounded-md opacity-100 w-[139px] h-[46px] hover:bg-[#FFD700] duration-500  '>Get started</button>
  </div>
</div>
</div>
<div className='bg-[#f6db5a1a] h-screen flex'>
  <div className='grid grid-cols-2 gap-4 h-[60%] my-[5%] mx-[5%]'>
  <div className=''>
    <h1 className='mx-[5%] w-[2%] font-general-sans text-[76px] leading-[95px] font-medium text-[#BD9C0080] mb-4'>06</h1>
    <h1 className=' text-left font-[cooper] font-black text-[36px] leading-[52px] tracking-normal text-[#182F43] opacity-100'>House Maid <br /> Transportation</h1>
    <h2 className=' font-[gabriola] text-[22px] leading-[26px] tracking-0px text-[custom-blue] opacity-[100] '>
      Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      
      posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id
     
      imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies
      
      ligula sed magna dictum porta.
    </h2>
    <br />
    <button className='bg-[#BD9C00] rounded-md opacity-100 w-[139px] h-[46px] hover:bg-[#FFD700] duration-500  '>Get started</button>
  </div>
  <div className='flex items-start justify-end mx-[20%]'>
    <img src="rec4.png" alt="" className='mr-4' />
  </div>  
</div>
         
</div>

<div className='flex h-screen bg-[#f6db5a1a]'>

<div className='grid grid-cols-2 gap-4 h-[60%] my-[5%] '>
  <div className='flex items-start mx-[20%]'>
    <img src="rec6.png" alt="" className='mr-4' />
  </div>  
  <div className=''>
    <h1 className='mx-[5%] w-[2%] font-general-sans text-[70px] leading-95px font-medium text-[#BD9C0080] mb-4'>07</h1>
    <h1 className=' text-left font-[cooper] font-black text-[36px] leading-[52px] tracking-normal text-[#182F43] opacity-100'>Tourism  <br />Packages</h1>
    <h2 className=' font-[gabriola] text-[30px] leading-[26px] tracking-0px text-[custom-blue] opacity-[100] '>
      Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
   
      posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id
     
      imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies
    
      ligula sed magna dictum porta.
    </h2>
<br />
    <button className='bg-[#BD9C00] rounded-md opacity-100 w-[139px] h-[46px] hover:bg-[#FFD700] duration-500  '>Get started</button>
  </div>
</div>
</div>
<div className='bg-[#f6db5a1a] h-screen flex'>
  <div className='grid grid-cols-2 gap-4 h-[60%] my-[5%] mx-[5%]'>
  <div className=''>
    <h1 className='mx-[5%] w-[2%] font-general-sans text-[76px] leading-[95px] font-medium text-[#BD9C0080] mb-4'>08</h1>
    <h1 className=' text-left font-[cooper] font-black text-[36px] leading-[52px] tracking-normal text-[#182F43] opacity-100'>Umrah & Ziyara <br />Services</h1>
    <h2 className=' font-[gabriola] text-[22px] leading-[26px] tracking-0px text-[custom-blue] opacity-[100] '>
      Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      
      posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id
     
      imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies
      
      ligula sed magna dictum porta.
    </h2>
    <br />
    <button className='bg-[#BD9C00] rounded-md opacity-100 w-[139px] h-[46px] hover:bg-[#FFD700] duration-500  '>Get started</button>
  </div>
  <div className='flex items-start justify-end mx-[20%]'>
    <img src="rec7.png" alt="" className='mr-4' />
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

  );
}
