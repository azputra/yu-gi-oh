import React, { Component } from 'react'
import styles from '../css/MyStyle.module.css';

class ErrorPage extends Component {
    render() {
        return (
            <>
                <div data-testid="error-page">
                    <img
                        src="https://media.giphy.com/media/5kFUZQqJvsdM4y2e7Q/giphy.gif"
                        className={styles.loadingError}
                        alt="error"
                    />
                    <h1 className={styles.h1Error}>Error 404</h1>
                </div>
            </>
        )
    }
}

export default ErrorPage