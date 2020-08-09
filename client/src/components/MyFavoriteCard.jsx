import React from 'react'
import styles from '../css/MyCard.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyFavoriteCard() {
    const dispatch = useDispatch()
    const cardFavorite = useSelector((state) => state.favoriteReducer.favoriteCard)

    const removeFavorite = (heroId) => {
        dispatch({ type: 'DELTE_FAVORITE', payload: heroId })
    }

    return (
        <>
            {
                cardFavorite.map(hero => {
                    return (
                        <div key={hero.id} className="col mb-4" style={{ padding: 0 }}>
                            <div className={styles.container} style={{ marginTop: 15 + "vh" }}>
                                <div className={styles.card}>
                                    <div className={styles.front}></div>
                                    <div className={styles.back}>
                                        <Link to={`/detail/${hero.id}`}>
                                            <Card.Img data-testid="image-favorite" variant="top" src={hero.card_images[0].image_url} />
                                        </Link>
                                        <button data-testid="remove-card" onClick={() => { removeFavorite(hero.id) }} className={styles.myButton} style={{ marginLeft: 19 + "vh" }}>Buang</button>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                })
            }
        </>
    )
}

export default MyFavoriteCard