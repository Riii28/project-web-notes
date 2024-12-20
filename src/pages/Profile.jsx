import { useProfileContext } from "../contexts/profile-provider.jsx"
import { toast } from 'react-hot-toast'
import profileDefault from '../assets/default.jpg'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faXmark } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider.jsx"
import { useEffect, useState } from "react"
import ProfileDetail from "../components/ProfileDetail.jsx"
import ProfilePopup from "../components/ProfilePopup.jsx"
import ProfileHeader from "../components/ProfileHeader.jsx"

const Profile = () => {
    const { state: profileState, dispatch: profileDispatch } = useProfileContext()
    const { transitions } = useAnimation()

    const handleChange = (e) => {
        const input = e.target
        const image = input.files[0]

        if (!image) {
            toast.error('Kamu belum memilih gambar')
            return
        }

        const validTypes = ["image/jpeg", "image/png"]
        if (!validTypes.includes(image.type)) {
            toast.error('Tipe gambar harus berupa JPEG atau PNG')
            return
        }
    
        const maxSize = 1
        if (image.size > maxSize * 1024 * 1024) {
            toast.error(`Batas ukuran gambar adalah ${maxSize}MB`)
            return
        }

        const reader = new FileReader()
        reader.onload = () => {
            profileDispatch({ type: 'ON_PREVIEW', payload: reader.result })
            input.value = ''
        }
        reader.readAsDataURL(image)
    }

    const handleSave = () => {
        const savedProfile = JSON.parse(localStorage.getItem('profile'))
        const currentProfile = profileState.preview

        if (!currentProfile || currentProfile === profileDefault) {
            toast.error('Belum ada gambar untuk disimpan')
            return
        }

        if (savedProfile === currentProfile) {
            toast.error('Gambar sudah di simpan')
            return
        }
 
        profileDispatch({ type: 'ON_SAVE' })
        toast.success('Success')
    }

    const confirmDelete = () => {
        toast(
            <span>
                Delete this profile?
                <div className="mt-4 flex justify-between">                  
                    <button
                        className="px-3 py-1 bg-red-500 text-white rounded-md"
                        onClick={() => {
                            const currentProfile = profileState.preview
                    
                            if (!currentProfile || currentProfile === profileDefault) {
                                toast.error('Tidak ada gambar')
                                return
                            }

                            profileDispatch({ type: 'ON_DELETE' })
                            toast.dismiss()
                            toast.success('Berhasil dihapus')
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className="ml-2 px-3 py-1 bg-gray-200 rounded-md"
                        onClick={() => {
                            toast.dismiss()
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </span>,
          {
            position: "top-center",
            autoClose: false,
          }
        )
      }

    return (
        <motion.div 
            className="p-4 bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-colors duration-200 relative"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitions}
            transition={{ duration: 0.5 }}  
        >
            <ProfileHeader />
            <div className="flex flex-col gap-y-3 mt-24 ">
                <img
                    onClick={() => profileDispatch({ type: 'ON_EDIT' })}
                    className="aspect-square cursor-pointer object-cover rounded-[50%]"
                    alt="profile"
                    src={profileState.preview}
                    width={200}
                />
                <input
                    onChange={handleChange}
                    hidden
                    accept="image/*"
                    id="profile" 
                    type="file"
                />
                <span></span>
            </div>
            <ProfileDetail />
            <ProfilePopup />
        </motion.div>
    )
}



export default Profile