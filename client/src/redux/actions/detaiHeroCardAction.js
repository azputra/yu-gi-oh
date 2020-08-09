import axios from 'axios'

const detail_card = (id) => {
    return function (dispatch) {
        axios.get(`https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=${id}`)
            .then(({ data }) => {
                dispatch({ type: 'DETAIL_CARD', payload: data })
            })
    }
}

export default detail_card