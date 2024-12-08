import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import ModalBox from "./Modal-Box.jsx"

const NotesList = ({ notes, onEdit, onDelete, variants }) => {
    const [noteID, setNoteID] = useState(null)
    const [toggle, setToggle] = useState(false)

    const handleOpenModal = (id) => {
        setNoteID(id)
        setToggle(true)
    }

    const handleDeleted = () => {
        if (noteID !== null) {
            onDelete(noteID)
            setToggle(false)
        }
    }

    const handleNotDeleted = () => {
        setToggle(false)
    }

    return (
        <>
            <div className="mt-32 flex flex-col gap-y-4 text-color-100">   
                {notes.length > 0 ? (
                    notes.map((note) => (
                        <div 
                            className=" bg-indigo-100 p-3 rounded-md overflow-hidden"
                            key={note.id}
                        >
                            <span className="block text-xl font-semibold overflow-hidden">{note.title}</span>
                            <span className="block text-color-200 text-sm text-nowrap overflow-hidden">{note.content}</span>
                            <span className="block">{note.date}</span>

                            <div className="flex justify-end mt-3 gap-x-4 text-lg">
                                <FontAwesomeIcon 
                                    icon={faEdit}
                                    onClick={() => onEdit(note.id)}
                                    cursor='pointer'
                                />
                                <FontAwesomeIcon 
                                    icon={faTrash}
                                    onClick={() => handleOpenModal(note.id)}
                                    cursor='pointer'
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <span className="block text-xl text-color-200 font-semibold">No notes</span>
                )}
            </div>
            <ModalBox 
                content={'Delete this note?'}
                deletedFalse={handleNotDeleted} 
                deletedTrue={handleDeleted} 
                isHidden={toggle}
                variants={variants}
            />
        </>
    )
}

export default NotesList