
import { initialTasks } from "../../data";
import { useReducer } from "react";
import taskReducer from '../Reducer/taskReducer'
import { TaskContext } from "../Context/taskContext";

export default function TaskProvider({ children }) {
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
  const state = {
    handleAddTask,
    handleChangeTask,
    handleDeleteTask,
    tasks,
  };
  return <TaskContext.Provider value={state}>{children}</TaskContext.Provider>;
}
