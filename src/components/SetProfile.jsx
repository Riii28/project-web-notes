import { useContext } from "react"
import { HeaderContext } from "../contexts/header-provider"

const SetProfile = () => {
    const { dispatch } = useContext(HeaderContext)

    return (
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-light shadow-md w-64 p-4 rounded-md">
            <h1 onClick={() => dispatch({ type: 'CLICK_PROFILE' })} className="text-3xl font-bold text-center">Hello</h1>
        </div>
    )
}



export default SetProfile