import { useState } from "react"
import Alerts from "./Alerts.jsx"
import { motion } from "framer-motion"

const Setting = ({ isHidden, variants }) => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(true)

        setTimeout(() => {
            setToggle(false)
        }, 1000)
    }


    return (
        <>
            <div className={`${isHidden ? 'absolute' : 'hidden'} bottom-[-85px] w-32 bg-light z-10 rounded-md shadow-md p-2`}>
                {isHidden && (
                    <motion.div
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        variants={variants}
                        transition={{ duration: 0.3 }}
                    >
                        <span onClick={handleToggle} className="block cursor-pointer">Theme</span>
                        <span onClick={handleToggle} className="block cursor-pointer">Backup</span>
                        <span onClick={handleToggle} className="block cursor-pointer">Setinggs</span>
                    </motion.div>
                )}
            </div>
            <Alerts content={'Soon'} isHidden={toggle} />
        </>
    )
}

export default Setting