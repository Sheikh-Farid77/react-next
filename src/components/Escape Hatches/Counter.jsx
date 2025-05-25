import { useRef } from "react";

export default function Counter() {
  const ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(`you click the button ${ref.current} times `)
  };
  return <button onClick={handleClick}>Click</button>;
}
