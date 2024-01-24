import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [register, setRegister]=useState(false);
  
    const handleLogOut = () =>{
 
      window.open("http://localhost:5000/auth/logout", "_self")
        
    }
    const home = () =>{

    }
    const toggleOpen = () => {
      setOpen(!open);
    };
    const handleClick = (event) => {
      event.preventDefault();
      setOpen(false);
    };
    return (
        <div className='bg-[#fee2e2] sticky top-0 z-50 relative'>
        <header className={`grid grid-cols-12 z-50 justify-between w-[100%] md:w-[95%] m-auto p-4 items-center sticky top-0`}>

            <div className='col-span-6 md:col-span-4 mx-2'>
                <NavLink to="/home" className='text-2xl font-bold md:text-3xl py-2'>ADUST</NavLink>
            </div>



            <div className='col-span-4 hidden md:block md:m-auto'>
                    <NavLink activeClass="active" className='mx-2 text-md md:text-xl font-bold hover:text-blue-500 focus:text-red-500' to="/home" onClick={home}>Home</NavLink>
                    <NavLink activeClass="active" className='mx-2 text-md md:text-xl font-bold hover:text-blue-500 focus:text-red-500' to="/event" onClick={home}>Event</NavLink>
                    <NavLink activeClass="active" className='mx-2 text-md md:text-xl font-bold hover:text-blue-500 focus:text-red-500' to="/contest" onClick={home}>Contest</NavLink>
                    <NavLink activeClass="active" className='mx-2 text-md md:text-xl font-bold hover:text-blue-500 focus:text-red-500' to="/profile" onClick={home}>Profile</NavLink>
            </div>


           
           <div className='col-span-6 md:col-span-4 float-right'>
           <div className="flex text-sm items-center relative z-40 float-right">
            <Icon icon="bi:person" width="20px" />
            <button onClick={toggleOpen} className="flex items-center space-x-1">
              <h1 className='font-semibold sm:text-sm md:text-xl'> John</h1>
              <Icon icon="ep:arrow-down" className={`transition-transform duration-300 ${ open ? "rotate-180" : "rotate-0" }`}/>
            </button>

            <ul className={`absolute ${open ? "block" : "hidden"} top-10  bg-white w-full px-0 w-[70px] md:w-[80px] md:px-2 py-1 space-y-1 rounded animation-open transition-all duration-300`}>
              <li onClick={handleClick} className="hover:translate-x-1 duration-300 hover:text-red-500">
                <NavLink className='font-bold px-1' to="/profile">Profile</NavLink> 
              </li>
              <div className='flex hover:translate-x-1 duration-300 hover:text-red-500'>
                {
                  register ? <NavLink to='/uploadpicture' className='font-bold hover:text-red-500 flex px-1' >Join<Icon icon="typcn:plus" width="20px" /></NavLink> : <NavLink to='/contestrules' className='font-bold hover:text-red-500 flex px-1' >Join<Icon icon="typcn:plus" width="20px" /></NavLink>
                }
              </div>
              <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500' onClick={handleLogOut}>LogOut</button></li>
            </ul>
          </div>
           </div>

     
        </header>



        </div>
    );
};

export default Header;