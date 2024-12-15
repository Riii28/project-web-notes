import profileDefault from '../assets/default.jpg'

export const initialState = {
    preview: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : profileDefault,
    final: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : profileDefault
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ON_PREVIEW':
            return {
                ...state, 
                preview: action.payload,
            }
        case 'ON_SAVE':
            localStorage.setItem('profile', JSON.stringify(state.preview))
            return {
                ...state, 
                final: state.preview
            }
        case 'ON_DELETE':
            localStorage.removeItem('profile')
            return {
                preview: profileDefault,
                final: profileDefault
            }
        default:
            throw new Error('Unknown action type')
    }
};
