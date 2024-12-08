import { motion } from "framer-motion"
import { useState } from "react"

const SetFolders = ({ isHidden, variants, handleClose, addFolders }) => {
    const [folderName, setFolderName] = useState('')

    const handleFolderName = (e) => {
        setFolderName(e.target.value)
    }

    const handleAddFolder = () => {
        addFolders(folderName)
        setFolderName('')
        handleClose()
    }

    return (
        <div className={`${isHidden ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-transparent z-10`}>
            {isHidden && (
                <motion.div
                    className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-light shadow-md w-64 p-4 rounded-md"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.5 }}    
                >
                    <span className="block text-lg font-semibold">Add folder</span>
                    <input
                        value={folderName}
                        onChange={handleFolderName}
                        className="w-full p-2 rounded-md focus:outline-none mt-8"
                        type="text"
                        required
                    />
                    <div className="flex justify-end gap-x-6 mt-6">
                        <button 
                            onClick={handleClose}
                            className="bg-indigo-100 px-3 py-1 rounded-md">Cancel
                        </button>
                        <button
                            onClick={handleAddFolder}
                            className="bg-yellow-300 px-3 py-1 rounded-md">Add
                        </button>
                    </div>
                </motion.div>
            )}
        </div>

    )
}

export default SetFolders