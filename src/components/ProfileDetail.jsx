import { useProfileContext } from "../contexts/profile-provider.jsx"
import Modal from "./Modal.jsx"

const ProfileDetail = () => {
    const { state: profileState, dispatch: profileDispatch } = useProfileContext()

    return (
        <Modal state={profileState.detail}>
            <div 
                onClick={() => profileDispatch({ type: 'ON_DETAIL' })} 
                className="w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            >
                <img
                    className="p-4"
                    src={profileState.final}
                />
            </div>
        </Modal>
    )
}

export default ProfileDetail