import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
    const mountElement = document.getElementById('portal-root')
    const div = document.createElement('div')
    useEffect(() => {
        mountElement.appendChild(div);

        return () => mountElement.removeChild(div)
    }, [div, mountElement])

    return createPortal(children, mountElement)


}