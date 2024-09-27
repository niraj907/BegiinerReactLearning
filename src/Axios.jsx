import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Axios() {
const [store , setStore] = useState();
  const getData = async()=>{
      // axios.get("https://jsonplaceholder.typicode.com/users")
      // .then((res)=>{
        //     console.log(res.data);
        // }).catch((err)=>{
            //     console.log("Error fetch Data",err);
            // })
            
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/user");
            const jsonData = await response.json(); // converting json data
            console.log(jsonData);
        } catch (error) {
            console.log("Error fetch Data",error);
        }
           

 
}

useEffect(()=>{
getData();
},[])

    return (
    <div>
      <h1></h1>
    </div>
  )
}
