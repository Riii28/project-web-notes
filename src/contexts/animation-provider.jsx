import { createContext, useContext } from "react"

const AnimationContext = createContext()

export const AnimationProvider = ({ children }) => {
    const transitions = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
        <AnimationContext.Provider value={{ transitions }}>
            { children }
        </AnimationContext.Provider>
    )
}

export const useAnimation = () => useContext(AnimationContext)