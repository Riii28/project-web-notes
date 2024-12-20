import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider.jsx"
import { useHeaderContext } from "../contexts/header-provider.jsx"

const NotesList = () => {
    const { transitions } = useAnimation()
    const { state: headerState } = useHeaderContext()

    return (
        <motion.div 
            className="mx-3 p-2 rounded-md dark:bg-gray-800 bg-indigo-100 transition-colors duration-200"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitions}
            transition={{ duration: 0.5 }}  
        >
            <div className="flex items-center">
                <div className={`${headerState.checklist ? 'flex' : 'hidden'} justify-center w-16`}>
                    <input
                        type="checkbox" 
                    />
                </div>
                <div>
                    <span className="block">Title</span>
                    <span className="block">Date</span>
                    <span className="block">Content</span>
                </div>
            </div>
        </motion.div>
    )
}

export default NotesList