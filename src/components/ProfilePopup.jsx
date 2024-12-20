import { useProfileContext } from "../contexts/profile-provider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider"

const ProfilePopup = () => {
    const { state: profileState, dispatch: profileDispatch} = useProfileContext()
    const { transitions } = useAnimation()

    return (
        <div className={`${profileState.edit ? 'fixed': 'hidden'} bottom-0 left-0 p-4 pb-10 w-full dark:bg-gray-800 rounded-t-2xl bg-indigo-200`}>
            {profileState.edit && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={transitions}
                    transition={{ duration: 0.3 }}     
                >
                    <div className="flex justify-end">
                        <FontAwesomeIcon
                            onClick={() => profileDispatch({ type: 'ON_CLOSE' })}
                            size="xl"
                            cursor='pointer'
                            icon={faXmark}
                        />
                    </div>

                    <button
                        onClick={() => {
                            profileDispatch({ type: 'ON_CLOSE' })
                            profileDispatch({ type: 'ON_DETAIL' })
                        }}
                        className="block hover:text-cyan-600"
                    >
                        See profile picture
                    </button>

                    <div>
                        <label htmlFor="profile">Change profile picture</label>
                    </div>
                    
                    <div className="flex gap-x-4 mt-4">
                        <button 
                            className="px-2 py-1 bg-gray-800 dark:bg-indigo-200 rounded-md"
                        >
                            Delete
                        </button>
                        <button
                        
                            className="px-2 py-1 bg-yellow-300 rounded-md"
                        >
                            Save
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default ProfilePopup