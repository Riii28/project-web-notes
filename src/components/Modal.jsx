import { motion } from "framer-motion"
import { useAnimation } from "../contexts/animation-provider.jsx"

const Modal = ({ child, state }) => {
    const { transitions } = useAnimation()

    return (
        <div className={`${state ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-transparent z-20`}>
            {state && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={transitions}
                    transition={{ duration: 0.3 }}  
                >
                    { child }
                </motion.div>
            )}
        </div>
    )
}

export default Modal