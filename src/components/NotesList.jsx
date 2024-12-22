import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider.jsx"
import { useHeaderContext } from "../contexts/header-provider.jsx"
import { useNotesContext } from "../contexts/notes-provider.jsx"
import { useNavigate } from "react-router-dom"
import { useNavbarContext } from "../contexts/navbar-provider.jsx"

const NotesList = () => {
    const { transitions } = useAnimation()
    const { state: headerState } = useHeaderContext()
    const { state: notesState, dispatch: notesDispatch } = useNotesContext()
    const { dispatch: navDispatch } = useNavbarContext()
    const navigate = useNavigate()

    const handleEditNote = (noteID) => {
        navigate(`/set-notes/${noteID}`)
        navDispatch({ type: 'SET_NOTES' })
    }

    return (
        <motion.div 
            className="flex flex-col gap-y-3 mx-3"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitions}
            transition={{ duration: 0.5 }}
        >
            {notesState.notes.length > 0 ? (
                notesState.notes.map((note) => (
                    <div key={note.id} className="flex items-center ">
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
                                    onChange={() => notesDispatch({ type: 'SELECTED', payload: note.id })}
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
                <span className="text-2xl">No notes</span>
            )}
        </motion.div>
    )
}

export default NotesList