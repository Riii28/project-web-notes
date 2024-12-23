import { Link, useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useNotesContext } from '../contexts/notes-provider.jsx'
import { useHeaderContext } from "../contexts/header-provider.jsx"
import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider.jsx"
import { useNavbarContext } from "../contexts/navbar-provider.jsx"

const FolderDetail = () => {
    const { name } = useParams()
    const { state: notesState, dispatch: notesDispatch } = useNotesContext()
    const { dispatch: navDispatch } = useNavbarContext()
    const { state: headerState } = useHeaderContext()
    const { transitions } = useAnimation()
    const navigate = useNavigate()

    const folderNotesID = notesState.folders[name] || []
    const folderNotes = notesState.notes.filter((note) => {
        return folderNotesID.includes(note.id)
    })

    const handleEditNote = (noteID) => {
        navigate(`/set-notes/${noteID}`)
        navDispatch({ type: 'SET_NOTES' })
    }

    return (
        <>
            <div className="fixed top-0 left-0 w-full px-3 pt-4 flex justify-between items-center bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-colors duration-200">
                <Link
                    to={'/folders'}
                    className="flex items-center gap-x-3"
                >
                    <FontAwesomeIcon
                        size="lg"
                        icon={faChevronLeft}
                    />
                    <span className="block text-2xl">Back</span>
                </Link>
                <span className="block font-semibold text-2xl">Details</span>
            </div>
            <motion.div
                className="pt-24 flex flex-col gap-y-3 mx-3"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={transitions}
                transition={{ duration: 0.5 }}
            >
                {folderNotes.length > 0 ? (
                    folderNotes.map((note) => (
                        <div key={note.id} className="flex items-center">
                            <div className={`${headerState.checklist ? 'flex' : 'hidden'} justify-center w-16 `}>
                                {headerState.checklist && (
                                    <motion.input
                                        className="cursor-pointer"
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={transitions}
                                        transition={{ duration: 0.5 }}                        
                                        checked={notesState.selected.includes(note.id)}
                                        onChange={() => notesDispatch({ type: 'SELECTED', payload: { id: note.id, type: 'notes'} })}
                                        type="checkbox"  
                                    />
                                )}
                            </div>
                            <div
                                className="w-full rounded-md overflow-hidden dark:bg-gray-800 bg-indigo-100 transition-colors duration-200"
                                onClick={() => handleEditNote(note.id)}
                            >   
                                <div className="m-3 overflow-hidden">
                                    <span className="block text-lg font-semibold">{note.title}</span>
                                    <span className="block text-sm">{note.date}</span>
                                    <span className="block text-nowrap">{note.content}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="block text-2xl">No notes</p>
                )} 
            </motion.div>
        </>
    )
}

export default FolderDetail