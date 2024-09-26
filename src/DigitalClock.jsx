import  { useState } from 'react';

export default function DigitalClock() {
    const curTime = new Date().toLocaleTimeString();
    const [time , setTime] = useState(curTime) // useState is a inital state now curTime is inital state and time current state is a curTime
  // setTime update state

    function update(){
        const curTime = new Date().toLocaleTimeString();
        setTime(curTime)
    }
setInterval(()=>{
update();
},1000)
    return (
    <>
      <div style={{textAlign: "center", margin:"10rem auto", fontSize : "1.8rem" , fontFamily: "Roboto , sans-serif"}}> 
        <h1 style={{color: "blue"}}>Digital Clock</h1>
        <p>{time}</p>
      </div>
    </>
  )
}
