import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useProfileContext } from "../contexts/profile-provider.jsx"

const ProfileHeader = () => {
    const { dispatch: profileDispatch } = useProfileContext()

    return (
        <div className="fixed top-0 left-0 w-full flex justify-between items-center px-3 pt-4">
            <Link
                to={'/'}
                onClick={() => profileDispatch({ type: 'ON_CLOSE'})}
                className="flex items-center gap-x-3"
            >
                <FontAwesomeIcon
                    size="lg"
                    icon={faChevronLeft}
                />
                <span className="block text-2xl">Back</span>
            </Link>
            <span className="block font-semibold text-2xl">Profile</span>
        </div>
    )
}

export default ProfileHeader