import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const UploadPicture = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
    const goToHome=useNavigate();
    const handleFileChange = (event)=>{
      const files = event.target.files;
      setSelectedFiles([...selectedFiles, ...files]);
    }

    const handleUpload=()=>{
        goToHome('/home');
    }
  return (
    <div className='border-2 lg:w-[40%] md:w-[60%] md:h-[500px] m-auto mb-4 rounded-md bg-[#FFFFFF]'>
      <h1 className='text-center text-red-500 font-bold text-3xl my-4'>Select Your File</h1>
      <input type='file' multiple onChange={handleFileChange}  className='border w-[300px]  rounded block m-auto'/>
      <textarea type='text' placeholder='Write your Caption' className='border w-[300px] rounded m-auto block my-2 p-2'/>
      <button className='block m-auto mt-4 mb-5 rounded-md border w-[300px] bg-red-500 text-white h-[35px]' onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default UploadPicture
