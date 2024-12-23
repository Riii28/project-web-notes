import { useProfileContext } from "../contexts/profile-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useAnimation } from "../contexts/animation-provider";
import toast from "react-hot-toast";
import ConfirmDelete from "./ConfirmDelete";
import profileDefault from '../assets/default.jpg'

const ProfilePopup = () => {
    const { state: profileState, dispatch: profileDispatch } = useProfileContext();
    const { transitions } = useAnimation();

    const handleSave = () => {
        const savedProfile = JSON.parse(localStorage.getItem("profile"));
        const currentProfile = profileState.preview

        if (!currentProfile || currentProfile === profileDefault) {
            toast.error("No image selected to save")
            return
        }

        if (savedProfile === currentProfile) {
            toast.error("The image is already saved")
            return
        }

        profileDispatch({ type: "ON_SAVE" })
        profileDispatch({ type: 'ON_CLOSE' })
        toast.success("Profile picture saved")
    };

    const handleDelete = () => {
        const currentProfile = profileState.preview

        if (!currentProfile || currentProfile === profileDefault) {
            toast.error("No image to delete");
            return;
        }

        profileDispatch({ type: "ON_DELETE" })
        profileDispatch({ type: 'ON_CONFIRM' })
        profileDispatch({ type: 'ON_CLOSE' })
        toast.success("Profile picture deleted")
    };

    return (
        <div
            className={`${
                profileState.edit ? "fixed" : "hidden"
            } bottom-0 left-0 p-4 pb-10 w-full dark:bg-gray-800 rounded-t-2xl bg-indigo-100`}
        >
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
                            onClick={() => profileDispatch({ type: "ON_CLOSE" })}
                            size="xl"
                            cursor="pointer"
                            icon={faXmark}
                        />
                    </div>

                    <button
                        onClick={() => {
                            profileDispatch({ type: "ON_CLOSE" });
                            profileDispatch({ type: "ON_DETAIL" });
                        }}
                        className="block"
                    >
                        See profile picture
                    </button>

                    <div>
                        <label className="cursor-pointer" htmlFor="profile">Change profile picture</label>
                    </div>

                    <div className="flex gap-x-4 mt-4">
                        <button
                            onClick={() => profileDispatch({ type: 'ON_CONFIRM' })}
                            className="px-4 py-1 bg-red-500 text-white rounded-md"
                        >
                            Delete
                        </button>
                        <button onClick={handleSave} className="px-4 py-1 bg-yellow-300 text-white rounded-md">
                            Save
                        </button>
                    </div>
                </motion.div>
            )}

            <ConfirmDelete
                state={profileState.confirms}
                content="Delete profile picture?"
                onClose={() => profileDispatch({ type: 'ON_CONFIRM' })}
                onConfirm={handleDelete}
            />
        </div>
    );
};

export default ProfilePopup;
