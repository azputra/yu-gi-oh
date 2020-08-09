import axios from 'axios'

const all_card = () => {
    return function (dispatch) {
        dispatch({ type: 'LOADING', payload: true })
        axios.get('https://db.ygoprodeck.com/api/v5/cardinfo.php')
            .then(({ data }) => {
                dispatch({ type: 'ALL_CARD', payload: data })
                dispatch({ type: 'LOADING', payload: false })
            })
    }
}

export default all_card