import axios from "axios";
import { useState } from "react";


export default function AxiosPost() {
const data = {
fname: "",
lname : ""
};

const [inputData , setInputData] = useState(data);

    const handleInput =()=>{
        console.log(event.target.value);
        setInputData({...inputData,[event.target.name]:event.target.value});
    }

    console.log(inputData);

    const handleForm =(event)=>{
    event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
    .then((res)=>{
    console.log(res);
    alert("Form submitted successfully!");
    
    }).catch((err)=>{
    console.log(err); 
    alert("An error occurred while submitting the form.");
    });
    
}

const handleUpdate =(e)=>{
    e.preventDefault();
    axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
.then((res)=>{
console.log(res);
alert("Update sucessful!");

}).catch((err)=>{
console.log(err); 
alert("An error in the update code.");
});

}
const handleDelete =(e)=>{
    e.preventDefault();
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
.then((res)=>{
console.log('delete',res);
alert("delete sucessful!");

}).catch((err)=>{
console.log(err); 
alert("An error in the delete code.");
});

}



  return (
    <div>
      <form onSubmit={handleForm}>
<label htmlFor="fname">FirstName: </label> <br />
<input type="text" placeholder='enter the first name' name ='fname' onChange={handleInput} /> <br /> <br />
<label htmlFor="lname">LastName: </label> <br />
<input type="text" placeholder='enter the last name' name ='lname' onChange={handleInput} /> <br /> <br />


<button >Submit</button>
<button onClick={handleUpdate}>Update</button>
<button onClick={handleDelete}>Delete</button>

      </form>
    </div>
  )
}
