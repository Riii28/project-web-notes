import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from '../hooks/profile.js'

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ProfileContext.Provider value={{ state, dispatch }}>
            { children }
        </ProfileContext.Provider>
    );
};

export const useProfileContext = () => useContext(ProfileContext)