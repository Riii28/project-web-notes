import { useReducer, createContext, useContext } from "react";
import { initialState, reducer } from "../hooks/notes.js";
import { useEffect } from "react";

const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        const savedFolders = JSON.parse(localStorage.getItem('folders')) || {};
    
        const validFolders = Object.fromEntries(
            Object.entries(savedFolders).map(([folderName, noteIds]) => [
                folderName,
                noteIds.filter((id) => savedNotes.some((note) => note.id === id)),
            ])
        )
    
        dispatch({ type: 'LOAD_STATE', payload: { notes: savedNotes, folders: validFolders } });
    }, [])

    return (
        <NotesContext.Provider value={{ state, dispatch }}>
            { children }
        </NotesContext.Provider>
    )
}

export const useNotesContext = () => useContext(NotesContext)