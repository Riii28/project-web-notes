
export const initialState = {
    checklist: false,
    search: false,
    setting: false,
    selectedFolder: false
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'CLICK_CHECKLIST':
            return { 
                select: false, search: false, setting: false, checklist: !state.checklist 
            }
        case 'CLICK_SEARCH':
            return {
                select: false, setting: false, checklist: false, search: !state.search
            }
        case 'CLICK_SETTING':
            return {
                select: false, checklist: false, search: false, setting: !state.setting
            }
        case 'CLICK_SELECT':
            return {
                ...state, search: false, setting: false, selectedFolder: !state.selectedFolder
            }
        default:
            throw new Error('Unknown type action')
    }
}