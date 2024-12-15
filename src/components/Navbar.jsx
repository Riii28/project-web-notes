import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faHomeUser, faFolder, faFolderOpen, faAdd } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { NavbarContext } from "../contexts/navbar-provider.jsx"

const Navbar = () => {
    const { state: navState, dispatch: navDispatch } = useContext(NavbarContext)

    return (
        <div className="fixed bottom-0 left-0 w-full text-light p-4">
            <div className="flex justify-around relative text-yellow-300">
                <button
                    onClick={() => navDispatch({ type: 'HOME' })}
                    className="flex flex-col items-center"
                >
                    <FontAwesomeIcon 
                        icon={navState.home ? faHomeUser : faHome}
                        size="xl" 
                    />
                    <span className="block">Home</span>
                </button>
                <button>
                    <FontAwesomeIcon 
                        icon={faFolder}
                        size="xl" 
                    />
                    <span className="block">Folders</span>
                </button>
                <button 
                    onClick={() => navDispatch({ type: 'FAB' })}
                    className="absolute right-5 bottom-20 bg-yellow-300 text-dark p-2 rounded-[50%]"
                >
                    <FontAwesomeIcon 
                        icon={faAdd}
                        size="xl"
                    />
                </button>
            </div>
        </div>
    )
}

export default Navbar