import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faSearch, faListDots } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <div className="bg-indigo-100 fixed top-0 left-0 w-full h-32 flex justify-between p-2">
            <span className="block text-3xl font-semibold">Notes</span>
            <div className="flex flex-col">
                {/* Profile */}
                <div>
                    <FontAwesomeIcon icon={faCheckSquare}/>
                    <FontAwesomeIcon />
                    <FontAwesomeIcon icon={faListDots}/>
                </div>
            </div>
        </div>
    )
}

export default Header