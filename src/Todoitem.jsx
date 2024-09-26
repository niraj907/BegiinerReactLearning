function TodoItem({task, completeTask}){
    console.log(task);
    return(
        <li>
            <div>
            {
                task.completed ? <CompletedItem name ={task.name} /> : task.name
            }
            <div>
                {
                    !task.completed &&
                    <button onClick={()=> completeTask(task.id)}>Completed</button>
                }
            </div>
            {/* {
                task.completed && <CompletedItem name = {task.name} />
            }
           */}
            {/* {task.name} - {task.completed ? "Completed" : "Pending"} */}
            {/* {
                task.completed && <span>completed</span>
            } */}
            </div>
            <div>
                {/* <button onClick= {CompletedItem}>Complete</button> */}
                <button onClick ={()=> completeTask(task.id)}>Complete</button>
                <button>Edit</button>
                </div></li>
    ) 
}
export  function CompletedItem({name}){
    return(
        <div style={{textDecoration: "line-through"}}>
            {name}
        </div>
    )
    
}
    export default TodoItem;