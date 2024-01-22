import React from 'react'
import { Icon } from "@iconify/react";
import {NavLink} from 'react-router-dom'


const Footer = () => {
  return (
    <div className='bg-white'>
    
      {/* <div className='grid grid-cols-1 md:grid-cols-4 w-full md:w-[90%] lg:w-[75%] mx-auto'>
        <div className='ml-5'>
        <h1 className='flex my-5 font-bold text-4xl'>E-Commerce</h1>

        </div>

        <div></div>
        <div></div>

          <div className='flex ml-5 lg:my-3 lg:ml-14'>
             <div className='mt-3 py-2'><Icon icon="fluent:call-16-filled" width='50px' style={{color:"#06D889"}} /></div>
             <div className='my-2 py-2'><p className='text-white text-lg'>Call any time <br/> <a href="tel:+123456789" className='text-[#b5b5b5] hover:text-red-500'>+1 (234) 567-89</a></p></div>
           </div>

      </div> */}
      <hr/>



      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full  lg:w-[95%] gap-4 mx-auto'>
        <div className='mb-6 pb-5 ml-14'>
            <div className='flex py-3 mt-5'>
              {/* <Icon icon="zondicons:location" width='30px' style={{color:"#06D889"}} /> */}
              <h1 className='font-semibold text-2xl'>What is MahlunShop?</h1>
              </div>
                <p className="text-[#b5b5b5]">MahlunShop is an Online Shopping Mall in Bangladesh.
                     We deliver various types of Unique & Quality products all over Bangladesh.</p>
 

              <div className='mt- '>
                <h1 className='font-semibold text-xl py-2'>See Our New updates</h1>
                <div className='flex gap-3'>
                  <button className='text-white'><Icon icon="logos:facebook" width='27px'/></button>
                  <button className='text-white'><Icon icon="skill-icons:instagram" width='27px'/></button>
                  <button className='text-white'><Icon icon="logos:youtube-icon" width='33px'/></button>
                  <button className='text-white'><Icon icon="skill-icons:twitter" width='27px'/></button>
                </div>
              </div>
        </div>



        <div className='ml-14 md:ml-0 text-[#b5b5b5]'>
            <h1 className=' text-2xl text-black font-semibold pt-8'>Useful links</h1>
            <a href='dvb' className='hover:text-red-500 pt-4 flex py-1'>Renew Subscription</a>
            <a href='jiuds' className='hover:text-red-500 flex py-1'>Product Request</a>
            <a href='lknv' className='hover:text-red-500 flex py-1'>Renew Cupon</a>
            <a href='ofv' className='hover:text-red-500 flex py-1'>Super sale</a>
        </div>




        <div className=' ml-14 text-[#b5b5b5]'>
          <h1 className=' text-2xl text-black font-semibold pt-8 '>Importants</h1>
            <a href='jiuds' className='hover:text-red-500 flex py-1'>Case Study</a>
            <NavLink to="/liveChat" className='hover:text-red-500 flex py-1'>Live chat</NavLink>
            <a href='ofv' className='hover:text-red-500 flex py-1'>Our Team</a>
            <NavLink to="/privacypolicy" className='hover:text-red-500 flex py-1'>Privacy Policy</NavLink>
            {/* <NavLink className='hover:text-red-500 flex py-1'>Terms & Condition</NavLink> */}
        </div>


       
        <div className='ml-14 md:ml-0'>
          <h1 className=' text-2xl font-semibold pt-8'>Offer Box</h1><br/>
          <h1 className='text-sm'>Use coupon NEWDAY <br/>Get 15/- Discount!</h1>
        </div>
       

      </div>
      <hr/>
      <div className=' w-full md:w-[90%] lg:w-[70%] gap-4 mx-auto'>
        <div><h1 className='py-5 font-semibold text-center'>©Copyright 2023 E-Commerce Limited | Design and Devolop By Qubic Technology Limited</h1></div>
        <div>
          
        </div>
      </div>

    </div>
  )
}

export default Footer
