const initialState = {
    detailCard: []
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DETAIL_CARD':
            return { ...state, detailCard: action.payload }
        default:
            return state
    }
}

export default detailReducer