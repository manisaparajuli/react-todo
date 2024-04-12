export const Task = (props) =>{
  return (
    <div  className="task" style={{backgroundColor: props.completed ? "green": "white"}}>
      <h2 style={{display: props.edit ? "none" : "inline" }}>{props.taskName}</h2> 
      <input style={{display: props.edit ? "inline" : "none"}} type="text" defaultValue={props.taskName}
      onChange={() => props.setUpdate(props.taskName, props.id)}
      />
      <button onClick={() => props.toggleComplete(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
      <button onClick={() => props.editTask(props.id)}>Edit</button>
    </div>
  )
}