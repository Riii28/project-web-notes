import { createContext, useReducer } from "react";
import { reducer, initialState } from "../hooks/header.js";

export const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <HeaderContext.Provider value={{ state, dispatch }}>
            { children }
        </HeaderContext.Provider>
    )
}