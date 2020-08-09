import axios from 'axios'
import { useDispatch } from 'react-redux'

function useDetailCard() {
    const dispatch = useDispatch()
    const getDetail = (id) => {
        axios.get(`https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=${id}`)
            .then(({ data }) => {
                dispatch({ type: 'DETAIL_CARD', payload: data })
            })
    }
    return getDetail
}

export default useDetailCard