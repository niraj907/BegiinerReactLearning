import { useState } from "react"

export default function Forms() {
    const [fname , setFname] = useState("");
    const [lname , setLname] = useState("");
    const [show , setshow] = useState("");

    function getName(event){
// console.log(event.target.value);
if(event.target.name == "firstname"){
setFname(event.target.value);
    }

    if(event.target.name == "lastname"){
        setLname(event.target.value);
            }

        }

function submitBtn(e){
e.preventDefault();
setshow(fname +" " +  lname);
}
console.log(show);

  return (
    <div style={{width : "300px", margin : "12rem auto", fontSize : "1rem"}}>
<h1>{show} </h1>
<form onSubmit={submitBtn} style={{margin: "1rem 0rem", fontSize : "1.4rem"}}>
    <label htmlFor="">FirstName</label> <br />
    <input name="firstname" style= {{margin : "0.5rem 0rem"}} type="text" onChange={getName} value= {fname} placeholder="Enter the firstName" /> <br />
    <label htmlFor="">LastName</label> <br />
    <input  name="lastname" style= {{margin : "0.5rem 0rem"}} type="text" onChange={getName} value= {lname}   placeholder="Enter the lastName" />
<br />
<button type="submit">Submit</button>
</form>
    </div>
  )
}
