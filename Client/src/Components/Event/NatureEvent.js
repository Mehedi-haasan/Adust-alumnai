import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {v4 as uuidv4} from "uuid";


const url="https://restcountries.com/v3.1/all";
const Url="https://jsonplaceholder.typicode.com/users";


const NatureEvent = () => {
  const [natureEvent, setNatureEvent]=useState([]);
  const Natures=[
    {
      id : 12,
      Name : "King",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoS0xt_btcKOJcV9o7d8BkiPQ5OVZB4UT_w&usqp=CAU",
    },
    {
      id : 22,
      Name : "Cheetah",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSde8KRWZMlhAiSFxISDJMdSFHMoLOL1FGjllH3fegjOg5TWpma1c_K7FgEPgG6IRg8xL8&usqp=CAU",
    },
    {
      id : 32,
      Name : "Sunset",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZe6qup69LAnFE38yaYaPUcWovdzBMFobVg&usqp=CAU",
    },
    {
      id : 42,
      Name : "Zebra",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQfEiuOtUVdhk5sjHEarGYYvocnxfkxbaog&usqp=CAU",
    },
    {
      id : 52,
      Name : "Bear",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQesF01dVz7hkHCTAozUU_moBLhdQZDoCSw&usqp=CAU",
    },
  ]
  
  const fetchData=async(url)=>{
    // const response = await fetch(url);
    // const data = await response.json();
    // setWildEvent(data);
    // setCultureEvent(data);
  }
  const fetchNature=async(Url)=>{
    const response = await fetch(Url);
    const natureEvent = await response.json();
    setNatureEvent(natureEvent);
  }
  
  useEffect(()=>{
    fetchData(url);
    fetchNature(Url);
  });


  return (
    <div className='my-8 w-[80%] m-auto'>
      <h1 className='text-center text-4xl my-5'>Nature Event</h1>
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
   Natures.map((nature)=>{
     return(
   <SwiperSlide style={{
    backgroundImage:`url(${nature.image})`,
    height:"300px",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    }} className="z-0 h-[250px] rounded" key={uuidv4()}>
     <h1 className='text-center text-white mt-[150px]'>Name : {nature.Name}</h1>
     <p className='text-center text-white'>Crad opration</p>
     <NavLink className='block m-auto btn text-center rounded' to='/contestrules'>See more</NavLink>
   </SwiperSlide>
     )
  })
 }
</Swiper>
    </div>
  )
}

export default NatureEvent
