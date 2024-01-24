import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import ProgressBar from '../FetchData/ProgressBar';

const ContestRules = () => {
  const [register, setRegister]=useState(false);
  const [select, setSelect]=useState(false);
  const [judge, setJudge]=useState(false);
  const [inter, setInter]=useState(false);
  const [winner, setWinner]=useState(false);

  const handleSelect= ()=>{
    setSelect(!select);
  }
 
  const handleJudge = () =>{
    setJudge(!judge);
  }

  const handleInter = () =>{
    setInter(!inter);
  }

  const handleWinner = ()=>{
    setWinner(!winner);
  }

  return (
    <div className=' ml-4'>
      {/* <div style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZe6qup69LAnFE38yaYaPUcWovdzBMFobVg&usqp=CAU)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:"80vh",
      
      }}></div> */}
      <h1 className='text-center font-bold xs:text-xl md:text-3xl lg:text-5xl py-4'>Contest Rules</h1>
     
    <div>

    


    <div className='md:mx-4 rounded-lg '>
      <div className='bg-gray-100 rounded border'>
         <button onClick={handleSelect} className='px-2 py-2 block mx-auto md:text-2xl font-semibold my-2'>Basic submission guidelines for photographer #1</button>
       </div>
    { select &&
  
       <ol className='xs:text-xs md:text-sm p-2 border rounded'>
          <li>1. The contests are open for online submissions only, through the contest page available on betterphotography.in/contests</li>
          
          <li>2. Submissions will not be accepted once the deadline lapses.</li>
     
          <li>3. Photos submitted must be at least 640 pixels on the shorter side, and no more than 2000 pixels on the longer side. Images should be no larger than 2MB. Photos must be in JPEG format.</li>
        
          <li>4. You may submit as many entries per contest as you wish, unless specifically mentioned otherwise in the contest specific rules. However, you will be able to upload only one image at a time using the websites upload function.</li>
  
          <li>5. You are required to provide a unique title & description for each image submitted.</li>
         
          <li>6. All submitted photos must contain the original EXIF metadata information. However there must be no border(s), logo(s), copyright marks, identifying marks, or any other visible references and/or marks on the image.</li>
          <li>7. Basic editing, including colour enhancement, the use of filters, and cropping of the Photo(s) is acceptable, provided any such editing does not affect the authenticity and/or genuineness of the Photo(s).</li>
          <li>8. Every image uploaded is subject to a moderation process before it becomes visible on the contest page. Better Photography reserves the right to assess and disregard any submitted photo at our its discretion.</li>
        </ol>
         } 
        </div>


        <div className='md:mx-4 rounded-lg'>
          <div className='bg-gray-100 rounded border'>
          <button className='px-2 py-1 mx-auto block md:text-2xl font-semibold  my-2' onClick={handleJudge}>The Judging #2</button>
          </div>
          {
            judge && <ol className='xs:text-xs md:text-sm p-2 border rounded'>
            <li>1. Better Photography will appoint a judge / judges for each contest. This will comprise of members of the editorial team and / or external judges.</li>
            <li>2. The judging panel shall assess and determine the winning Photos. The results and the winners will be announced on the website.</li>
            <li>3. The decision of Better Photography’s judging panel will be final and binding on all Participants in respect to all matters relating to the Contest.</li>
            <li>4. Better Photography reserves the right to call for original JPEG or RAW files with unchanged EXIF for the purpose of authentication. An image maybe disregarded if this information cannot be provided.</li>
          </ol>
          }
        </div>

        <div className='md:mx-4 py-0 rounded-lg'>
          <div className='bg-gray-100 rounded border'>
          <button className='px-2 py-1 mx-auto block md:text-2xl font-semibold my-2' onClick={handleInter}>Intellectual property rights #3</button>
          </div>
        {
          inter && <ol className='xs:text-xs md:text-sm p-2 border rounded'>
          <li>1. Submitted photos must be original, created and/or taken by the contestant. It must
              not contain any materials owned or controlled by a third party for which you have not
              obtained a license, must not infringe the copyright, trademark, moral rights, rights of
              privacy/publicity or intellectual property rights of any person or entity and you shall
              indemnify and hold harmless NMCG from and against any claims relate</li>
          <li>2. NMCG respects photographers’ copyrights and copyrights shall remain vested with
              the creator of the image. Upon making the submission, you grant NMCG, a worldwide
              non-exclusive, royalty free, sub-licensable right and license to use, publish, reproduce,
              display, perform, adapt, create derivative works, distribute, have distributed, print, in
              whole or in part, in any form, in all media forms now or hereafter known to promote the
              contest, image, the photographer or for promotional or educative or any other use.</li>
        </ol>
        }
        </div>



        <div className='md:mx-4 '>
         <div className='bg-gray-100 rounded border'>
         <button className='px-2 py-1 mx-auto block md:text-2xl font-semibold my-2' onClick={handleWinner}>Winners #4</button>
         </div>
           {
            winner && <ol className='xs:text-xs md:text-sm p-2 border rounded'>
            <li>• Top 3 winners will get cash prize of 15000/-, 8000/- and 5000/-</li>
            <li>• 7 consolation prizes – 1500/-</li>
            <li>• All participates will receive e-certificate</li>
          </ol>
           }
        </div>
   </div>
      
       

        <div className='ml-4 my-4 flex'>
          <h2 className='text-center'>Do you want to join? </h2>
          {
             register ? <NavLink to='/uploadpicture' className='px-1 text-red-500 rounded font-bold'>Click here</NavLink>:<NavLink to='/eventregis' className='px-1 rounded text-red-500 font-bold'>Click here</NavLink>
          }
        </div>

        {/* <ProgressBar/> */}
     
    </div>
  )
}

export default ContestRules
