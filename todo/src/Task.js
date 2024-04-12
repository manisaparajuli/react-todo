export const Task = (props) =>{

  return (
    <div  className="task" style={{backgroundColor: props.completed ? "green": "white"}}>
      <h1>Task Manager</h1>
      <h2 style={{display: props.edit ? "none" : "inline" }}>{props.taskName}</h2> 
      <button onClick={() => props.toggleComplete(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
    </div>
  )
}