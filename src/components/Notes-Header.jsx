import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const NotesHeader = () => {
    return (
        <div className="fixed top-0 left-0 w-full text-color-100 bg-light px-4 flex justify-between items-center h-20">
            <Link to='/' className="flex gap-x-4 items-center">
                <FontAwesomeIcon size="lg" cursor='pointer' icon={faChevronLeft} />
                <span className="font-semibold text-lg">Notes</span>
            </Link>
        </div>
    )
}

export default NotesHeader