import  { useState } from 'react';

export default function Event() {
    const [bg , setBg] = useState("orange");
    const [text , setText] = useState("Click Here")

        function changeColor(){
setBg("green");
setText("Changed!!");
        }

function changeAgain(){
 setBg("orange");  
 setText("Click Here");
}

  return (
    <>
        <div style={{  textAlign : "center", background :  bg, height : "100vh"}}>
        <button onClick={changeColor} onDoubleClick={changeAgain} style={{border : "2px solid  white" , padding : "0.5rem 1.6rem",  fontSize : "1.5rem",color:"white", margin : "17rem auto" , background : "black"}} > {text} </button> 
        </div>
    </>
  )
}
