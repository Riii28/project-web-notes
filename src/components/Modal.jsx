import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider.jsx"
import { useEffect } from "react"

const Modal = ({ children, state, timeout, dispatch, nameDispatch }) => {
    const { transitions } = useAnimation()

    useEffect(() => {
        let timer
        if (state && timeout) {
            timer = setTimeout(() => {
                dispatch({ type: nameDispatch })
            }, timeout)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [state, timeout])

    return (
        <div className={`${state ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-transparent z-30`}>
            {state && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={transitions}
                    transition={{ duration: 0.3 }}  
                >
                    { children }
                </motion.div>
            )}
        </div>
    )
}

export default Modal