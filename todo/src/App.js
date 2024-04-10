import './App.css';
import { useState } from 'react'; 

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addNewTask = () => {
    const newTodoList = [...todoList, newTask]
  }
  return (
    <div className="App">
      <div className="addNewTask">
        <input type="text" onChange={handleChange}/>
        <button onClick={addNewTask}>Add new task</button>
      </div>
      <div className="taskList">
      </div>
    </div>
  );
}

export default App;
