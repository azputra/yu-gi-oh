const initialState = {
    allCard: []
}

const allCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CARD':
            return { ...state, allCard: action.payload }
        default:
            return state
    }
}

export default allCardReducer