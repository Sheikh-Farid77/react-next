import { useState } from "react";
import { sculptureList } from "../../../data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)

  function handleClick() {
    if(index < 11){
            setIndex(prev => prev + 1);
            console.log(index)

    }else{
        setIndex(0)
    }
  }

  const handlePrev = ()=>{
    if(index < 1){
      setIndex(11)
      // console.log(index)
    }else{
      setIndex(prev => prev - 1 )
    }
  }

  let sculpture = sculptureList[index];
  return (
    <>
    <button onClick={handlePrev}>Prev</button>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist} {index}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <br />

      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Details</button>
      <br />
      {
        show && <p>{sculpture.description}</p>
      }
    </>
  );
}
