import { useRef } from "react";
import MyInput from "./components/Escape Hatches/MyInput";

function App() {
  const myRef = useRef(null);

  const handleFocus = () => {
    myRef.current.focus();
  };

  return (
    <>
      <MyInput type="text" placeholder="Enter Your Name" ref={myRef} />
      <br />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}

export default App;
