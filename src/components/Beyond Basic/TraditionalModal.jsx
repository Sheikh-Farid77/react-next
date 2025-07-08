import { useState } from "react";
import ModalContent from "./ModalContent";

export default function TraditionalModal() {
    const [show, setShow] = useState(false);

    return (
        <div className="relative border border-black h-20 mb-5 p-2 overflow-hidden">
            <button
                className="bg-black text-white px-4 py-1 rounded-sm text-lg cursor-pointer m-3"
                onClick={() => setShow(true)}
                >Show The Traditional Modal</button>
            {
                show && (
                    <ModalContent onClose={() => setShow(false)} />
                )
            }
        </div>
    );
}