import { motion } from "framer-motion"

const Alerts = ({ content, isHidden, variants }) => {
    return (
        <div className={`${isHidden ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-transparent z-10`}>
            {isHidden && (
                <motion.div
                    className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-light shadow-md w-64 p-4 rounded-md"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.5 }}    
                >
                    <span className="block font-bold text-center py-8 text-4xl">{content}</span>
                </motion.div>
            )}
        </div>
    )
}

export default Alerts