import React, { useEffect, useState } from 'react'
import styles from '../FetchData/ProgressBar.module.css'

const ProgressBar = () => {

       const [count, setCount]=useState(0);
       const endValue=90;
       const speed=10;



    useEffect(() => {

        setTimeout(() => {

          if(count === endValue){
            setCount(count)
          }
          else{
            setCount((count) => count + 1);
          }
          console.log(count);
        }, speed);

      });


      // const colour={
      //   background: `conic-gradient(#7d2ae8 3.6deg, #ededed 0deg)`
      // }
 
        const myStyle={
          background: `conic-gradient(#7d2ae8 ${count *3.6}deg, #ededed 0deg)`
        }    


  return (
    <div className='flex h-[500px] items-center justify-center bg-[#7d2a7d]'>
      <div className="flex w-[420px] items-center justify-center py-5 rounded-lg flex-col bg-[#FFF] gap-y-4">
        <div id={styles.circular_progress} style={myStyle}>
            <span className='relative text-4xl font-semibold'>{count}%</span>
        </div>

        <span className='text-2xl'>HTML</span>
      </div>
    </div>
  )
}

export default ProgressBar
