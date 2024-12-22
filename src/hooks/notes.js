import dayjs from "dayjs"

export const initialState = {
    title: '',
    content: '',
    character: 0,
    folder: '',
    selected: [],
    folders: JSON.parse(localStorage.getItem('folders')) || {},
    notes: JSON.parse(localStorage.getItem('notes')) || [],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload }
        case 'SET_CONTENT':
            return { 
                ...state, 
                content: action.payload, 
                character: action.payload.length
            }
        case 'SET_FOLDER':
            return {
                ...state,
                folder: action.payload
            }
        case 'RESET_FIELD':
            return {
                ...state,
                title: '',
                content: '',
                character: 0,
                folder: ''
            }
        case 'LOAD':
            return {
                ...state,
                title: action.payload.title,
                content: action.payload.content,
                character: action.payload.character
            }
        case 'SAVE_NOTE':
            const updateNote = {
                id: action.payload.noteID ? action.payload.noteID : +new Date(),
                title: state.title.trim(),
                content: state.content.trim(),
                date: dayjs().format('dddd, MMMM D [at] HH:mm'),
                character: state.character
            }

            const updateNotes = action.payload.noteID
                ? state.notes.map((note) => (
                    note.id === action.payload.noteID ? updateNote : note
                ))
                : [...state.notes, updateNote]
            
            localStorage.setItem('notes', JSON.stringify(updateNotes))
            return {
                ...state,
                notes: updateNotes,
                title: '',
                content: '',
                character: 0
            }
        case 'SELECTED':
            const isSelected = state.selected.includes(action.payload)
            return {
                ...state,
                selected: isSelected
                    ? state.selected.filter((id) => id !== action.payload)
                    : [...state.selected, action.payload]
            }
        case 'DELETE_SELECTED':
            const cleanedNotes = state.notes.filter((note) => {
                return !state.selected.includes(note.id)
            })

            const cleanedFolders = Object.fromEntries(
                Object.entries(state.folders).map(([key, notes]) => ([
                    key,
                    notes.filter((id) => !state.selected.includes(id))
                ]))
            )

            localStorage.setItem('notes', JSON.stringify(cleanedNotes))
            localStorage.setItem('folders', JSON.stringify(cleanedFolders))

            return {
                ...state,
                notes: cleanedNotes,
                folders: cleanedFolders,
                selected: []
            }
        case 'CREATE_FOLDER':
            if (state.folders[action.payload]) return state

            const newFolder = {
                ...state.folders, 
                [action.payload]: []
            }
            localStorage.setItem('folders', JSON.stringify(newFolder))
            return {
                ...state,
                folder: '',
                folders: newFolder
            }

        case 'ADD_TO_FOLDER':
            const { folderName, noteID } = action.payload

            const updatedFolders = {
                ...state.folders,
                [folderName]: state.folders[folderName]
                    ? [...state.folders[folderName], [noteID]]
                    : [noteID]
            }

            localStorage.setItem('folders', JSON.stringify(updatedFolders))

            return {
                ...state,
                folders: updatedFolders
            }
        default:
            throw new Error('Unknown action type')
    }
}