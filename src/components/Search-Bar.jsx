import { motion } from "framer-motion"

const SearchBar = ({ isHidden, variants }) => {
    return (
        <div className={`${isHidden ? '' : ''}`}>
            <motion.div>
                
            </motion.div>
        </div>
    )
}

export default SearchBar