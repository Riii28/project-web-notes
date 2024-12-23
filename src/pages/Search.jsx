import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider"
import { useState } from "react"
import { useNotesContext } from "../contexts/notes-provider"
import { useNavbarContext } from "../contexts/navbar-provider"

const Search = () => {
    const { transitions } = useAnimation()
    const { state: notesState } = useNotesContext()
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const { dispatch: navDispatch } = useNavbarContext()
    const navigate = useNavigate()

    const handleEditNote = (noteID) => {
        navigate(`/set-notes/${noteID}`)
        navDispatch({ type: 'HOME' })
    }

    const handleSearch = (e) => {
        const value = e.target.value
        setQuery(value)

        if (value.trim()) {
            setResults(notesState.notes.filter((note) => {
                return note.title.toLowerCase().includes(value.toLowerCase())
            }))
        }

        if (value.length < 1) {
            setResults([])
        }
    }

    return (
        <>
            <div className="fixed top-0 left-0 w-full px-3 pt-4 bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-colors duration-200">
                <div className="flex justify-between items-center">
                    <Link
                        to={'/'}
                        className="flex items-center gap-x-3"
                    >
                        <FontAwesomeIcon
                        size="lg"
                        icon={faChevronLeft}
                    />
                        <span className="block text-2xl">Back</span>
                    </Link>
                    <span className="block font-semibold text-2xl">Search</span>
                </div>
                <div className="mt-8">
                    <input
                        value={query}
                        onChange={handleSearch}
                        className="w-full rounded-md p-2 text-color-textDark outline-none"
                        type="text" 
                        placeholder="Search notes by title"
                    />
                </div>
            </div>
            <motion.div 
                className="flex pt-36 flex-col gap-y-3 mx-3"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={transitions}
                transition={{ duration: 0.5 }}      
            >
                {results.length > 0 ? (
                    results.map((note) => (
                        <div
                            key={note.id}
                            className="w-full rounded-md dark:bg-gray-800 bg-indigo-100 transition-colors duration-200"
                            onClick={() => handleEditNote(note.id)}
                        >   
                            <div className="m-3 overflow-hidden">
                                <span className="block text-lg">{note.title}</span>
                                <span className="block text-sm">{note.date}</span>
                                <span className="block text-nowrap">{note.content}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <span className="block text-2xl">No notes</span>
                )}
            </motion.div>
        </>
    )
}

export default Search