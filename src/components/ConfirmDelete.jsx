import Modal from "./Modal.jsx";

const ConfirmDelete = ({ state, content, onClose, onConfirm }) => {


    return (
        <Modal state={state}>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col rounded-md shadow-md p-4 w-72 gap-y-8 bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-colors duration-200">
                <span className="block text-xl font-semibold">{content}</span>
                <div className="flex justify-end gap-x-5">
                    <button
                        onClick={onClose}
                    >
                        No
                    </button>
                    <button
                        onClick={onConfirm}
                    >
                        Yes
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmDelete