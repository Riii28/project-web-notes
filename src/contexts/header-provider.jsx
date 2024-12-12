import { createContext, useReducer } from "react";
import { reducer, initalState } from "../hooks/header.js";

export const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <HeaderContext.Provider value={{ state, dispatch }}>
            { children }
        </HeaderContext.Provider>
    )
}