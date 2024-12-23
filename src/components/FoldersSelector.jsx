import toast from "react-hot-toast";
import Modal from "./Modal.jsx";
import { useHeaderContext } from "../contexts/header-provider";
import { useNotesContext } from "../contexts/notes-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const FoldersSelector = () => {
    const { state: notesState, dispatch: notesDispatch } = useNotesContext()
    const { state: headerState, dispatch: headerDispatch } = useHeaderContext()
    const folderNames = Object.keys(notesState.folders)

    const handleChange = (e) => {
        const selectedFolder = e.target.value

        if (!selectedFolder) {
            toast.error('Pilih yang bener woi')
            return
        }

        if (!notesState.selected.length > 0) {
            toast.error('No item selected')
            return
        }
        
        notesDispatch({ type: 'ADD_TO_FOLDER', payload: { folderName: selectedFolder} })
        headerDispatch({ type: 'CLICK_CHECKLIST' })
        toast.success('Success')
    }

    return (
        <Modal state={headerState.selectedFolder}>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col rounded-md shadow-md p-4 w-72 gap-y-6 bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-colors duration-200">
                <div className="flex justify-between items-center">
                    <span className="block font-semibold text-xl">Select</span>
                    <FontAwesomeIcon 
                        icon={faXmark}
                        size="lg"
                        cursor='pointer'
                        title="close"
                        onClick={() => headerDispatch({ type: 'CLICK_CHECKLIST' })}
                    />
                </div>
                {folderNames.length > 0 ? (
                    <select 
                        onChange={handleChange} 
                        defaultValue=""
                        className="text-color-textDark p-3 rounded-md"
                    >   
                        <option disabled value="">Select</option>
                        {folderNames.map((folder) => (
                            <option key={folder} value={folder}>
                                { folder }
                            </option>
                        ))}
                    </select>
                ) : (
                    <p className="block">No folders</p>
                )}
            </div>
        </Modal>
    )
}

export default FoldersSelector