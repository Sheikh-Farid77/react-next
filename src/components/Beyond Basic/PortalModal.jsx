import { useState } from "react";
import ModalContent from "./ModalContent";

import Portal from "./Portal";

export default function PortalModal() {
    const [show, setShow] = useState(false);
    return (
        <div className=" border border-black h-20 mb-5 p-2 overflow-hidden">
            <button
                className="bg-black text-white px-4 py-1 rounded-sm text-lg cursor-pointer m-3"
                onClick={() => setShow(true)}
            >Show Portal Modal</button>
            {
                show && (
                <Portal>
                    <ModalContent onClose={() => setShow(false)} />
                </Portal>
                )
            }
        </div>
    );
}