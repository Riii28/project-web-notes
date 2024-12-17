import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider.jsx"

const NotesList = () => {
    const { transitions } = useAnimation()

    return (
        <motion.div 
            className="mx-3 p-2 rounded-md bg-gray-600"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitions}
            transition={{ duration: 0.5 }}  
        >
            <h1>sascfac</h1>
            <h1>dsdafa</h1>
            <h1>dad</h1>
        </motion.div>
    )
}

export default NotesList