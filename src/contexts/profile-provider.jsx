import { createContext, useReducer } from "react";
import { reducer, initialState } from '../hooks/profile.js'

// Context
export const ProfileContext = createContext();

// Provider
export const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ProfileContext.Provider value={{ state, dispatch }}>
            { children }
        </ProfileContext.Provider>
    );
};
