import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";
import logo from '../../Logo/Adust.PNG'

const Header = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage]=useState(false)
  const [notification, setNotification]=useState(false)

  const handleLogOut = () => {

    // window.open("http://localhost:5000/auth/logout", "_self")

  }
  const home = () => {

  }



  return (
    <div className='bg-white sticky top-0 z-50 relative'>
      <header className={`grid grid-cols-12 z-50 justify-between w-[100%] md:w-[95%] m-auto p-4 items-center sticky top-0`}>

        <div className='col-span-7 md:col-span-4 mx-2'>
          <div className='flex'>
            <NavLink to="/home" className='text-2xl font-bold md:text-3xl py-2'>
              <img className='h-10 w-10' src={logo} alt='' />
            </NavLink>
            <div className='mt-1'><input className='ml-3 mt-1 p-1.5 rounded-full bg-[#F0F2F5] focus:outline-none' placeholder='Search' /></div>
          </div>
        </div>



        <div className='col-span-4 hidden md:block md:m-auto'>
          <NavLink activeClass="active" className='mx-2 text-md md:text-xl font-bold hover:text-blue-500 focus:text-red-500' to="/home" onClick={home}>Home</NavLink>
          <NavLink activeClass="active" className='mx-2 text-md md:text-xl font-bold hover:text-blue-500 focus:text-red-500' to="/event" onClick={home}>Event</NavLink>
          {/* <NavLink activeClass="active" className='mx-2 text-md md:text-xl font-bold hover:text-blue-500 focus:text-red-500' to="/contest" onClick={home}>Contest</NavLink> */}
          <NavLink activeClass="active" className='mx-2 text-md md:text-xl font-bold hover:text-blue-500 focus:text-red-500' to="/profile" onClick={home}>Profile</NavLink>
        </div>



        <div className='col-span-5 md:col-span-4 float-right'>
          <div className="flex text-sm items-center relative z-40 float-right">
            <Icon className='cursor-pointer' onClick={()=>{setMessage(!message); setNotification(false);setOpen(false)}} icon="lucide:message-circle-heart" width="30px" />
            <Icon className='cursor-pointer' onClick={()=>{setNotification(!notification); setMessage(false);setOpen(false)}} icon="basil:notification-solid" width="30px" />

            <div className='relative'>
              <img alt='qwer' className='h-8 ml-1 w-8 rounded-full cursor-pointer' src='https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/366606662_2101705720162212_3015616699096048132_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHGJpN8bLMrQrt6bgUv8p9fU44vG6XhW69Tji8bpeFbr9BvArv-okFiSJgQzBTQuyHgRPgNArqtOBr0f5KYGe07&_nc_ohc=lmCopI_p14wAX95p9xd&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBIcD_oGqmNSYUCoYOCXIlWSWEHYiX3TxrJ3mGPZlRfeQ&oe=65B9791E' />
              <button onClick={()=>{setNotification(false); setMessage(false);setOpen(!open)}} className="flex items-center space-x-1">
                <Icon icon="ep:arrow-down" className={`transition-transform absolute z-50 bg-gray-300 border-2 border-white rounded-full right-0 duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
              </button>
            </div>
          </div>

          {/* Profile Edit Option */}
          <div className='relative shadow-lg rounded'>
            <div className={`absolute ${open ? "block" : "hidden"} mt-12 right-0 bg-red-200 px-0 w-[250px]  md:px-2 py-1 space-y-1 rounded animation-open transition-all duration-300`}>
              <div className='flex shadow-lg rounded-md p-2'>
              <img alt='qwer' className='h-8 ml-1 w-8 mr-1 rounded-full' src='https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/366606662_2101705720162212_3015616699096048132_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHGJpN8bLMrQrt6bgUv8p9fU44vG6XhW69Tji8bpeFbr9BvArv-okFiSJgQzBTQuyHgRPgNArqtOBr0f5KYGe07&_nc_ohc=lmCopI_p14wAX95p9xd&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBIcD_oGqmNSYUCoYOCXIlWSWEHYiX3TxrJ3mGPZlRfeQ&oe=65B9791E' />
              <NavLink className="font-semibold p-1">Mehedi Hasan</NavLink>
              </div>
              <ul >
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500' onClick={handleLogOut}>LogOut</button></li>
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500' onClick={handleLogOut}>LogOut</button></li>
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500' onClick={handleLogOut}>LogOut</button></li>
              </ul>
            </div>

          </div>

          {/* Message Option */}
          <div className='relative shadow-lg rounded'>
            <div className={`absolute ${message ? "block" : "hidden"} mt-12 right-0 bg-red-200 px-0 w-[250px]  md:px-2 py-1 space-y-1 rounded animation-open transition-all duration-300`}>
            <div className='rounded-md p-2 grid grid-cols-4'>
              <div className='grid col-span-3'><h1 className='font-bold text-lg'>Chats</h1></div>
              <div><Icon icon="tabler:dots" width="20px" className=' z-50 float-right'/></div>
              <div className='grid col-span-4'>
                <input className='w-full py-1 px-1.5 rounded-full' placeholder='search chat'/>
              </div>
              </div>
              <ul >

                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500' onClick={handleLogOut}>LogOut</button></li>
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500' onClick={handleLogOut}>LogOut</button></li>
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500' onClick={handleLogOut}>LogOut</button></li>
              </ul>
            </div>
          </div>



          {/* Nofication Option */}
          <div className='relative shadow-lg rounded'>
            <div className={`absolute ${notification ? "block" : "hidden"} mt-12 right-0 bg-red-200 px-0 w-[250px]  md:px-2 py-1 space-y-1 rounded animation-open transition-all duration-300`}>
              <div className='rounded-md p-2 grid grid-cols-4'>
              <div className='grid col-span-3'><h1 className='font-bold text-lg'>Nofications</h1></div>
              <div><Icon icon="tabler:dots" width="20px" className=' z-50 float-right'/></div>
              </div>
              <ul >
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500' onClick={handleLogOut}>LogOut</button></li>
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500' onClick={handleLogOut}>LogOut</button></li>
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500' onClick={handleLogOut}>LogOut</button></li>
              </ul>
            </div>

          </div>
        </div>


      </header>



    </div>
  );
};

export default Header;