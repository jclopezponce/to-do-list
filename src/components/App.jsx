import React, { useState } from "react"
import CreateArea from "./CreateArea"
import Task from "./Task"
import Header from "./Header"

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(newTask){
    setTasks([...tasks, newTask])
    }

    function deleteTask(id) {
      setTasks((prevTasks) => {
        return prevTasks.filter((item, index) => {
          return index !== id;
        });
      });
    }

  return (
    <div>
      <Header/>
      <div className="body">
      <div className="container">
        <CreateArea onAdd={addTask}/>
        
      {tasks.map((taskItem, index)=>
      (
        <Task 
        key={index}
        id={index} 
        task={taskItem}
        onDelete={deleteTask}/>
      )
      )}


        </div>
        </div>
        </div>
       
  )
}

export default App
