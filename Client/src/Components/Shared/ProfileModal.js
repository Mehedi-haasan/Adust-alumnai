import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const ProfileModal = ({ userInfo, data, isOpen }) => {
    // const [open, setOpen] = useState(false)

    return (
        <div>
            {
                userInfo ? <div className='flex shadow bg-white rounded-md p-2'>
                    <img alt='qwer' className='h-8 ml-1 w-8 mr-1 rounded-full' src={data.image_url} />
                    <NavLink to='/profile' onClick={() => { isOpen(false) }} className="font-semibold text-black p-1">{data.first_name} {data.last_name}</NavLink>
                </div> : <span />
            }
            <ul className='pt-3'>
                <li className='hover:translate-x-1 duration-300 flex'><Icon className='mt-1' icon="bytesize:settings"/><NavLink onClick={() => { isOpen(false) }}  className='font-semibold text-black px-1 '>Setting</NavLink></li>
                <li className='hover:translate-x-1 duration-300 flex'><Icon className='mt-1' icon="ic:round-help"/><NavLink onClick={() => { isOpen(false) }}  className='font-semibold text-black px-1 '>Help</NavLink></li>
                <li className='hover:translate-x-1 duration-300 flex'><Icon className='mt-1' icon="ri:logout-circle-r-line"/><NavLink onClick={() => { isOpen(false) }} to="/login" className='font-semibold px-1 text-black '>Log out</NavLink></li>
                
            </ul>
        </div>
    )
}

export default ProfileModal
