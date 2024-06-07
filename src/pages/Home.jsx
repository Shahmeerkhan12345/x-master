import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <nav className="bg-white w-full h-[45px] flex rounded-md absolute">
        <div className="bg-yellow-500 w-full h-[45px]">
          <div className="w-full mx-[70%] flex gap-10">
            <h1 className="list-none inline-block">
              <img src="/phone.svg" alt="Phone" />
            </h1>
            <h1 className="list-none inline-block text-white">96654628</h1>
            <h1 className="list-none inline-block">
              <img src="/map-pin.svg" alt="Map Pin" />
            </h1>
            <h1 className="list-none inline-block text-white">
              Al noor industrial area, Riyadh
            </h1>
            <h1 className="list-none inline-block text-white">
              <button>English</button>
            </h1>
          </div>
        </div>
      </nav>
      <div className="w-full flex  bg-gray-100 shadow-lg h-36">
        <div>
          <div className="mx-5 my-20">
            <img src="ff.png" alt="Logo"  />
            <div className="items-center flex mx-[450%] gap-10 my-[-10%]">
              <h1 className="text-black list-none inline-block">
                <Link to="/">Home</Link>
              </h1>
              <h1 className="text-black list-none inline-block">
                <Link to="/about">About</Link>
              </h1>
              <h1 className="text-black list-none inline-block">
                <Link to="/services">Services</Link>
              </h1>
              <h1 className="list-none inline-block">
                <Link to="/contact">Contact</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] flex">
        <div className="bg-[url('/pic1.svg')] w-[35%]">
          <h1 className="text-white mx-[5%] my-[9%] font-cooper font-black text-4xl leading-tight">
            Your Gateway to <br /> World Adventure
          </h1>
        </div>
        <div className="h-[300px]">
          <img src="/pic2.png" alt="Pic 2" />
        </div>
      </div>
      <div className="my-[50px] w-full h-[120px] mx-[10%] flex">
        <div className="bg-[url('/pic4.png')] w-[247px] h-[120px] text-center">
          <div className="bg-gradient-to-t from-[#BD9C00] to-[#00162499] h-[120px] hover:opacity-0 duration-500">
            <img className="mx-[100px]" src="/Union 1.svg" alt="Union 1" />
            <h1 className="text-[#FFFFff] font-serif mb-2">
             <Link to="/services"> International and <br /> Domestic flights</Link>
            </h1>
          </div>
          <div className="bg-[url('cal-bg.png')] w-[247px] h-[120px] mx-[130%] my-[-120px]">
            <div className="bg-gradient-to-t from-[#BD9C00] to-[#00162499] h-[120px] hover:opacity-0 duration-500">
              <img className="mx-[100px]" src="cal.svg" alt="Cal" />
              <h1 className="text-[#FFFFff] font-serif mb-2">
              <Link to="/services"> Hotel Reservation <br /> World wide</Link> 
              </h1>
            </div>
          </div>
          <div className="bg-[url('/vs-s.png')] w-[247px] h-[120px] mx-[250%] my-[-121px]">
            <div className="bg-gradient-to-t from-[#BD9C00] to-[#00162499] h-[120px] hover:opacity-0 duration-500">
              <img className="mx-[100px]" src="/visa.svg" alt="Visa" />
              <h1 className="text-[#FFFFff] font-serif mb-2">
              <Link to="/services"> Visa <br /> services</Link>
              </h1>
            </div>
          </div>
          <div className="bg-[url('/dr-bg.png')] w-[247px] h-[120px] mx-[380%] my-[-121px]">
            <div className="bg-gradient-to-t from-[#BD9C00] to-[#00162499] h-[120px] hover:opacity-0 duration-500">
              <img className="mx-[100px]" src="/dr-l.svg" alt="Driving License" />
              <h1 className="text-[#FFFFff] font-serif mb-2">
              <Link to="/services">  International <br /> driving license</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[70px] w-full h-[120px] mx-[10%] flex">
        <div className="bg-[url('/aero.png')] w-[247px] h-[120px] text-center">
          <div className="bg-gradient-to-t from-[#BD9C00] to-[#00162499] h-[120px] hover:opacity-0 duration-500">
            <img className="mx-[100px]" src="/aer.svg" alt="Aero" />
            <h1 className="text-[#FFFFff] font-serif mb-2">
            <Link to="/services">  Airport VIP Service <br /> Meet & Greet</Link>
            </h1>
          </div>
          <div className="bg-[url('/md.png')] w-[247px] h-[120px] mx-[130%] my-[-120px]">
            <div className="bg-gradient-to-t from-[#BD9C00] to-[#00162499] h-[120px] hover:opacity-0 duration-500">
              <img className="mx-[100px]" src="/maid.svg" alt="Maid" />
              <h1 className="text-[#FFFFff] font-serif mb-2">
              <Link to="/services">  House Maid <br /> Transportation</Link>
              </h1>
            </div>
          </div>
          <div className="bg-[url('/tour.png')] w-[247px] h-[120px] mx-[250%] my-[-121px]">
            <div className="bg-gradient-to-t from-[#BD9C00] to-[#00162499] h-[120px] hover:opacity-0 duration-500">
              <img className="mx-[100px]" src="/globe.svg" alt="Globe" />
              <h1 className="text-[#FFFFff] font-serif mb-2">
              <Link to="/services">   Tourism<br /> Packages</Link>
              </h1>
            </div>
          </div>
          <div className="bg-[url('/umrah.png')] w-[247px] h-[120px] mx-[380%] my-[-121px]">
            <div className="bg-gradient-to-t from-[#BD9C00] to-[#00162499] h-[120px] hover:opacity-0 duration-500">
              <img className="mx-[100px]" src="/um.svg" alt="Umrah" />
              <h1 className="text-[#FFFFff] font-serif mb-2">
              <Link to="/services">   Umrah & Ziyara<br /> Services</Link>
              </h1>
            </div>
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
