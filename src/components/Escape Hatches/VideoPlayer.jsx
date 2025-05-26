import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, isPlaying }) {
  const myRef = useRef(null);

 useEffect(()=>{
     if (isPlaying) {
    myRef.current.play(); 
  } else {
    myRef.current.pause(); 
  }
 }, [isPlaying])
  return <video ref={myRef} src={src} loop playsInline />;
}
