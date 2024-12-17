import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "../hooks/header.js";

const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <HeaderContext.Provider value={{ state, dispatch }}>
            { children }
        </HeaderContext.Provider>
    )
}

export const useHeaderContext = () => useContext(HeaderContext)