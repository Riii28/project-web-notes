import { useReducer, createContext, useContext } from "react";
import { initialState, reducer } from "../hooks/notes.js";

const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <NotesContext.Provider value={{ state, dispatch }}>
            { children }
        </NotesContext.Provider>
    )
}

export const useNotesContext = () => useContext(NotesContext)