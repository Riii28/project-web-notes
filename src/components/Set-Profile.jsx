import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

const SetProfile = ({ isHidden, profileChange, profile, toggle, saveProfile, upload, variants }) => {

    const handleFileChange = (e) => {
        const image = e.target.files[0]
        if (!image) {
            alert('Kamu belum memilih gambar')
            return
        }

        const validTypes = ['image/jpeg', 'image/png']
        if (!validTypes.includes(image.type)) {
            alert('Gambar yang kamu pilih tidak didukung')
            return
        }

        const maxSize = 1
        if (image.size > maxSize * 1024 * 1024) {
            alert(`ukuran gambar maksimal ${maxSize}Mb`)
        }

        profileChange(image)
    }

    return (
        <div className={`${isHidden ? 'fixed' : 'hidden'} left-0 top-0 bg-transparent w-full h-full`}>
            {isHidden && (
                <motion.div 
                    className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-light shadow-md w-80 p-4 rounded-md`}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={variants}
                    transition={{ duration: 0.5 }}    
                >
                    <div className="flex justify-center mt-5">
                        <img
                            className="aspect-square object-cover rounded-sm"
                            src={profile.preview} 
                            alt=""
                            width={150}
                        />
                    </div>
                    <div className="mt-4 flex justify-center">
                        <label className="flex gap-x-2 items-center" htmlFor="upload">
                            <span>Upload file</span>
                            <FontAwesomeIcon size="lg" icon={upload}/>
                        </label>
                        <input 
                            className="hidden"
                            type="file"
                            id="upload"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="flex justify-end gap-x-6 mt-8 text-color-200">
                        <button className="bg-indigo-100 px-3 py-1 rounded-md" onClick={toggle}>
                            Cancel
                        </button>
                        <button className="bg-yellow-300 px-3 py-1 rounded-md" onClick={saveProfile}>
                            Save
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default SetProfile