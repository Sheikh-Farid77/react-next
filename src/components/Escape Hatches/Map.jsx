import { useEffect, useRef } from "react";
import image from "../../assets/react.svg";

export default function Map() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.setZoomLevel(10);
  }, []);
  return (
    <div>
        <div>
             <img src={image} alt="" ref={ref} />;
        </div>
    </div>
  )
}
