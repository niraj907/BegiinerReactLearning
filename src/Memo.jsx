import { useMemo, useState } from "react"


export default function Memo() {

const [add,setAdd] = useState(0);
const [click,setClick] = useState(false)
function addition(){
    setAdd(add+1);
}

function count(add){
    console.log("Function calling ",add);
    for(let i=0; i<=1000000000; i++){};
    return add;
}
let number = useMemo(()=>{
   return count(add);

},[add])


  return (
    <>
      <div>
        <button style={{border: "2px solid red", color: "red", padding: "4px" , fontSize: "1rem"}} onClick={addition}>Addition</button>
        <h1>Count: {number}</h1>
        <button onClick={()=>setClick(!click)}>Please Click</button>
        <h1>{click? "You clicked": "Pleases click"}</h1>
      </div>
    </>
  )
}
