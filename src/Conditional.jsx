// function  AgeNum() {
//     let age =18;
//         if(age >= 18){
//         return (
            
// <div>
//     <h1>Eligible for Vote  age </h1> 
// </div>
//           )
//     }else{
//         return (
//             <div>
//              <h1>Not Eligible for Vote   age</h1> 
//             </div>
//           ) 
//     }

// } 




export default function Conditional() {
    // let age =18;
//     if(age >= 18){

//         return (
            
// <div>

//     <h1>Eligible for Vote  age </h1> 
// </div>
//           )
//     }else{
//         return (
//             <div>
//              <h1>Not Eligible for Vote   age</h1> 
//             </div>
//           ) 
//     }
 

// let result; // element variable
// if(age>=18){
//     result = <h1>You Can Vote</h1>
// }else{
//     result = <h1>You Cannot Vote</h1>
// }
// return(
//     <>
//     <div>
//         {result}
//     </div>
    
//     </>
// )


// component
// return(

//     <>
// <AgeNum/>
//     </>
// );



let age = 10;

return(
<>

{/* ternary oprator */}
<div>{ age>= 18? <h1>Eligible for vote</h1>: <h1>Not Eligible for vote</h1>} </div>

</>


)
}

