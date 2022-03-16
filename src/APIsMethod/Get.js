import React, { useState, useEffect} from 'react'
import axios from "axios"
function GetApiMethod() {

  const [appData, setappData] = useState([]);
    const getData = async ()=> {
      let result  = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
      console.log(result.data);
      setappData(result.data);
    }
    
    useEffect(()=>{
      getData();
    }, [])
  return (
    <>
     {
      appData && appData.length>=0 && appData.map((AllData)=>(
         <>
         <div className='row'>
           <ul>
             <li>{AllData.postId}</li>
             <li>{AllData.id}</li>
             <li>{AllData.name}</li>
             <li>{AllData.email}</li>
             <li>{AllData.body}</li>
           </ul>
         </div>
         </>
       ))
     }
    </>
  )
}
export default GetApiMethod;