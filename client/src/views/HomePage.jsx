import React, { useEffect } from 'react';
import ListCardDeck from '../components/ListCardDeck';
import DetailCard from '../components/DetailCard';
import Loading from '../components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/MyStyle.module.css';
import useDetailCard from '../hooks/useDetailCard'
import { useSelector, useDispatch } from 'react-redux'
import getAllCard from '../redux/actions/getAllCard'

function Home(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCard())
    }, [dispatch])

    const isLoading = useSelector((state) => state.loadingReducer.loading)
    const allCardDeck = useSelector((state) => state.allCardReducer.allCard)
    const getDetail = useDetailCard()

    const getDetail2 = (heroId) => {
        getDetail(heroId)
        props.setDetailShow(true)
    }


    const scroller = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={styles.home}>
            {
                isLoading ?
                    <Loading />
                    :
                    <div data-testid="homepage" className="container">
                        <div className="row d-flex">
                            <div className={styles.stickyDetail}>
                                {
                                    props.detailShow &&
                                    <DetailCard />
                                }
                            </div>
                            <button data-testid="btn-scroll" onClick={() => scroller()} className={styles.upScroll}><i className="fas fa-arrow-up"></i></button>
                            <div className={styles.listCards}>
                                <ListCardDeck getDetail={getDetail2} allCard={allCardDeck} />
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Home;