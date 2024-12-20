import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "../hooks/navigation.js";

const NavbarContext = createContext()

export const NavbarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <NavbarContext.Provider value={{ state, dispatch }}>
            { children }
        </NavbarContext.Provider>
    )
}

export const useNavbarContext = () => useContext(NavbarContext)