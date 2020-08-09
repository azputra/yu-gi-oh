import React, { Component } from 'react'
import styles from '../css/MyStyle.module.css';

class Loading extends Component {
    render() {
        return (
            <>
                <img
                    data-testid="loading-home"
                    src="https://thumbs.gfycat.com/PerfectDeadlyLadybug-size_restricted.gif"
                    className={styles.loadingGif}
                    alt="loading"
                />
            </>
        )
    }
}

export default Loading