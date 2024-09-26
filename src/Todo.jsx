import TodoItem from "./Todoitem";
import {useState} from "react";

function Todo() {
    const [tasks, setTasks] = useState( [
        {id:1,name:"Task 1", completed:false},
        //  {id:2, name:"Task 2", completed:false},
        // {id:3, name:"Task 3", completed:false},
        // {id:4, name:"Task 4", completed:false},
       
    ]);
const [task, setTask] = useState("");
const handleInputChange = (event)=>{
    setTask(event.target.value)
};


const handleClick = () => {
    const newTasks = [...tasks, {name:task}];
    setTasks(newTasks);
    setTask("");
}

const completeTask = (id)=>{
//    console.log(id);
   //loop over list of task (map)
   const newTasks=tasks.map(task => {
    if(task.id == id){
        return{
            ...task,
            completed:true
        }
    }
    return task;

   });
   setTasks(newTasks);
}
    return <div>
        <h1>To-do App</h1>
        <div>
            <input type="text" value={task} onChange={handleInputChange} />
            <button onClick = {handleClick}>Save</button>
        </div>
        <div>
            <h2>Tasks</h2>
            {/* helps over to look over array of object */}
            <ul>
            {
                tasks.map((task, index ) => {
                    return <TodoItem key = {index} task = {task} completeTask={completeTask} />
                })
            }
            
                {/* <TodoItem name={"Task 1"} />
                <TodoItem name={"Task 2"} />
                <TodoItem name={"Task 3"} /> */}
            </ul>
            {
                tasks.length === 0 && <div> No tasks available.</div>
            }
        </div>
    </div>
}
export default Todo;