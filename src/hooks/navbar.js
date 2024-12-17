export const reducer = (state, action) => {
    switch (action.type) {
        case 'HOME':
            return {
                fab: false, folders: false, setNotes: false, setFolders: false, home: true
            }
        case 'FOLDERS':
            return {
                ...state, fab: false, setNotes: false, home: false, folders: true
            }
        case 'FAB':
            return {
                ...state, fab: !state.fab
            }
        case 'SET_NOTES':
            return {
                ...state, home: false, folders: false, setFolders: false, setNotes: true
            }
        case 'SET_FOLDERS':
            return {
                ...state, setFolders: !state.setFolders
            }
        default:
            throw new Error('Unknown action type')      
    }
}

export const initialState = {
    home: true,
    folders: false,
    fab: false,
    setNotes: false,
    setFolders: false
}