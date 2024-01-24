import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import EventRegis from './EventRegis';
// import gift1 from '../Home/Image1/gift1.jpg'

const EventRegis = () => {
    // const name="Mehedi-hasan";

    // const [gpay, setGpay]=useState(false);
    // const [money, setMoney]=useState("");
    // const [name1, setName1] = useState('');
    // const [password1, setPassword1] = useState('');
    const goToPayment=useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [errorphone, setErrorPhone] = useState('');


    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
      };

      const validateInputEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          setErrorMessage('Invalid input');
        } else {
          setErrorMessage('');
        }
      };

      const handleEmailChange = (e) => {
        const value = e.target.value;
        validateInputEmail(value);
        setEmail(value);
      };

      const handlePhoneChange = (e) => {
        const value = e.target.value;
        if(value.length<11){
          setErrorPhone("Invalid phone Number");
        }
        else{
          setErrorPhone("");
        }
        setPhone(value);
      };
      
      const handleAddressChange = (e) => {
        const value = e.target.value;
        setAddress(value);
      };




 
    const handleSubmit = (data)=>{
      goToPayment("/vote");
      // fetch("http://localhost:3000/regis",{
      //   method:"post",
      //   headers:{"content-type":"application/json"},
      //   body:JSON.stringify(data),
      // })
      // .then((res)=>res.json())
      // .then((result)=>{
      //   window.location.replace(result.url)
      //   console.log(result);
      // })
    }
  


  return (
    <div>
      <div className='m-auto w-[100%] h-[100%]' >
       <div>

      
          <h2 className='text-center text-2xl text-gray-700 mb-6 font-semibold'>Invest in yourself and take your photography to the next level. Get all-access to contests and premium tutorials, <br/>
            enjoy unlimited photo storage, sell more photos with your website and more.
          </h2>
    

  

        <div className='mx-auto my-5 rounded col-span-12 md:col-span-6  border-[1px] border-red-500 md:w-[50%]'>
        <h1 className='text-center text-red-500 font-bold my-10 text-3xl'>Registration Form</h1>
   <div className='m-auto w-[250px] my-2'>
     <label className="font-bold mb-4">Full Name</label>
      <input type='text' 
      placeholder='Your Full name' 
      value={name}
      className='border border-black w-[250px] p-2 my-2 block rounded-md h-[35px]'
      name='fullname'
      id='fullname'
      required  
      onChange={handleNameChange}
      />
  </div>
  <div className='m-auto w-[250px] my-2'>
      <label className="font-bold">Your Email</label>
      <input type='Email'
      className='border border-black w-[250px] block p-2 my-2 rounded-md h-[35px]'
       value={email}
       placeholder='Your Email addres'
       name='email'
       id='email'
       required  
       onChange={handleEmailChange}
       />
       {
          errorMessage && <span className='text-red-400 text-center'>{errorMessage}</span> 
        }
        </div>
        <div className='m-auto w-[250px] my-2'>
       <label className="font-bold">Phone Number</label>
       <input type='phone' 
       placeholder='Your Phone number'
       className='border border-black w-[250px] block  p-2 my-2 rounded-md h-[35px]'
       name='phone'
       id='phone'
       required  
       onChange={handlePhoneChange}
       />
              {
          errorphone && <span className='text-red-400 text-center'>{errorphone}</span> 
        }
        </div>
        <div className='m-auto w-[250px] my-2'>
      <label className="font-bold">Your Address</label>
       <input type='address'
       placeholder='Your Address'
       className='border border-black focus:border-red-500 w-[250px] block p-2 my-2  rounded-md h-[35px]'
       name='address'
       id='address'
       required  
       onChange={handleAddressChange}
       />
     </div>
     <div className='m-auto w-[250px]'>
      <button className='rounded block font-bold w-[250px] bg-red-500 text-white mx-auto my-6 h-[35px]' onClick={handleSubmit}>Submit</button>
     </div>
       </div>
       </div>
       </div>
       </div>
     
  )
      }

export default EventRegis;
