import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import styles from '../css/MyCard.module.css'

class ItemCardDeck extends Component {
    render() {
        return (
            <div className="col mb-4" style={{ padding: 0 }}>
                <div className={styles.container} style={{ marginTop: 15 + "vh" }}>
                    <div data-testid={this.props.hero.id} className={styles.card}>
                        <div className={styles.front}></div>
                        <div className={styles.back}>
                            <Card onClick={() => { this.props.getDetail(this.props.hero.id) }}>
                                <Card.Img data-testid="card-image" variant="top" src={this.props.hero.card_images[0].image_url} />
                            </Card>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ItemCardDeck