import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import detailReducer from '../reducers/detailHeroCard'
import allCardReducer from '../reducers/getAllCard'
import favoriteReducer from '../reducers/favoriteCard'
import loadingReducer from '../reducers/loading'
import addFavoriteMiddleware from '../../middlewares/addFavorite'

const reducers = combineReducers({
    allCardReducer,
    detailReducer,
    favoriteReducer,
    loadingReducer,
})

const store = createStore(reducers, compose(applyMiddleware(thunk, addFavoriteMiddleware)))
export default store