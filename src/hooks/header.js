export const initalState = {
    checklist: false,
    search: false,
    setting: false,
    profile: false
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'CLICK_CHECKLIST':
            return { 
                profile: false, search: false, setting: false, checklist: !state.checklist 
            }
        case 'CLICK_SEARCH':
            return {
                profile: false, setting: false, checklist: false, search: !state.search
            }
        case 'CLICK_SETTING':
            return {
                profile: false, checklist: false, search: false, setting: !state.setting
            }
        case "CLICK_PROFILE":
            return {
                checklist: false, search: false, setting: false, profile: !state.profile
            }
        default:
            throw new Error('Unknown type action')
    }
}