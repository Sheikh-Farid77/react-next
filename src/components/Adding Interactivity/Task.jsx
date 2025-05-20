import { useContext, useState } from "react";
import { TaskContext } from "../../Context/taskContext";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const {handleChangeTask, handleDeleteTask} = useContext(TaskContext)

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input value={task.text} onChange={(e)=>{
          handleChangeTask({
            ...task,
            text: e.target.value
          })
        }} />
        <button onClick={() => setIsEditing(false)}>save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            handleChangeTask({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
      </label>
    </li>
  );
}
