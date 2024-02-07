import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";
import logo from '../../Logo/Adust.PNG'
import ProfileModal from './ProfileModal';
import MessageModal from './MessageModal';
import NotificationModal from './NotificationModal';


const Header = () => {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(false)
  const [data, setData] = useState()
  const [message, setMessage] = useState(false)
  const [notification, setNotification] = useState(false)

  const fetchData = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8050/api/get/users`, {
      method: 'GET',
      headers: {
        'authorization': token,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const data = await response.json()
    setData(data.items)
    if (data) {
      setUserInfo(true)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div className='bg-white bg-[#1E1F1E] text-black sticky top-0 z-50 relative'>
      <header className={`grid grid-cols-12 z-50 justify-between w-[100%] md:w-[95%] m-auto p-1 items-center sticky top-0`}>

        {/* First Div */}
        <div className='col-span-7 md:col-span-4 mx-2'>
          <div className='flex'>
            <NavLink to="/home" className='text-2xl font-bold md:text-3xl py-2'>
              <img className='h-10 w-10' src={logo} alt='' />
            </NavLink>

          </div>
        </div>


        {/* Second Div */}
        <div className='col-span-4 hidden md:block md:m-auto'>
          <NavLink className='mx-2 text-md md:text-lg font-bold hover:text-blue-500 focus:text-red-500' to="/home">Home</NavLink>
          <NavLink className='mx-2 text-md md:text-lg font-bold hover:text-blue-500 focus:text-red-500' to="/favorite/blog">FavoriteBlog</NavLink>
          <NavLink className='mx-2 text-md md:text-lg font-bold hover:text-blue-500 focus:text-red-500' to="/event">CreateBlog</NavLink>
        </div>


        {/* third div */}


        <div className='col-span-5 md:col-span-4 float-right'>
          <div className="flex items-center relative z-40 float-right">
            <Icon onClick={()=>{setMessage(!message);setNotification(false)}} icon="logos:messenger" width="24px" className='m-1 cursor-pointer' />
            <Icon onClick={()=>{setNotification(!notification);setMessage(false)}} icon="basil:notification-outline" width="28px" className='m-1 cursor-pointer' />
            <div className='relative'>
              {userInfo ? <img alt='qwer' className='h-8 ml-1 w-8 rounded-full cursor-pointer' src={data.image_url} /> : <Icon width="25px" icon="entypo:user" />}
              <button onClick={() => { setNotification(false); setMessage(false); setOpen(!open) }} className="flex items-center space-x-1"><Icon icon="ep:arrow-down" className={`transition-transform absolute z-50 bg-gray-200 border-2 border-white rounded-full right-0 duration-300 ${open ? "rotate-180" : "rotate-0"}`} /></button>
            </div>
          </div>


          <div className='relative shadow-lg rounded bg-[#F0F2F5]'>
            <div className={`absolute ${message ? "block" : "hidden"} mt-12 bg-white shadow-lg right-0  p-3 w-[250px] space-y-1 rounded animation-open transition-all duration-300`}>
              <MessageModal userInfo={userInfo} data={data} isOpen={(data)=>{setOpen(data)}}/>
            </div>
          </div>


          <div className='relative shadow-lg rounded bg-[#F0F2F5]'>
            <div className={`absolute ${notification ? "block" : "hidden"} mt-12 bg-white shadow-lg right-0  p-3 w-[250px] space-y-1 rounded animation-open transition-all duration-300`}>
              <NotificationModal userInfo={userInfo} data={data} isOpen={(data)=>{setOpen(data)}}/>
            </div>
          </div>

          <div className='relative shadow-lg rounded bg-[#F0F2F5]'>
            <div className={`absolute ${open ? "block" : "hidden"} mt-12 bg-white shadow-lg right-0  p-3 w-[250px] space-y-1 rounded animation-open transition-all duration-300`}>
              <ProfileModal userInfo={userInfo} data={data}  isOpen={(data)=>{setOpen(data)}}/>
            </div>
          </div>

        </div>


      </header>

    </div>
  );
};

export default Header;