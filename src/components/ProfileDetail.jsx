import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useProfileContext } from "../contexts/profile-provider.jsx"
import Modal from "./Modal.jsx"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const ProfileDetail = () => {
    const { state: profileState, dispatch: profileDispatch } = useProfileContext()

    return (
        <Modal state={profileState.detail}>
            <div className="w-full h-full flex flex-col gap-y-4 p-4 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-colors duration-200">
                <div className="flex justify-end">
                    <FontAwesomeIcon 
                        onClick={() => profileDispatch({ type: 'ON_DETAIL' })} 
                        size="2x" 
                        icon={faXmark}
                        cursor='pointer'
                        title="Close"
                    />
                </div>
                <img
                    className="m-auto w-full h-full"
                    src={profileState.final}
                />
            </div>
        </Modal>
    )
}

export default ProfileDetail