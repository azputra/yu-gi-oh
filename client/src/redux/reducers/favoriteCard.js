const initialState = {
    favoriteCard: [],
    favoriteStatus: false
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAVORITE_CARD':
            return { ...state, favoriteCard: [...state.favoriteCard, action.payload] }
        case 'DELTE_FAVORITE':
            return { ...state, favoriteCard: [...state.favoriteCard.filter(hero => hero.id !== action.payload)] }
        case 'FAVORITE_STATUS':
            return { ...state, favoriteStatus: action.payload }
        default:
            return state
    }
}

export default favoriteReducer