import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import dayjs from "dayjs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SetNotes = () => {
    const { noteID } = useParams()
    const navigate = useNavigate()

    const [character, setCharacter] = useState(0)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem("notes")) || []
        if (noteID) {
            const noteToEdit = storedNotes.find((note) => note.id === parseInt(noteID, 10))

            if (noteToEdit) {
                setTitle(noteToEdit.title)
                setContent(noteToEdit.content)
                setCharacter(noteToEdit.content.length)
            }
        }
    }, [noteID])

    const handleSave = () => {
        if (title.trim() && content.trim()) {
            const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
            const updatedNote = {
                id: noteID ? parseInt(noteID, 10) : +new Date(),
                title: title.trim(),
                content: content.trim(),
                date: dayjs().format("dddd, MMMM D [at] HH:mm"),
            }

            const updatedNotes = noteID
                ? storedNotes.map((note) =>
                    note.id === parseInt(noteID, 10) ? updatedNote : note
                )
                : [...storedNotes, updatedNote]

            localStorage.setItem("notes", JSON.stringify(updatedNotes))
            navigate("/")
        } else {
            alert("Title dan content tidak boleh kosong")
        }
    }

    return (
        <div className="mt-24 p-2 text-color-100">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-transparent text-xl focus:outline-none placeholder:text-color-100 font-semibold"
                placeholder="Title"
                type="text"
            />
            <span className="block text-sm">
                {dayjs().format("dddd, MMMM D [at] HH:mm")} | {character}
            </span>
            <textarea
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                    setCharacter(e.target.value.length)
                }}
                className="resize-none w-full text-xl h-[400px] bg-transparent mt-4 focus:outline-none placeholder:text-color-100 font-semibold"
                placeholder="Notes"
            />
            <button className="fixed bottom-20 right-7 p-3 bg-yellow-300 rounded-[50%] shadow-md">
                <FontAwesomeIcon onClick={handleSave} size="xl" icon={faCheck}/>
            </button>
        </div>
    )
}

export default SetNotes
