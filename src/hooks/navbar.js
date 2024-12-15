export const reducer = (state, action) => {
    switch (action.type) {
        case 'HOME':
            return {
                folders: false, setNotes: false, setFolders: false, fab: false, home: true
            }
        case 'FAB':
            return {
                folders: false, setNotes: false, setFolders: false, home: false, fab: true
            }
        default:
            throw new Error('Unknown action type')      
    }
}

export const initialState = {
    home: false,
    folders: false,
    fab: false,
    setNotes: false,
    setFolders: false
}