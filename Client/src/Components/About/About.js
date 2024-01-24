import React from 'react'

const About = () => {
  return (
    <div>

      <div style={{
             backgroundImage: `url(https://metricool.com/wp-content/uploads/jason-blackeye-364785-2.jpg)`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             height: '50vh',
             width: '100%',
      }} className=''>
       <h1 className="text-5xl font-extrabold text-center text-white absolute top-[30%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 ml-[18%] ">About Us</h1>
      </div>
      <div className='w-[60%] m-auto my-4 text-lg'>
      <p className='text-center'>We have experienced professionals who will look after your need for the website design and provide you with a customized design according to your wish. We give high-quality website design at a low cost. We know how it is done, so, you don’t have to worry about the work, you will get more than you expect. We are in this business for a long time now and this is the reason that we stand tall as the best website designing company.</p>
      </div>
       <div className='grid grid-cols-3 w-[60%] mx-auto my-4 gap-8'>
           <div>
             <h1 className='md:text-5xl font-semibold my-4'>About Us</h1>
             <h1>Web solutions that build your business Brand</h1>
           </div>
            <div>
               <h1 className='md:text-4xl font-semibold my-4'>Our Mission</h1>
               <p>Since we started our organization with a small team, we visualize all organizations as the same. We do not believe in underestimating any business regardless of its size or share capital.</p>
            </div>
            <div>
              <h1 className='md:text-4xl font-semibold my-4'>Our Vision</h1>
              <p>In today’s trend of virtual presence and everything digital, every organization strives to be at the top in the market.</p>
            </div>

       </div>
       <div className='grid grid-cols-2 w-[60%] mx-auto my-8 gap-8'>
        <div className='mt-16'>
          <h1 className='text-4xl my-4 font-bold'>We Make Smart, Good-Looking Things</h1>
          <p className='my-4'>Secure a free site analysis with our digital marketing services helping the trades generate more leads and sales, increasing your website’s usability.</p>
          <p className='my-4'>f you are looking for the best website designing company?  Have your offline business and planning for online? Then, You are at the right place where you’re online needs are complete here in your budget with on-time delivery and unique design & development of your website. Our team focuses on your project and make a blueprint of the website then after your approval we start the development.</p>
          <button className='border-[1px] rounded bg-gray-200'>Read more</button>
        </div>
        <div style={{
          backgroundImage:`url(https://i0.wp.com/webglows.online/wp-content/uploads/2023/03/pexels-antoni-shkraba-5466249-copy.jpg?fit=640%2C720&ssl=1)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '80vh',
          width: '100%',
        }}>
          {/* <img src='' alt='img' /> */}
        </div>

       </div>
    </div>
  )
}

export default About
