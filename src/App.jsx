import AddTask from "./components/Adding Interactivity/AddTask";
import TaskList from "./components/Adding Interactivity/TaskList";
import { initialTasks } from "../data";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const generateId = (task) => {
    const id = task.reduce((total, current) =>  total && total.id > current.id ? total.id : current.id, 0);

    return id + 1;
  };

  // handlers

  // handle add task
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: generateId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  // Edit task
  const handleChangeTask = (task)=>{
    setTasks(
      tasks.map(t => {
        if(t.id === task.id){
          return task
        }
        return t
      })
    )
  }

  // Delete Task
  const handleDeleteTask = (id)=>{
    setTasks(
      tasks.filter(t => t.id !== id)
    )
  }
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default App;
