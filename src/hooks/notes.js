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
            const isSelected = state.selected.includes(action.payload.id)
            const updatedSelected = isSelected
                ? state.selected.filter((id) => id !== action.payload.id)
                : [...state.selected, action.payload.id]

            return {
                ...state,
                selected: updatedSelected
            }
        case 'DELETE_SELECTED':
            const remainingNotes = state.notes.filter((note) => {
                return !state.selected.includes(note.id)
            })

            const remainingFolders = Object.fromEntries(
                Object.entries(state.folders).filter(
                    ([folderName]) => !state.selected.includes(folderName)
                )
            )

            localStorage.setItem('notes', JSON.stringify(remainingNotes))
            localStorage.setItem('folders', JSON.stringify(remainingFolders))

            return {
                ...state,
                notes: remainingNotes,
                folders: remainingFolders,
                selected: []
            }
        case 'LOAD_STATE':
            return {
                ...state,
                notes: action.payload.notes,
                folders: action.payload.folders,
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
            const { folderName } = action.payload

            const updatedFolders = {
                ...state.folders,
                [folderName]: state.folders[folderName]
                    ? [...new Set([...state.folders[folderName], ...state.selected])]
                    : [...state.selected]
            }

            localStorage.setItem('folders', JSON.stringify(updatedFolders))

            return {
                ...state,
                folders: updatedFolders,
                selected: []
            }
        default:
            throw new Error('Unknown action type')
    }
}