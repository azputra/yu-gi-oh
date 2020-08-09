import React from 'react'
import styles from '../css/MyStyle.module.css';
import MyCardDetail from '../components/MyCardDetail';

function DetailPage() {
    return (
        <div data-testid="my-detail-card" className={styles.home}>
            <MyCardDetail />
        </div>
    )
}

export default DetailPage