// import React,{useState} from 'react'
// import { Icon } from "@iconify/react";
// // import axios from 'axios';
// import { NavLink,Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
//   const goToHomePage=useNavigate();

// // import {  useFormik } from 'formik';
// // import * as yup  from 'yup';

// export default function Registration() {
//   const goToHomePage=useNavigate();
//   const [email, setEmail] = useState('');
//   const [errorEmail, setErrorEmail] = useState('');
//   const [fullname, setFullName] = useState('');
//   const [errorfullname, setErrorFullName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorPassword, setErrorPassword] = useState('');
//   // const [inputData, setInputData]=useState("");

//   const validateInputEmail = (value) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (value && !emailRegex.test(value)) {
//       setErrorEmail('Invalid input');
//     } else {
//       setErrorEmail('');
//     }
//   };

//   const validateInputFullname = (value) =>{
//     if(value.length<3){
//       setErrorPassword("Wrong password");
//     }
//     else{
//       setErrorPassword("");
//     }
//   }

//   const validateInputPassword = (value) =>{
//     if(value.length<6){
//       setErrorPassword("Wrong password");
//     }
//     else{
//       setErrorPassword("");
//     }
//   }

//   const handleEmailChange = (e) => {
//     const email = e.target.value;
//     setEmail(email);
//     validateInputEmail(email);
//   };

//   const handleFullNameChange = (e) => {
//     const fullname = e.target.value;
//     setFullName(fullname);
//     validateInputFullname(fullname);
//   };
  
//   const handlePasswordChange = (event) => {
//     const newPassword = event.target.value;
//     validateInputPassword(newPassword);
//     setPassword(newPassword);
//   };

  

//     const handleSubmit = (e) =>{
//       e.preventDefault();  
//       // axios.post("url",inputData)
//       // .then((response)=>{
//       //   console.log(response)
//       // })
    
//      goToHomePage("/home");
//     }
//     const handleGoogle = () =>{

//     }
//     const handleFacebook = () =>{
      
//     }
//     const handleInsta = () =>{
  
//     }
//     const handleTiktok = () =>{
      
//     }

// //   const fetchData =async (url) =>{
// //     const response = await fetchData(url);
// //     const data = await response.json();
// //     setAllData(data);
// // }

// // useEffect(()=>{
// //     fetchData(url);
// // })


//     // const formik=useFormik({
//     //     initialValues : {
//     //       email:"",
//     //       password:"",
//     //       fullname:"",
//     //     },
//     //     validationSchema:yup.object({
//     //       email:yup.string().email().required(),
//     //       fullname:yup.string().min(3,"must have atleast 3").required(),
//     //       password:yup.string().min(6, "password must have atleast 6").required(),
//     //     }),
//     //     onSubmit:(values, {resetForm})=>{
//     //       console.log(values)
//     //       resetForm({values:""});
//     //       goToHomePage("/home");
//     //     }
//       // }) 
//   return (
//       <div  style={{
//         backgroundImage: `url(https://metricool.com/wp-content/uploads/jason-blackeye-364785-2.jpg)`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         height: '80vh',
//         width: '100%',
//       }}
//      >
//       <div className='h-[100px]'>

//       </div>


//       <div className='w-[350px] bg-gray-400 m-auto py-4 rounded'>
//       <form action='submit'>
//         <h1 className='text-center py-8 font-bold text-3xl text-white'>Registration Here</h1>  

//         <input className='m-auto w-[220px] block rounded '
//          type='userName/email'
//          placeholder='Enter your email'
//          required
//          value={email} 
//          name='email'
//          id='email' 
//          onChange={handleEmailChange}
//          />
//          {
//           errorEmail && <span className='text-red-400 ml-[85px]'>{errorEmail}</span>
//          }
          

//         <input className='m-auto w-[220px] block rounded my-2' 
//           type='text'
//           placeholder='Full Name' 
//           onChange={handleFullNameChange}
//           required
//           value={fullname} 
//           name='fullname' 
//           id='fullname'
//         />
//          {
//           errorfullname && <span className='text-red-400 ml-[85px]'>{errorfullname}</span>
//          }
//         <input className='m-auto block w-[220px] rounded my-2' 
//         type='password' 
//         required 
//         name='password' 
//         id='password' 
//         placeholder='Password' 
//         value={password}
//         onChange={handlePasswordChange}
//         />
//         {
//           errorPassword && <span className='text-red-400 ml-[85px]'>{errorPassword}</span>
//         }
        

//         <button type='submit' className='mx-auto mt-[20px] block font-semibold text-lg py-1 px-8 rounded w-[220px] bg-[#4CB5F9] text-white text-center'
//           onClick={handleSubmit}>Submit</button>

//       </form>
//       <div className="flex flex-col items-center">
//             <h1 className="my-2 text-white font-semibold">Or Register With</h1>
//             <div className="space-x-5">
//               <div className=" inline-block hover:translate-y-1 duration-300">
//                 <button>
//                   <Icon icon="logos:facebook" width="25px" onClick={handleFacebook}/>
//                 </button>
//               </div>
//               <div className=" inline-block hover:translate-y-1 duration-300">
//                 <button>
//                   <Icon icon="logos:google-icon" width="25px" onClick={handleGoogle}/>
//                 </button>
//               </div>
//               <div className="inline-block hover:translate-y-1 duration-300">
//                 <button>
//                   <Icon icon="skill-icons:instagram" width="25px" onClick={handleInsta}/>
//                 </button>
//               </div>
//               <div className=" inline-block hover:translate-y-1 duration-300">
//                 <button>
//                   <Icon icon="logos:tiktok-icon" width="25px" onClick={handleTiktok} />
//                 </button>
//               </div>
//             </div>
//           </div>
    

//     </div>
//     <div className='container h-[70px] w-[350px] m-auto  bg-gray-400 my-2 rounded'>
//          <h1 className='text-center p-7 text-white'>Have an account? <NavLink className='font-bold text-white' to="/">Log in</NavLink></h1>
//     </div>


//     </div>
   

//   )
// }
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
  

const Registration = () => {

  const data={Name:"",Email:"", Password:""};

  const [inputData, setInputData]=useState(data);

  const goToHomePage=useNavigate();

  const handleChange = (e) =>{
      setInputData({...setInputData, [e.target.name]:e.target.value})
  }
 const handleSubmit = ()=>{
  setInputData("");
  goToHomePage("/home");
 }

  return (
    <div
      className="w-full lg:w-2/4 mx-auto my-10 p-5 border rounded border-red-500"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="text-center text-3xl font-bold text-primary my-10">
        Register Here
      </h1>
      <div className="flex justify-center flex-col md:flex-row">
        <div className="mr-3">
       
        </div>
        <div className="ml-3 mt-5 md:mt-0">
       
          <form >
            <div className="my-2">
              <label className="font-bold">Your Name</label>
              <input
                type="text"
                className="w-full border focus:outline-none focus:border-red-500 p-2 my-2 rounded"
                onChange={handleChange}
                placeholder="Type Your Name"
                name='Name' 
                value={inputData.Name}
                required
              />
            </div>
            <div className="my-2">
              <label className="font-bold">Your Email</label>
              <input
                type="email"
                className="w-full border focus:outline-none focus:border-red-500 p-2 my-2 rounded"
                onChange={handleChange}
                placeholder="Type Your Email"
                name='Email' 
                value={inputData.Email}
                required
              />
            </div>

            <div className="my-2">
              <label className="font-bold">Your Password</label>
              <input
                type="password"
                className="w-full border focus:outline-none focus:border-red-500 p-2 my-2 rounded"
                onChange={handleChange}
                placeholder="Type Your Password"
                name='Password' value={inputData.Password}
                required
              />
            </div>
            <div>
              <button
                className="w-full text-center transition duration-500 hover:bg-[#333533] bg-red-500 text-white rounded font-semibold text-lg my-3 py-2"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
          <h1 className="text-center font-semibold">
            Already have an account?{" "}
            <Link to="/" className="text-red-500">
              Login
            </Link>
          </h1>
          <hr className="border-t-2 my-5" />
          <div className="flex flex-col items-center">
            <h1 className="mb-5 font-semibold">Or Register With</h1>
            <div className="space-x-5">
              <div className=" inline-block hover:translate-y-1 duration-300">
                <Link>
                  <Icon icon="logos:facebook" width="25px" />
                </Link>
              </div>
              <div className="inline-block hover:translate-y-1 duration-300">
                <Link>
                  <Icon icon="skill-icons:instagram" width="25px" />
                </Link>
              </div>
              <div className=" inline-block hover:translate-y-1 duration-300">
                <Link>
                  <Icon icon="logos:tiktok-icon" width="25px" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
