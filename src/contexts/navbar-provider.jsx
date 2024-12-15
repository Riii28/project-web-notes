import { createContext, useReducer } from "react";
import { reducer, initialState } from "../hooks/navbar.js";

export const NavbarContext = createContext()

export const NavbarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <NavbarContext.Provider value={{ state, dispatch }}>
            { children }
        </NavbarContext.Provider>
    )
}

