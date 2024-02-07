import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const NotificationModal = ({ userInfo, data ,isOpen}) => {


    return (
        <div>
            <h1>Notifications</h1>
            {/* {
                data.map((user) => (
                    <NavLink className='flex px-1 py-1.5'>
                        <div><img className='h-[35px] w-[35px] rounded-full mr-2' src={data.user.image_url} alt='' /></div>
                        <div>
                            <h1 className='font-semibold'>{data.user.first_name} {data.user.last_name}</h1>
                            <h1 className=''>{data.comment}</h1>
                        </div>
                    </NavLink>
                ))
            } */}
        </div>
    )
}

export default NotificationModal
