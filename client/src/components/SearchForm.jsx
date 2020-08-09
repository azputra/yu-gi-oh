import React, { useState } from 'react'
import MyButton from './MyButton'
import styles from '../css/MyStyle.module.css'

function SearchForm(props) {
    const [search, setSearch] = useState('')
    const handleInputSearch = event => {
        event.preventDefault()
        props.handleFilter({
            search
        })
        setSearch('')
    }

    return (
        <form className="d-flex" onSubmit={handleInputSearch}>
            <input type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
                className={styles.myButton} />
            <MyButton typeButton={"search"} returnEvent={props.searchButton} />
        </form>
    )
}

export default SearchForm