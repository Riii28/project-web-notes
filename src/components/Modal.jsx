import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider.jsx"

const Modal = ({ children, state, timeout, dispatch, nameDispatch }) => {
    const { transitions } = useAnimation()

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