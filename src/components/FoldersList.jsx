import { useAnimation } from "../contexts/animation-provider.jsx";
import { useHeaderContext } from "../contexts/header-provider.jsx";
import { useNotesContext } from "../contexts/notes-provider.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FoldersList = () => {
    const { transitions } = useAnimation()
    const { state: notesState, dispatch: notesDispatch } = useNotesContext()
    const { state: headerState } = useHeaderContext()

    return (
        <motion.div
            className="flex flex-col gap-y-3 mx-3"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitions}
            transition={{ duration: 0.5 }}
        >
            {Object.keys(notesState.folders).length > 0 ? (
                Object.keys(notesState.folders).map((folderName) => (
                    <div key={folderName} className="flex items-center">
                        <div className={`${headerState.checklist ? 'flex' : 'hidden'} justify-center w-16 `}>
                            {headerState.checklist && (
                                <motion.input
                                    className="cursor-pointer"
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={transitions}
                                    transition={{ duration: 0.5 }}                        
                                    type="checkbox"
                                    checked={notesState.selected.includes(folderName)}
                                    onChange={() => notesDispatch({ type: 'SELECTED', payload: {id : folderName, type: 'folders'} })}
                                />
                            )}
                        </div>
                        <Link
                            to={`/folders/${folderName}`}
                            className="w-full overflow-hidden rounded-md dark:bg-gray-800 bg-indigo-100 transition-colors duration-200"
                        >   
                            <div className="m-3 flex justify-between overflow-hidden">
                                <span className="block">{folderName}</span>
                                <span className="block">{notesState.folders[folderName]?.length || 0}</span>
                            </div>
                        </Link>     
                    </div>
                ))
            ) : (
                <span className="block text-2xl">No folders</span>
            )}  
        </motion.div>
    )
}

export default FoldersList