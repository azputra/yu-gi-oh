import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from '../css/MyCard.module.css'
import Loading from './Loading'
import getDetailCard from '../redux/actions/detaiHeroCardAction'

function MyCardDetail() {
    const dispatch = useDispatch()
    const params = useParams()
    const detailCard = useSelector((state) => state.detailReducer.detailCard)

    useEffect(() => {
        dispatch(getDetailCard(params.id))
    }, [params.id, dispatch])

    const addFavorite = (card) => {
        dispatch({ type: 'FAVORITE_CARD', payload: card })
    }

    return (
        <>
            {
                detailCard.length > 0 ?
                    <Card data-testid={detailCard[0].id} data- text="white" className={styles.detailCardDeck}>
                        <Card.Body style={{ width: '50rem', textAlign: 'center' }}>
                            <div className="row">
                                <div className="col">
                                    <Card.Img variant="top" src={detailCard[0].card_images[0].image_url} />
                                </div>
                                <div className="col">
                                    <Card.Title>{detailCard[0].name}</Card.Title>
                                    <Card.Text>{detailCard[0].type}</Card.Text>
                                    <Card.Text>
                                        {detailCard[0].desc}
                                    </Card.Text>
                                    <Card.Text>
                                        atk: {detailCard[0].atk}
                                    </Card.Text>
                                    <Card.Text>
                                        def: {detailCard[0].def}
                                    </Card.Text>
                                    <div style={{ height: 22 + "vh" }}>
                                        <button data-testid="btn-favorite" onClick={() => { addFavorite(detailCard[0]) }} className={styles.myButton} style={{ margin: 0, marginTop: 10 + "vh" }}>
                                            Add to deck
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    :
                    <Loading />
            }
        </>
    )
}

export default MyCardDetail