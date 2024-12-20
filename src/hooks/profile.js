import profileDefault from '../assets/default.jpg'

export const initialState = {
    preview: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : profileDefault,
    final: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : profileDefault,
    edit: false,
    detail: false
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
                ...state,
                preview: profileDefault,
                final: profileDefault
            }
        case 'ON_EDIT':
            return {
                ...state,
                edit: true
            }
        case 'ON_CLOSE':
            return {
                ...state,
                edit: false
            }
        case 'ON_DETAIL':
            return {
                ...state, detail: !state.detail
            }
        default:
            throw new Error('Unknown action type')
    }
};
