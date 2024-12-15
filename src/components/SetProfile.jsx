import { useContext } from "react"
import { HeaderContext } from "../contexts/header-provider.jsx"
import { ProfileContext } from "../contexts/profile-provider.jsx"
import { toast } from 'react-hot-toast'
import profileDefault from '../assets/default.jpg'

const SetProfile = () => {
    const { dispatch: headerDispatch } = useContext(HeaderContext)
    const { state: profileState, dispatch: profileDispatch } = useContext(ProfileContext)

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
        headerDispatch({ type: 'CLICK_PROFILE' })
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
                            headerDispatch({ type: 'CLICK_PROFILE' })
                            toast.dismiss()
                            toast.success('Berhasil dihapus')
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className="ml-2 px-3 py-1 bg-gray-200 rounded-md"
                        onClick={() => {
                            headerDispatch({ type: 'CLICK_PROFILE' })
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
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-dark shadow-md w-full h-full md:w-96 md:h-auto p-4 rounded-md">
            <span className="block font-semibold text-xl">Change Profile</span>
            <div className="flex flex-col gap-y-3 items-center mt-8">
                <img
                    onClick={confirmDelete}
                    className="aspect-square cursor-pointer object-cover"
                    alt="profile"
                    src={profileState.preview}
                    width={150}
                />
                <label className="hover:underline" htmlFor="profile">Upload</label>
                <input
                    onChange={handleChange}
                    hidden
                    accept="image/*"
                    id="profile" 
                    type="file"
                />
            </div>
            <div className="flex justify-end gap-x-6 mt-8">
                <button
                    onClick={() => headerDispatch({ type: 'CLICK_PROFILE' })}
                    className="px-2 py-1 bg-indigo-100 rounded-md"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    className="px-2 py-1 bg-yellow-300 rounded-md"
                >
                    Save
                </button>
            </div>
        </div>
    )
}



export default SetProfile