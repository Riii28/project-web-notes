import { motion } from "framer-motion"
import HomeHeader from "../components/Home-Header.jsx"
import FoldersList from "../components/Folders-List.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import SetFolders from "../components/Set-Folders.jsx"
import { useState } from "react"
import dayjs from "dayjs"

const Folders = ({ variants }) => {
    const [toggle, setToggle] = useState(false)
    const [folders, setFolders] = useState(() => {
        return JSON.parse(localStorage.getItem('folders')) || []
    })

    const handleAddFolders = (folderName) => {
        if (folderName.trim()) {
            const newFolder = {
                id: +new Date(),
                name: folderName.trim(),
                dateCreated: dayjs().format("dddd, MMMM D [at] HH:mm")
            }

            const updatedFolders = [...folders, newFolder]
            setFolders(updatedFolders)
            localStorage.setItem('folders', JSON.stringify(updatedFolders))
        } else {
            alert('Name cannot be empty')
        }
    }

    const handleDeleteFolder = (id) => {
        const updatedFolder = folders.filter(folder => folder.id !== id)
        setFolders(updatedFolder)
        localStorage.setItem('folders', JSON.stringify(updatedFolder))
    }

    const handleToggle = () => {
        setToggle((prev) => !prev)
    }

    return (
        <motion.div
            className="mt-8 h-full mx-4"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <HomeHeader 
                variants={variants}
            />
            <SetFolders 
                addFolders={handleAddFolders}
                handleClose={handleToggle}
                isHidden={toggle}
                variants={variants}
            />
            <FoldersList 
                folders={folders}
                deleteFolder={handleDeleteFolder}
                variants={variants}
            />
            <FontAwesomeIcon
                onClick={handleToggle}
                className="fixed bottom-36 right-7 p-3 bg-yellow-300 rounded-[50%] shadow-md"
                title="Add folder"
                cursor='pointer'
                size="xl" 
                icon={faFolderPlus}
            />
        </motion.div>
    )
}

export default Folders