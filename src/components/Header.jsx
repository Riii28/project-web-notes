import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faSearch, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import Profile from "./Profile"
import { useContext } from "react"
import { HeaderContext } from "../contexts/header-provider.jsx"

const Header = () => {
    const { dispatch } = useContext(HeaderContext)

    return (
        <div className="bg-indigo-100 fixed top-0 left-0 w-full flex justify-between p-3">
            <span className="block text-3xl font-semibold">Notes</span>
            <div className="flex flex-col gap-y-5 items-center">
                <Profile />
                <div className="flex gap-x-4">
                    <button onClick={() => dispatch({ type: 'CLICK_CHECKLIST'})}>
                        <FontAwesomeIcon size="lg" icon={faCheckSquare}/>
                    </button>
                    <button onClick={() => dispatch({ type: 'CLICK_SEARCH' })}>
                        <FontAwesomeIcon size="lg" icon={faSearch}/>
                    </button>
                    <button onClick={() => dispatch({ type: 'CLICK_SETTING' })}>
                        <FontAwesomeIcon size="lg" icon={faEllipsisVertical}/>                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header