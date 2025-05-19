import AddTask from "./components/Adding Interactivity/AddTask";
import TaskList from "./components/Adding Interactivity/TaskList";
import { initialTasks } from "../data";
import { useReducer } from "react";
import taskReducer from "./Reducer/taskReducer";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const generateId = (task) => {
    const id = task.reduce(
      (total, current) =>
        total && total.id > current.id ? total.id : current.id,
      0
    );

    return id + 1;
  };

  // handlers

  // handle add task
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: generateId(tasks),
    });
  };

  // Edit task
  const handleChangeTask = (task) => {
    dispatch({
      type: "change",
      task,
    });
  };

  // Delete Task
  const handleDeleteTask = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
