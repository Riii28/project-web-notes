import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider"

const Search = () => {
    const { transitions } = useAnimation()

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitions}
            transition={{ duration: 0.5 }}  
        >
            <div className="fixed top-0 left-0 w-full flex justify-between items-center px-3 pt-4">
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
            <div className="mt-20 p-3">
                <input
                    className="w-full rounded-md p-2 text-color-textDark outline-none"
                    type="text" 
                    placeholder="Search notes by title"
                />
            </div>
        </motion.div>
    )
}

export default Search