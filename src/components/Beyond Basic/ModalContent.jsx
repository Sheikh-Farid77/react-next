export default function ModalContent({ onClose }) {
    return (
        <div className="flex justify-evenly items-center border rounded-lg absolute top-20 left-12 bottom-20 bg-black text-white p-2" role="dialog" aria-modal="true">
            <p className="mx-2">This is a Modal</p>
            <button
                className="bg-white text-black px-4 py-1 rounded-sm text-lg cursor-pointer"
                onClick={onClose}
            >Close</button>
        </div>
    );
}