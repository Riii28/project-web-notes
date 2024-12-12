import { useContext, useReducer } from "react"
import { HeaderContext } from "../contexts/header-provider.jsx"
import { reducer, initalState } from "../hooks/profile.js"

const SetProfile = () => {
    const { dispatch } = useContext(HeaderContext)
    const [state, setState] = useReducer(reducer, initalState)

    const handlePreview = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setState({ type: 'ON_PREVIEW', payload: reader.result })
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-light shadow-md w-80 p-4 rounded-md">
            <span className="block font-semibold text-xl">Change Profile</span>
            <div className="flex flex-col gap-y-3 items-center mt-8">
                <img 
                    src={state.preview} 
                    alt="profile"
                    width={150}
                />
                <label htmlFor="profile">Upload</label>
                <input
                    onChange={handlePreview}
                    hidden
                    accept="image/*"
                    id="profile" 
                    type="file"
                />
            </div>
            <div className="flex justify-end gap-x-6 mt-8">
                <button
                    onClick={() => dispatch({ type: 'CLICK_PROFILE'})}
                    className="px-2 py-1 bg-indigo-100 rounded-md"
                >
                    Cancel
                </button>
                <button
                    onClick={() => setState({ type: 'ON_SAVE'})}
                    className="px-2 py-1 bg-yellow-300 rounded-md"
                >
                    Save
                </button>
            </div>
        </div>
    )
}



export default SetProfile