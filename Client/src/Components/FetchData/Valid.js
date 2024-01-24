import React, { useState } from 'react';


const Valid = () => {
  // const [email, setEmail] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorPassword, setErrorPassword] = useState('');


  // const validateInputEmail = (value) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (value && !emailRegex.test(value)) {
  //     setErrorMessage('Invalid input');
  //   } else {
  //     setErrorMessage('');
  //   }
  // };

  // const validateInputPassword = (value) =>{
  //   if(value.length<6){
  //     setErrorPassword("Wrong password");
  //   }
  //   else{
  //     setErrorPassword("");
  //   }
  // }

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   setEmail(value);
  //   validateInputEmail(value);
  // };
  
  // const handlePasswordChange = (event) => {
  //   const newPassword = event.target.value;
  //   validateInputPassword(newPassword);
  //   setPassword(newPassword);
  // };


  //   const handleSubmit = (e) =>{
  //     e.preventDefault();
  //    console.log(email,password);
  //   }

        // const formik=useFormik({
    //     initialValues : {
    //       email:"",
    //       password:"",
    //       fullname:"",
    //     },
    //     validationSchema:yup.object({
    //       email:yup.string().email().required(),
    //       fullname:yup.string().min(3,"must have atleast 3").required(),
    //       password:yup.string().min(6, "password must have atleast 6").required(),
    //     }),
    //     onSubmit:(values, {resetForm})=>{
    //       console.log(values)
    //       resetForm({values:""});
    //       goToHomePage("/home");
    //     }
      // }) 

  return (
    <div className='block m-auto'>
     {/* <form action='submit'>
         <input className='block m-auto'
          type="text"
          placeholder='Email or phone number'
          value={email}
          onChange={handleInputChange}
         />
         <br/>
        <span className='text-red-400'>{errorMessage}</span> <br/>

        <input className='block m-auto'
          type="password"
          placeholder='password'
          value={password}
          onChange={handlePasswordChange}
         />
         <span className='text-red-400'>{errorPassword}</span> <br/>
        <button type='submit' className='btn m-auto block' onClick={handleSubmit}>Submit</button>
     </form> */}
     {/* <button className='btn block mx-auto my-2' onClick={handleRetrieveData}>Retrieve Data</button> */}
 
    </div>
  );
};

export default Valid;
