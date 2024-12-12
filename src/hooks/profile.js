import profileDefault from '../assets/default.jpg'

export const initalState = {
    preview: profileDefault,
    final: JSON.parse(localStorage.getItem('profile')) || profileDefault
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ON_PREVIEW':
            return {
                ...state, preview: action.payload
            }
        case 'ON_SAVE':
            const finalProfile = state.preview || profileDefault
            localStorage.setItem('profile', JSON.stringify(finalProfile))
            return {
                ...state, final: finalProfile
            }
        default:
            throw new Error('Unknown action type')
    }
}

