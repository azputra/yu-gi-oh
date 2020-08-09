import React, { Component } from 'react'
import styles from '../css/MyCard.module.css'

class MyButton extends Component {
    render() {
        return (
            <>
                {this.props.typeButton === "random" ?
                    <button data-testid="btn-random" type="submit" onClick={this.props.returnEvent} className={styles.myButton}>
                        Random Card
                    </button>
                    :
                    <button type="submit" onClick={this.props.returnEvent} className={styles.myButton}>
                        <i className="fas fa-search"></i>
                    </button>
                }
            </>
        )
    }
}

export default MyButton