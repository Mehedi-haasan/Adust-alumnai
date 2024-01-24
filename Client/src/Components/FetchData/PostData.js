import React,{useState} from 'react'
import axios from 'axios';

const PostData = () => {
    const data={Fname:"", Lname:""};
    const [inputData, setInputData]=useState(data);

    const handleChangeData = (e) =>{
        setInputData({...setInputData, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
      e.prevenDefault();
      axios.post("url",inputData)
      .then((response)=>{
        console.log(response)
      })
    }
    
  return (
    <div>
      <input type='text' name='Fname' value={inputData.Fname} onChange={handleChangeData}/>
      <input type='text' name='Lname' value={inputData.Lname} onChange={handleChangeData}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default PostData
