import './App.css';
import { useState } from 'react'; 

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addNewTask = () => {
    setTodoList([...todoList, newTask])
  }

  const deleteTask =() => {
    console.log("hello")

  }


  return (
    <div className="App">
      <div className="addNewTask">
        <input type="text" onChange={handleChange}/>
        <button onClick={addNewTask}>Add new task</button>
      </div>
      <div className="taskList">
        {todoList.map((item,key)=> {
          return <div>
            <h2>{item}</h2> <button onClick={deleteTask}>Delete</button>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
