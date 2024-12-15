import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faSearch, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import Profile from "./Profile.jsx"
import { useContext } from "react"
import { HeaderContext } from "../contexts/header-provider.jsx"
import { ProfileProvider } from "../contexts/profile-provider.jsx"

const Header = () => {
    const { dispatch: headerDispatch } = useContext(HeaderContext)

    return (
        <ProfileProvider>
            <div className="fixed top-0 left-0 w-full flex justify-between p-3 rounded-b-xl">
                <span className="block text-4xl font-semibold">Notes</span>
                <div className="flex flex-col gap-y-5 items-center">
                    <Profile />
                    <div className="flex gap-x-6">
                        <button onClick={() => headerDispatch({ type: 'CLICK_CHECKLIST'})}>
                            <FontAwesomeIcon size="lg" icon={faCheckSquare}/>
                        </button>
                        <button onClick={() => headerDispatch({ type: 'CLICK_SEARCH' })}>
                            <FontAwesomeIcon size="lg" icon={faSearch}/>
                        </button>
                        <button onClick={() => headerDispatch({ type: 'CLICK_SETTING' })}>
                            <FontAwesomeIcon size="lg" icon={faEllipsisVertical}/>                        
                        </button>
                    </div>
                </div>
            </div>
        </ProfileProvider>
    )
}

export default Header