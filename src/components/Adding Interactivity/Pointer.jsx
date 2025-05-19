import { useState } from "react";

export default function Pointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="w-screen h-screen relative bg-gray-100 overflow-hidden"
    >
      <div
        style={{ left: position.x, top: position.y }}
        className="w-6 h-6 bg-red-600 rounded-full absolute pointer-events-none transition-all duration-75"
      ></div>
    </div>
  );
}