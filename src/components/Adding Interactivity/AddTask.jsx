import { useContext, useState } from "react";
import { TaskContext } from "../../Context/taskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const { handleAddTask } = useContext(TaskContext);
  return (
    <>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          setText("");
          handleAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
