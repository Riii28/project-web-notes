import { Link, useParams, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faCheck } from "@fortawesome/free-solid-svg-icons"
import { useNavbarContext } from "../contexts/navbar-provider.jsx"
import { useNotesContext } from "../contexts/notes-provider.jsx"
import dayjs from "dayjs"
import { useEffect } from "react"
import toast from "react-hot-toast"

const SetNotes = () => {
    const { noteID } = useParams()
    const navigate = useNavigate()
    const { dispatch: navDispatch } = useNavbarContext()
    const { state: notesState, dispatch: notesDispatch } = useNotesContext()

    useEffect(() => {
        if (noteID) {
            const storedNotes = notesState.notes
            const noteToEdit = storedNotes.find((note) => {
                return note.id === parseInt(noteID, 10)
            })
            if (noteToEdit) {
                notesDispatch({ type: 'LOAD', payload: noteToEdit })
            } else {
                notesDispatch({ type: 'RESET_FIELD' })
            }
        } else {
            notesDispatch({ type: 'RESET_FIELD' })
        }
    }, [noteID, notesState.notes])

    const handleSave = () => {
        if (notesState.title.trim() && notesState.content.trim()) {
            notesDispatch({ type: 'SAVE_NOTE', payload: { noteID: noteID ? parseInt(noteID, 10) : null }})
            
            navigate('/')
            navDispatch({ type: 'HOME' })
            toast.success('Saved')
        } else {
            toast.error('Isi yang bener woi')
        }
    }

    return (
        <>
            <div className="fixed top-0 left-0 w-full flex justify-between items-center px-3 pt-4">
                <Link
                    onClick={() => navDispatch({ type: 'HOME' })}
                    to={'/'}
                    className="flex items-center gap-x-3"
                >
                    <FontAwesomeIcon
                        size="lg"
                        icon={faChevronLeft}
                    />
                    <span className="block text-2xl">Back</span>
                </Link>
                <div>
                    <FontAwesomeIcon
                        onClick={handleSave}
                        size="xl" 
                        icon={faCheck}
                    />
                </div>
            </div>
            <div className="mt-20 flex flex-col p-3">
                <input
                    value={notesState.title}
                    onChange={(e) => notesDispatch({ type: 'SET_TITLE', payload: e.target.value })}
                    className="bg-transparent text-xl outline-none"
                    type="text"
                    placeholder="Notes title"
                    name="title"
                    required
                />
                <span className="text-sm">{dayjs().format('dddd, MMMM D [at] HH:mm')} | {notesState.character}</span>
                <textarea
                    value={notesState.content}
                    onChange={(e) => notesDispatch({ type: 'SET_CONTENT', payload: e.target.value })}
                    className="resize-none h-[33rem] bg-transparent outline-none mt-4 text-lg"
                    placeholder="Type here"
                    name="content"
                    required
                />
            </div>
        </>
    )
}

export default SetNotes