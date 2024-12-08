import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faHome, faFolder, faAdd } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const location = useLocation()
    const [active, setActive] = useState({
        home: true,
        folders: false,
        notes: false,
    })

    const handleHome = () => {
        setActive({
            notes: false, home: true, folders: false 
        })
    }

    const handleFolders = () => {
        setActive({
            notes: false, home: false, folders: true
        })
    }

    const handleNotes = () => {
        setActive({
            home: false, folders: false, notes: true
        })
    }

    useEffect(() => {
        if (location.pathname === '/') {
            handleHome()
        }
        
        if (location.pathname.startsWith('/add-notes')) {
            setActive((prev) => ({
                ...prev, home: false, notes: true
            }))
        }

    }, [location])

    return (
        <div className="fixed z-10 bg-light bottom-0 left-0 flex justify-around rounded-t-2xl items-center py-2 w-full backdrop:blur-md border-t-2">
            <Link 
                className={`${active.home ? 'text-yellow-300' : 'text-color-100'} flex flex-col items-center transition-colors duration-300`}
                to={'/'} 
                onClick={handleHome}
            >
                <FontAwesomeIcon icon={faHome}/>
                <span>Home</span>
            </Link>
            <Link 
                className={`${active.folders ? 'text-yellow-300' : 'text-color-100'} flex flex-col items-center transition-colors duration-300`}
                to={'/folders'}
                onClick={handleFolders}
            >
                <FontAwesomeIcon icon={faFolder} />
                <span>Folders</span>
            </Link>
            <Link
                className={`${active.notes ? 'hidden' : 'fixed'} bottom-20 right-7 p-3 bg-yellow-300 rounded-[50%] shadow-md`}
                to={'/add-notes'}
                onClick={handleNotes}
            >
                <FontAwesomeIcon
                    title="Add note"
                    cursor='pointer' 
                    size="xl" 
                    icon={faAdd}/>
            </Link>
        </div>
    )
}

export default Navbar