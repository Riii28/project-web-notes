import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faHomeUser, faFolder, faFolderOpen} from "@fortawesome/free-solid-svg-icons"
import { useNavbarContext } from "../contexts/navbar-provider.jsx"
import { Link } from "react-router-dom"
import FabButton from "./FabButton.jsx"
import { useHeaderContext } from "../contexts/header-provider.jsx"

const Navbar = () => {
    const { state: navState, dispatch: navDispatch } = useNavbarContext()
    const { state: headerState } = useHeaderContext()

    return (
        <nav className="fixed bottom-0 left-0 w-full text-light p-4 border-t bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-colors duration-200">
            <div className="flex justify-around relative text-yellow-300">
                <Link
                    onClick={() => navDispatch({ type: 'HOME' })}
                    to={'/'}
                    className={`
                        ${navState.home ? 'text-yellow-300' : 'text-color-dark dark:text-color-light'} 
                        ${headerState.checklist ? 'opacity-50' : ''} 
                    flex flex-col items-center transition-colors duration-200`}
                >
                    <FontAwesomeIcon 
                        icon={navState.home ? faHomeUser : faHome}
                        size="xl" 
                    />
                    <span className="block">Home</span>
                </Link>
                <Link
                    onClick={() => navDispatch({ type: 'FOLDERS' })}
                    to={'/folders'}
                    className={`
                        ${navState.folders ? 'text-yellow-300' : 'text-color-dark dark:text-color-light'} 
                        ${headerState.checklist ? 'opacity-50' : ''} 
                    flex flex-col items-center transition-colors duration-200`}
                >
                    <FontAwesomeIcon 
                        icon={navState.folders ? faFolderOpen : faFolder}
                        size="xl" 
                    />
                    <span className="block">Folders</span>
                </Link>
            </div>
            <FabButton />
        </nav>
    )
}

export default Navbar