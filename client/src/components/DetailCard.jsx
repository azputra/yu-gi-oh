import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../css/MyStyle.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function DetailCard() {
    const detailCard = useSelector((state) => state.detailReducer.detailCard)
    return (
        <>
            {
                detailCard.length > 0 ?
                    <Link to={`/detail/${detailCard[0].id}`}>
                        <div className="col mb-4 myDetailCard" data-testid="detail-card">
                            <Card.Title className={styles.animasiImage}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img data-testid="image-detail-card" variant="top" src={detailCard[0].card_images[0].image_url} />
                                </Card>
                            </Card.Title>
                            <Card.Body className={styles.myCardBody}>
                                <p data-testid="name-detail-card" className={styles.detailInfo}>
                                    Name: {detailCard[0].name}
                                </p>
                                <p data-testid="type-detail-card" className={styles.detailInfo}>
                                    Type: {detailCard[0].type}
                                </p>
                            </Card.Body>
                        </div>
                    </Link>
                    :
                    <img
                        src="https://thumbs.gfycat.com/VacantTightAzurewingedmagpie-small.gif"
                        alt="loading"
                    />
            }
        </>
    )
}

export default DetailCard