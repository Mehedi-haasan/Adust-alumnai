import React from 'react'
import axios from 'axios';

const DeleteData = () => {
    const handleDelete = (e) =>{
        e.prevenDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
          console.log(response)
        })
      }
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteData
