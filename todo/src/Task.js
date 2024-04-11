export const Task = (props) =>{
  return (
    <div className="task" style={{backgroundColor: props.completed ? "green": "white"}}>
      <h2>{props.taskName}</h2> 
      <button onClick={() => props.toggleComplete(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
      <button onClick={() => props.editTask(props.id)}>Edit</button>
    </div>
  )
}