import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faSearch, faCheckSquare, faEllipsisVertical, faFileArrowUp } from "@fortawesome/free-solid-svg-icons"
import Profile from "./Profile.jsx"
import Setting from "./Settings.jsx"
import { useState } from "react"
import SearchBar from "./Search-Bar.jsx"
import Alerts from "./Alerts.jsx"

const HomeHeader = ({ variants }) => {
    const [toggle1, setToggle1] = useState(false)

    const handleToggle = () => {
        setToggle1(true)

        setTimeout(() => {
            setToggle1(false)
        }, 1000)
    }


    const [toggle, setToggle] = useState({
        checklist: false,
        search: false,
        setting: false,
    })

    const handleSettingToggle = () => {
        setToggle((prev) => ({
            ...prev, setting: !prev.setting
        }))
    }

    const handleSearchToggle = () => {
        setToggle((prev) => ({
            ...prev, search: !prev.search
        }))
    }

    const handleCheckToggle = () => {
        setToggle((prev) => ({
            ...prev, checklist: !prev.checklist
        }))
    }

    return (
        <>
            <div className="bg-light fixed z-10 left-0 top-0 w-full text-color-100 flex justify-between px-4">
                <span className="block text-4xl mt-4  font-semibold">Notes</span>
                <div className="flex flex-col items-end py-4 relative">
                    <Profile close={faX} upload={faFileArrowUp} variants={variants}/>
                    <div className="flex gap-x-6 mt-4">
                        <FontAwesomeIcon onClick={handleToggle} cursor='pointer' size="lg" icon={faCheckSquare}/>
                        <FontAwesomeIcon onClick={handleToggle} cursor='pointer' size="lg" icon={faSearch}/>
                        <FontAwesomeIcon onClick={handleSettingToggle} cursor='pointer' size="lg" icon={faEllipsisVertical}/>
                    </div>
                    <Setting 
                        variants={variants}
                        isHidden={toggle.setting}
                    />
                    <SearchBar  
                        variants={variants}
                        isHidden={toggle.search}
                    />
                </div>
            </div>
            <Alerts content={'Soon'} isHidden={toggle1} variants={variants}/>
        </>
    )
}

export default HomeHeader