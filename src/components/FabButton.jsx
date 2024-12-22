import { useNavbarContext } from "../contexts/navbar-provider.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faPlusCircle, faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useAnimation } from "../contexts/animation-provider.jsx";
import { Link } from "react-router-dom";
import { useHeaderContext } from "../contexts/header-provider.jsx";

const FabButton = () => {
    const { state: navState, dispatch: navDispatch } = useNavbarContext()
    const { transitions } = useAnimation()
    const { state: headerState } = useHeaderContext()
    
    return (
        <div className={`${headerState.checklist ? 'opacity-50' : ''} fixed right-10 bottom-32 flex flex-col items-center gap-y-4`}>
            {navState.fab && (
                <motion.div
                    className="flex flex-col items-center gap-y-4 "
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={transitions}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        onClick={() => {
                            navDispatch({ type: 'SET_NOTES' })
                            navDispatch({ type: 'FAB' })
                        }}               
                        className={`${navState.setNotes ? 'text-yellow-300' : ''} transition-transform duration-200`}
                        to={'/set-notes'}
                        title="Add note"
                    >
                        <FontAwesomeIcon 
                            size="2x" 
                            icon={faNotesMedical}
                        />
                    </Link>
                    <Link
                        onClick={() => {
                            navDispatch({ type: 'SET_FOLDERS' })
                            navDispatch({ type: 'FOLDERS' })
                        }}
                        className={`${navState.setFolders ? 'text-yellow-300' : ''} transition-transform duration-200`}
                        to={'/folders'}
                        title="Add folder"
                    >
                        <FontAwesomeIcon 
                            size="2x" 
                            icon={faFolderPlus}
                        />
                    </Link>
                </motion.div>
            )}

            <button
                className={`${navState.fab ? 'rotate-90' : 'rotate-0'} text-yellow-300 transition-transform duration-300`}
                onClick={() => navDispatch({ type: 'FAB' })}
            >
                <FontAwesomeIcon
                    icon={faPlusCircle}
                    size="3x" 
                />
            </button>
        </div>
    )
}

export default FabButton