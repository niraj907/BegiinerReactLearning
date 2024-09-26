// import  { useState } from 'react';

// export default function Hook() {
// const [count , setCount] = useState(0) // count current state speed change  and setCount update state , initial value is 0 

// function increase() {
//     setCount(count + 1);
    
//   }

// function decrease() {
//     setCount(count - 1);
//   }
  
//   return (
//     <>
//       <div className='Box' style={{textAlign:"center", margin:"5rem auto",fontSize:"2.5rem"}}>
//       <p>You clicked <span style={{color:"orange"}}>{count}</span> times</p>
//       <button style={{fontSize:"1.4rem" }} onClick={increase}>Increase</button>
//       <button style={{fontSize:"1.4rem" , marginLeft:"1rem"}} onClick={decrease}>Decrease</button>

//       </div>
//     </>
//   )
// }





import  { useEffect, useState } from 'react';

export default function Hook() {
const [count , setCount] = useState(0) // count current state speed change  and setCount update state , initial value is 0 
//const [hasIncreased, setHasIncreased] = useState(false); // Track if "Increase" has been clicked
const [data , setData] = useState('CODE')

function increase() {
    setCount(count + 1);
    //setHasIncreased(true);   // Set to true once "Increase" is clicked
  }

function decrease() {
    // if(!hasIncreased){
    //     alert('Please increase first before decreasing.');
    // } else {
    //   setCount(count - 1);
    // }

    if(count == 0){
      alert('O Not be Decrease...')
    }else{
      setCount(count - 1);
    }

    }
  
useEffect(()=>{
  //console.log('Running useEffect()');
  alert('Running useEffect');
},[data])


function change(){
  setData("Code with NC")
}

  return (
    <>
        <h1>{data}</h1>
        <div className='Box' style={{textAlign:"center", margin:"5rem auto",fontSize:"2.5rem"}}>
        <p>You clicked <span style={{color:"orange"}}>{count}</span> times</p>
        <button style={{fontSize:"1.4rem" }} onClick={increase}>Increase</button>
        <button style={{fontSize:"1.4rem" , marginLeft:"1rem"}} onClick={decrease}>Decrease</button>
        <button  style={{fontSize:"1.4rem"  }} onClick={change}>change</button>
        </div>
    </>
  )
}




