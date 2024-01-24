import React, { useState } from 'react'

const Slider2 = () => {
    const [currentIndex, setCurrentIndex]=useState(0);
    const culture=[
        {
          url : "https://thumbs.dreamstime.com/z/hazy-view-blue-ridge-mountains-virginia-usa-hazy-view-blue-ridge-mountains-overlook-blue-ridge-124738886.jpg",
        },
        {
          url : "https://thumbs.dreamstime.com/b/rainbow-butterfly-colorful-wings-colored-all-colors-vibgyor-very-attractive-placed-black-white-30774133.jpg",
        },
        {
          url : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        },
        {
         url : "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
        },
        {
          url : "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
        },
      ]
      const leftSlider = () =>{
        setCurrentIndex(currentIndex-1);
        if(currentIndex === 0){
           setCurrentIndex(culture.length-1);
        }
        
      }

      const rightSlider = () =>{
        setCurrentIndex(currentIndex+1);
        if(currentIndex===culture.length-1){
          setCurrentIndex(0);
       }
       
      }
      console.log(culture.length);
  return (
    <div className=' h-[900px] w-full m-auto p-4 relative group'>
      <div style={{backgroundImage:`url(${culture[currentIndex].url})`}} className='z-0 w-full h-full rounded-2xl bg-center bg-cover duration-100'>
        
          {/* Left arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <button onClick={leftSlider} >left</button>
          </div>
          {/* Right arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
             <button onClick={rightSlider} >right</button>
          </div>
      </div>
    </div>
  )
}

export default Slider2
