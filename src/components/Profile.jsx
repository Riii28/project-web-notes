import { useContext } from 'react'
import { useHeaderContext } from '../contexts/header-provider.jsx'
import Modal from './Modal.jsx'
import SetProfile from './SetProfile.jsx'
import { useProfileContext } from '../contexts/profile-provider.jsx'


const Profile = () => {
    const { state: headerState, dispatch: headerDispatch } = useHeaderContext()
    const { state: profile} = useProfileContext()

    return (
        <>
            <div>
                <img
                    onClick={() => headerDispatch({ type: 'CLICK_PROFILE' })}
                    className='rounded-[50%] cursor-pointer aspect-square object-cover'
                    src={profile.final}
                    width='60'
                    alt="profile" 
                />
            </div>
            <Modal state={headerState.profile}>
                <SetProfile />
            </Modal>
        </>
    )
}

export default Profile