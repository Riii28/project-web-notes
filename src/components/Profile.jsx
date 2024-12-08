import { useState } from "react";
import profileDefault from '../assets/default.jpg'
import SetProfile from "./Set-Profile.jsx";

const Profile = ({ upload, variants }) => {
    const [toggle, setToggle] = useState(false)
    const [profile, setProfile] = useState(() => {
        const storedProfile = localStorage.getItem('profile')
        return storedProfile ? JSON.parse(storedProfile) : { 
            preview: profileDefault, 
            final: profileDefault 
        }
    })

    const handleToggle = () => {
        setToggle((prev) => !prev)
    }

    const handleFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (err) => reject(err)
        })
    }

    const handleProfilePreview = async (file) => {
        const fileBase64 = await handleFile(file)
        setProfile((prev) => ({
            ...prev, preview: fileBase64
        }))
    }
    
    const handleProfileSave = () => {
        setProfile((prev) => {
            const updatedProfile = {
                ...prev, final: prev.preview
            }
            localStorage.setItem('profile', JSON.stringify(updatedProfile))
            return updatedProfile
        })
        handleToggle()
    }

    return (
        <>
            <div>
                <img
                    onClick={handleToggle}
                    className="aspect-square rounded-[50%] cursor-pointer object-cover"
                    src={profile.final} 
                    alt="profile"
                    width={50}
                />
            </div>

            <SetProfile 
                saveProfile={handleProfileSave} 
                profileChange={handleProfilePreview} 
                toggle={handleToggle} 
                profile={profile} 
                isHidden={toggle}
                upload={upload}
                variants={variants}
            />
        </>
    )
}

export default Profile