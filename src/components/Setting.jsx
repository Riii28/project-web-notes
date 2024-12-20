import { useTheme } from "../contexts/theme-provider.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useHeaderContext } from "../contexts/header-provider.jsx"
import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider.jsx"
import toast from "react-hot-toast"

const Setting = () => {
    const { handleTheme, theme } = useTheme()
    const { state: headerState, dispatch: headerDispatch } = useHeaderContext()
    const { transitions } = useAnimation()

    return (
        <div className={`${headerState.setting ? 'fixed' : 'hidden'} w-32 right-3 p-4 top-32 rounded-md bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-all duration-200`}>
            {headerState.setting && (
                <motion.div
                    className="flex flex-col"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={transitions}
                    transition={{ duration: 0.5 }}  
                >
                    <button 
                        onClick={() => {
                            handleTheme()
                            headerDispatch({ type: 'CLICK_SETTING' })
                        }}
                        className="flex"
                    >
                        Theme {theme}
                    </button>
                    <button
                        onClick={() => {
                            toast.error('Belum ada cuy')
                        }}
                        className="flex"
                    >
                        Login
                    </button>
                </motion.div>
            )}
        </div>
    )
}

export default Setting