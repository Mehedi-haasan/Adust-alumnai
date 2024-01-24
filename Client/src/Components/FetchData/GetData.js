import React,{useState, useEffect} from 'react'
const url="vygabfucawbefc";

const GetData = () => {
    const [allData, setAllData]=useState([]);

    const fetchData =async (url) =>{
        const response = await fetchData(url);
        const data = await response.json();
        setAllData(data);
    }
    useEffect(()=>{
        fetchData(url);
    })
  return (
    <div>
        {
            allData.map((data)=>{
                return (
                    <div>
                        <h1>{}</h1>
                    </div>    
                )
                
            })
        }
      
    </div>
  )
}

export default GetData
