import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faFolderBlank, faL } from "@fortawesome/free-solid-svg-icons"
import ModalBox from "./Modal-Box"
import { useState } from "react"

const FoldersList = ({ folders, deleteFolder, variants }) => {
    const [folderID, setFolderID] = useState(null)
    const [toggle, setToggle] = useState(false)

    const handleOpenModal = (id) => {
        setFolderID(id)
        setToggle(true)
    }

    const handleDeleted = () => {
        if (folderID !== null) {
            deleteFolder(folderID)
            setToggle(false)
        }
    }

    const handleNotDeleted = () => {
        setToggle(false)
    }

    return (
        <>
            <div className="mt-32 flex flex-col gap-y-4">
                {folders.length > 0 ? (
                    folders.map((folder) => (
                        <div key={folder.id} className="flex justify-between items-center gap-x-4 bg-indigo-100 rounded-md p-3 text-color-100">
                            <div className="flex gap-x-2 items-center">
                                <FontAwesomeIcon icon={faFolderBlank}/>
                                <span className="block">{folder.name}</span>
                            </div>
                            <div className="flex justify-end items-center">
                                <FontAwesomeIcon 
                                    icon={faTrash}
                                    onClick={() => handleOpenModal(folder.id)}
                                    cursor='pointer'
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <span className="block text-xl text-color-200 font-semibold">No Folders</span>
                )}
            </div>
            <ModalBox 
                content={'Delete this folder?'}
                deletedTrue={handleDeleted}
                deletedFalse={handleNotDeleted}
                isHidden={toggle}
                variants={variants}
            />
        </>
    )
}

export default FoldersList