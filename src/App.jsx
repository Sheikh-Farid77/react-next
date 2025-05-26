import { useRef } from "react";

function App() {
  const myRef = useRef(null);

  const handleScroll = ()=>{
    myRef.current.textContent = 'Hello React'
  }
  return (
    <>
      <div className="h-[3000px]">
        <div className="w-10" ref={myRef}>Hello world</div>
        <button className="mt-auto" onClick={handleScroll}>Scroll to Div</button>
      </div>
    </>
  );
}

export default App;
