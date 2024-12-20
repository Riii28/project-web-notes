import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faSearch, faGear } from "@fortawesome/free-solid-svg-icons"
import { useHeaderContext } from "../contexts/header-provider.jsx"
import { useProfileContext } from "../contexts/profile-provider.jsx"
import { Link } from "react-router-dom"
import { useNavbarContext } from "../contexts/navbar-provider.jsx"
import Setting from "./Setting.jsx"

const Header = () => {
    const { dispatch: headerDispatch } = useHeaderContext()
    const { state: profile } = useProfileContext()
    const { dispatch: navDispatch } = useNavbarContext()

    return (
            <div className="fixed top-0 left-0 w-full flex justify-between p-3 rounded-b-xl bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-colors duration-200">
                <span className="block text-4xl font-semibold">Notes</span>
                <div className="flex flex-col gap-y-5 items-center relative">
                    <Link
                        onClick={() => navDispatch({ type: 'HOME' })}
                        to={'/profile'}
                    >
                        <img
                            className='rounded-[50%] cursor-pointer aspect-square object-cover'
                            src={profile.final}
                            width='60'
                            alt="profile" 
                        />
                    </Link>
                    <div className="flex gap-x-6">
                        <button onClick={() => headerDispatch({ type: 'CLICK_CHECKLIST'})}>
                            <FontAwesomeIcon size="lg" icon={faCheckSquare}/>
                        </button>

                        <Link
                            onClick={() => navDispatch({ type: 'HOME' })}
                            to={'/search'}
                        >
                            <FontAwesomeIcon size="lg" icon={faSearch}/>
                        </Link>

                        <button onClick={() => headerDispatch({ type: 'CLICK_SETTING' })}>
                            <FontAwesomeIcon size="lg" icon={faGear}/>                        
                        </button>
                        <Setting />
                    </div>
                </div>
            </div>
    )
}

export default Header