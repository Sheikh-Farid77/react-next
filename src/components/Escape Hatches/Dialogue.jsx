import { useEffect, useRef } from "react";

export default function Dialogue(){
    const ref = useRef(null)

    useEffect(()=>{
        const modal = ref.current;
        modal.showModal();

        return ()=> modal.close();
    }, [])

    return (
        <dialog ref={ref}>This is open a dialogue</dialog>
    );
}