import './App.css';
import { useState } from 'react'; 
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [edit, setEdit] = useState(false);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }
  const addNewTask = () => {
    const task = {
      id: todoList.length ? todoList[todoList.length -1].id + 1 : 0 ,
      taskName: newTask,
      completed: false,
      
    }
    setTodoList([...todoList, task])
  }

  const deleteTask =(id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id
    })
    setTodoList(newTodoList);
  }

  const toggleComplete = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id ){
        return {...task, completed: true}
      }else{
        return task;
      }
    }))
  }

  const editTask = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id ){
        return setEdit(true)
      }else{
        return task;
      }
    }))
  }

  const setUpdate = (id, updateTask) => {
    setTodoList( todoList.map((task) =>{
      if (task.id === id ){
        return task.taskName = updateTask 
      }else{
        return task;
      }
    }))
  };

  // const handleUpdateDone =(id, event) => {
  //   todoList.map((task)=> {
  //     if (task.id === id || event.key === 'Enter'){
  //       return {...task, edit : false}
  //     }
  //   })
  // }
  return (
    <div className="App">
      <div className="addNewTask">
        <input type="text" onChange={handleChange}/>
        <button onClick={addNewTask}>Add new task</button>
      </div>
      <div className="taskList">
        {todoList.map((task)=> {
          return ( <div key={task.id}>
              <Task  id={task.id} 
              taskName={task.taskName} 
              deleteTask={deleteTask} 
              toggleComplete={toggleComplete} 
              completed={task.completed}
              editTask={editTask}
              edit={task.edit}
              setUpdate={setUpdate}
              
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
