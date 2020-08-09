const initialState = {
    filterHeroesCard: []
}

const filterHeroesCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FILTER_CARD':
            return { ...state, filterHeroesCard: action.payload }
        default:
            return state
    }
}

export default filterHeroesCardReducer