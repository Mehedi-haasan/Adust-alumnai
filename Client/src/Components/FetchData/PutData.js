import React,{useState} from 'react'
import axios from 'axios';

// const url="https://jsonplaceholder.typicode.com/users";

const PostData = () => {
    
    const data={Fname:"", Lname:""};
    const [inputData, setInputData]=useState(data);

    const handleChangeData = (e) =>{
        setInputData({...setInputData, [e.target.name]:e.target.value})
    }
    const handleUpdate = (e) =>{
      e.prevenDefault();
      axios.put("https://jsonplaceholder.typicode.com/users/2",inputData)
      .then((response)=>{
        console.log(response)
      })
    }
  //   useEffect(()=>{
  //     fetchData(url);
  // })
  return (
    <div>
      <input type='text' name='Fname' value={inputData.Fname} onChange={handleChangeData}/>
      <input type='text' name='Lname' value={inputData.Lname} onChange={handleChangeData}/>
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default PostData
