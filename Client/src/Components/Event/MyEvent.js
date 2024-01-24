import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {v4 as uuidv4} from "uuid";
// import "./styles.css";
import { Pagination} from "swiper";
// import gift1 from '../Home/Image1/gift1.jpg'
// import cover from '../Home/Image1/Cover.jpeg'
// import gift2 from '../Home/Image1/gift2.jpg'
// import gift3 from '../Home/Image1/gift3.jpg'

const MyEvent = () => {
  const WildLife=[
    {
      id : 31,
      catagori:"Mobile",
      Name : "King",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoS0xt_btcKOJcV9o7d8BkiPQ5OVZB4UT_w&usqp=CAU",
    },
    {
      id : 32,
      catagori:"Landscop",
      Name : "Cheetah",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSde8KRWZMlhAiSFxISDJMdSFHMoLOL1FGjllH3fegjOg5TWpma1c_K7FgEPgG6IRg8xL8&usqp=CAU",
    },
    {
      id : 33,
      catagori:"Portfolio",
      Name : "Sunset",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZe6qup69LAnFE38yaYaPUcWovdzBMFobVg&usqp=CAU",
    },
    {
      id : 34,
      catagori:"DSLR",
      Name : "Zebra",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQfEiuOtUVdhk5sjHEarGYYvocnxfkxbaog&usqp=CAU",
    },
    {
      id : 35,
      catagori:"Camera",
      Name : "Bear",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQesF01dVz7hkHCTAozUU_moBLhdQZDoCSw&usqp=CAU",
    },
  ]
  // style={{
  //   backgroundImage:`url(${nature.image})`,
  //   height:"300px",
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   }}

  return (
    <div>
      <h1 className='text-center text-red-500 font-semibold text-3xl md:text-5xl bold py-3 my-3'>My Contest</h1>
      <div className='my-5 md:w-[80%] mx-auto rounded'>
      <Swiper
 
 slidesPerView={3}
 spaceBetween={30}
 pagination={{
   clickable: true,
 }}
 modules={[Pagination]}
 className="mySwiper"
>
{
   WildLife.map((nature)=>{
    
     return(
   <SwiperSlide  className="z-0 h-[250px] rounded-md" key={uuidv4()}>
    <div className='border-[1px] rounded border-red-300 bg-[#F4F2F0] h-[389px]'>
      
      <div className='w-[100%] rounded-md'>
        <img src={nature.image} alt='img' className='h-72 w-[100%] p-2 rounded-md'/>
      </div>

      <div className='flex justify-between items-center px-2 py-5'>
        <h1 className='text-black text-2xl '>Name : {nature.Name}</h1>
        <h1>
          <span className="text-xl font-semibold mr-2 text-ash">Contest:</span>
          <span className="bg-red-400 px-4 py-1 rounded-full text-white">
            {nature.catagori}
          </span>
        </h1>
        {/* <NavLink className='block m-auto btn text-center rounded' >See more</NavLink> */}
      </div>

      </div>
  

   </SwiperSlide>
     )
  })
 }

</Swiper>
      </div>
    </div>
  )
}

export default MyEvent
