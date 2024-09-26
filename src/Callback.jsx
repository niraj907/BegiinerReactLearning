import { useCallback, useState } from "react";
import Call2 from "./Call2";

export default function Callback() {
    const [add, setAdd] = useState(0);
    const [data,setData] = useState([]);

    const todos = useCallback(()=>{
      setData((per)=>[...per,"New Todo"]);
    },[data])
  return (
    <>
     <Call2 todo={todos} data = {data}/> 
     <button onClick={()=>setAdd(add+1)}>Additon</button>
     <h1>{add}</h1>
    </>
  )
}
