import { motion } from "framer-motion"

const ModalBox = ({ isHidden, deletedTrue, deletedFalse, content, variants }) => {
    return (
        <div className={`${isHidden ? 'fixed' : 'hidden'} left-0 top-0 z-20 w-full h-full bg-transparent`}>
            {isHidden && (
                <motion.div
                    className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-light shadow-md w-64 p-4 rounded-md"
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={variants}
                    transition={{ duration: 0.3 }}
                >
                    <span className="block">{content}</span>
                    <div className="flex justify-end gap-x-6 mt-12">
                        <button 
                            onClick={deletedFalse} 
                            className="bg-indigo-100 px-3 py-1 rounded-md">No
                        </button>
                        <button 
                            onClick={deletedTrue} 
                            className="bg-yellow-300 px-3 py-1 rounded-md">Yes
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default ModalBox