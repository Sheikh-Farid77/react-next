import { useEffect, useRef } from "react";

export default function Animation(){
    const ref = useRef(null)
    useEffect(() => {
        const node = ref.current;
        node.style.opacity = 1;

        return ()=> node.style.opacity = 0;
    }, [])
    return (
        <h1 ref={ref} className="text-4xl font-semibold text-center">Hello world</h1>
    );
}