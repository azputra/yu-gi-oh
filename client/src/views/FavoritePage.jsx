import React from 'react'
import styles from '../css/MyStyle.module.css';
import MyFavoriteCard from '../components/MyFavoriteCard';

function DetailPage() {
    return (
        <div className={styles.home}>
            {
                <div data-testid="favorite-deck" className="container">
                    <div className="row d-flex">
                        <div className={styles.listCards}>
                            <MyFavoriteCard />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailPage