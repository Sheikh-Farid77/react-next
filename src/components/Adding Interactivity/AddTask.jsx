import { useState } from "react";

export default function AddTask({onAdd}) {
  const [text, setText] = useState('')
  return (
    <>
      <input onChange={(e)=> setText(e.target.value)} value={text} placeholder="Add task" />
      <button onClick={()=> {
        setText('')
         onAdd(text)}}>Add</button>
    </>
  );
}
