import axios from 'axios'

const category = (level) => {
    return function (dispatch) {
        dispatch({ type: 'LOADING', payload: true })
        axios.get(`https://db.ygoprodeck.com/api/v5/cardinfo.php?banlist=tcg&${level}&sort=name`)
            .then(({ data }) => {
                dispatch({ type: 'ALL_CARD', payload: data })
                dispatch({ type: 'HEROES_FILTER_CARD', payload: data })
                dispatch({ type: 'LOADING', payload: false })
            })
    }
}

export default category