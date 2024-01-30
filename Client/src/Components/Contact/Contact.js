import { Icon } from '@iconify/react'


const Contact = () => {



  return (
    <div>


      <div>
        <iframe className='h-[250px] md:h-[350px] lg:h-[500px] w-full' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Uttara%20Dhaka%201230+(Adust%20Alumni)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.maps.ie/population/">Population mapping</a>
        </iframe>
      </div>



      <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-5'>Reach out to us</h1>
      <div className='grid grid-cols-12 gap-4 w-[60%] mx-auto my-10 text-lg font-semibold'>

        {/* Location */}
        <div className='grid col-span-12 md:col-span-4 bg-[#F4F5F6] rounded-md shadow-lg hover:bg-white border'>
          <div className='p-6 rounded'>
            <Icon width="50px" icon="f7:location-fill" className='mx-auto' />
            <h1 className='text-center'>Uttara Sector #15 khantec Dhaka 1230</h1>
          </div>
        </div>

        {/* Mail */}
        <div className='grid col-span-12 md:col-span-4 bg-[#F4F5F6] rounded-md shadow-lg hover:bg-white border'>
          <div className='p-6 rounded'>
            <Icon width="50px" icon="ic:round-mail" className='mx-auto' />
            <h1 className='text-center'>adustalumnai@gmail.com</h1>
            <h1 className='flex items-center justify-center'>Send Mail <Icon className='mt-1 ml-1' icon="fa6-solid:arrow-right-long" /></h1>
          </div>
        </div>

        {/* Call */}
        <div className='grid col-span-12 md:col-span-4 bg-[#F4F5F6] rounded-md shadow-lg hover:bg-white border'>
          <div className='p-6 rounded'>
            <Icon width="50px" icon="subway:call" className='mx-auto' />
            <h1 className='text-center'>123456789</h1>
            <h1 className='text-center'>123456789</h1>
            <h1 className='flex items-center justify-center'>Contact Now <Icon className='mt-1 ml-1' icon="fa6-solid:arrow-right-long" /></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
