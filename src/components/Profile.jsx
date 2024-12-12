import { useContext } from 'react'
import profil from '../assets/default.jpg'
import { HeaderContext } from '../contexts/header-provider.jsx'
import Modal from './Modal'
import SetProfile from './SetProfile'

const Profile = () => {
    const { state, dispatch } = useContext(HeaderContext)

    return (
        <>
            <div>
                <img
                    onClick={() => dispatch({ type: 'CLICK_PROFILE' })}
                    className='rounded-[50%] cursor-pointer'
                    src={profil}
                    width='50'
                    alt="" 
                />
            </div>
            <Modal state={state.profile}>
                <SetProfile />
            </Modal>
        </>
    )
}

export default Profile