import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faSearch, faGear, faTrash, faPlusSquare, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useHeaderContext } from "../contexts/header-provider.jsx"
import { useProfileContext } from "../contexts/profile-provider.jsx"
import { Link } from "react-router-dom"
import { useNavbarContext } from "../contexts/navbar-provider.jsx"
import Setting from "./Setting.jsx"
import { useNotesContext } from "../contexts/notes-provider.jsx"
import toast from "react-hot-toast"

const Header = () => {
    const { state: notesState, dispatch: notesDispatch } = useNotesContext()
    const { state: headerState, dispatch: headerDispatch } = useHeaderContext()
    const { state: profile } = useProfileContext()
    const { dispatch: navDispatch } = useNavbarContext()

    const handleDeleteSelected = () => {
        if (!notesState.selected.length > 0) {
            toast.error('No item selected')
            return
        }

        notesDispatch({ type: 'DELETE_SELECTED' })
        headerDispatch({ type: 'CLICK_CHECKLIST' })
        toast.success('Deleted')
    }

    return (
            <header className="fixed top-0 left-0 w-full flex justify-between p-4 rounded-b-xl bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-colors duration-200">
                <span className={`${headerState.checklist ? 'opacity-50' : ''} block text-4xl font-semibold`}>
                    Notes
                </span>
                <div className="flex flex-col gap-y-5 items-center relative">
                    <Link
                        className={headerState.checklist ? 'opacity-50' : ''}
                        onClick={() => navDispatch({ type: 'HOME' })}
                        to={'/profile'}
                    >
                        <img
                            className='rounded-[50%] cursor-pointer aspect-square object-cover'
                            src={profile.final}
                            width='60'
                            alt="profile" 
                            
                        />
                    </Link>
                    <div>
                        <div className={`${headerState.checklist ? 'flex' : 'hidden'} gap-x-6`}>
                            <button
                                onClick={handleDeleteSelected}
                            >
                                <FontAwesomeIcon 
                                    size="lg" 
                                    icon={faTrash}
                                    title="Delete"
                                />
                            </button>

                            <button
                                onClick={() => headerDispatch({ type: 'CLICK_SELECT' })}
                            >
                                <FontAwesomeIcon 
                                    size="lg" 
                                    icon={faPlusSquare}
                                    title="Add to folder"
                                />
                            </button>

                            <button
                                onClick={() => headerDispatch({ type: 'CLICK_CHECKLIST' })}
                            >
                                <FontAwesomeIcon 
                                    size="xl" 
                                    icon={faXmark}
                                    title="Close selected"
                                />
                            </button>
                        </div>

                        <div className={`${headerState.checklist ? 'hidden' : 'flex'} gap-x-6`}>
                            <button 
                                onClick={() => headerDispatch({ type: 'CLICK_CHECKLIST' })}
                            >
                                <FontAwesomeIcon 
                                    size="lg"  
                                    icon={faCheckSquare}
                                    title="Select"
                                />
                            </button>

                            <Link
                                onClick={() => navDispatch({ type: 'HOME' })}
                                to={'/search'}
                            >
                                <FontAwesomeIcon 
                                    size="lg" 
                                    icon={faSearch}
                                    title="Search"
                                />
                            </Link>

                            <button 
                                onClick={() => headerDispatch({ type: 'CLICK_SETTING' })}
                            >
                                <FontAwesomeIcon 
                                    size="lg" 
                                    icon={faGear}
                                    title="Setting"
                                />                        
                            </button>
                            <Setting />
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Header