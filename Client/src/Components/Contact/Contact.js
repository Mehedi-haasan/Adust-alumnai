import React,{useState} from 'react'

const Contact = () => {
   const [name, setName]=useState("");
   const [email, setEmail]=useState("");
   const [text, setText]=useState("");
   const [errorMessage, setErrorMessage] = useState('');

  const Email="Email";

  const handleNameChange = (e) =>{
      setName(e.target.value);
  }
  const validateInputEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setErrorMessage('Invalid input');
    } else {
      setErrorMessage('');
    }
  };
  const handleEmailChange = (e) =>{
       setEmail(e.target.value);
       validateInputEmail(e.target.value);
  }
  const handleTextChange = (e) =>{
   setText(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
   console.log(name,email,text);
  }
  return (
    <div className=' bg-[#A2E5E9]'>
      <h1 className='text-center text-4xl mb-4'>Contact us</h1>
      <p className='text-xl text-center my-4'>We are here to help! Send us your query via the form below or send 
      <br/>us an email at ({Email}) for any issue you are facing.</p>
 
    <div className='grid md:grid-cols-2 md:w-[40%] m-auto mb-4 '>
      <div style={{
        backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkP7mRboB0j-GNuhfzwnKMVEW7nvFTuUmsQ&usqp=CAU)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width:"100%",
        margin:"auto",
        height:"60vh",
        // marginRight:"5px",
      
       }} className='my-4 bg-[#5FC3CA] rounded-l'>
        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujrP_ZCHBvo2aZZzVwe_wtwNAO1GaTON9AA&usqp=CAU' alt='image' className='w-[100%] h-[100%]'/> */}
      </div>
     
      <div className='bg-[#FFFFFF] rounded-r' >
      <div className='mx-auto'>
         <form action='submit' className='m-auto'>
         <input type='name' placeholder='Name' className='border-2 rounded mt-4 mb-2 w-[250px] ml-4' onChange={handleNameChange}/>
         <br/>
        <input type='email' placeholder='Email Address' name='email' className='border-2 rounded my-2 ml-4 w-[250px]' onChange={handleEmailChange}/>
        {
          errorMessage && <span className='text-red-400 ml-4'>{errorMessage}</span> 
        }
        <br/>
        <textarea type='textarea' placeholder='Type your message here' className='border-2 rounded ml-4 h-[150px] w-[350px] my-2' onChange={handleTextChange}/>
        <br/>
        <button type='submit' className='btn rounded block m-auto' onClick={handleSubmit}>Submit</button>
         </form>
   
      </div>
      </div>
    </div>
    <div className='h-5'>

    </div>
    </div>
  )
}

export default Contact
