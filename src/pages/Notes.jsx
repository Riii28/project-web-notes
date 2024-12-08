import { motion } from "framer-motion"
import SetNotes from "../components/Set-Notes.jsx"
import NotesHeader from "../components/Notes-Header.jsx"

const Notes = ({ variants }) => {

    return (
        <motion.div
            className="mt-8 h-full mx-4"
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            transition={{ duration: 0.5 }}
        >   
            <NotesHeader/>
            <SetNotes />
        </motion.div>
    )
}

export default Notes