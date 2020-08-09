import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import MyButton from './MyButton';
import SearchForm from './SearchForm';
import styles from '../css/MyStyle.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import getAllCard from '../redux/actions/getAllCard'
import getCategory from '../redux/actions/categoryAction'

function NavbarHome(props) {
    const dispatch = useDispatch()
    const allCardDeck = useSelector((state) => state.allCardReducer.allCard)

    const handleFilter = (e) => {
        if (e.search.length > 0) {
            const regex = new RegExp(e.search, "i");
            const filterHero = allCardDeck.filter(hero => {
                return regex.test(hero.name);
            });
            dispatch({ type: 'HEROES_FILTER_CARD', payload: filterHero })
            dispatch({ type: 'ALL_CARD', payload: filterHero })
            props.setDetailShow(false)
        } else {
            dispatch(getAllCard())
        }
    }

    const getRandomCard = () => {
        axios.get("https://db.ygoprodeck.com/api/v5/randomcard.php")
            .then(({ data }) => {
                dispatch({ type: 'DETAIL_CARD', payload: data })
                props.setDetailShow(true)
            })
    }

    const handleCategory = event => {
        event.preventDefault()
        dispatch(getCategory(event.target.value))
    }

    const fatchCard = () => {
        dispatch(getAllCard())
    }

    return (
        <Navbar className={styles.myNav} expand="lg">
            <Navbar.Brand>
                <Link to="/">
                    <img
                        data-testid="logo-web"
                        onClick={fatchCard}
                        src="https://giantbomb1.cbsistatic.com/uploads/original/10/103881/2418195-yugiohlogo.png"
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">
                        <select className={styles.myButton} onChange={handleCategory}>
                            <option data-testid="level=1" value="level=1">Star 1</option>
                            <option value="level=2">Star 2</option>
                            <option value="level=3">Star 3</option>
                            <option data-testid="level=4" value="level=4">Star 4</option>
                            <option value="level=5">Star 5</option>
                            <option value="level=6">Star 6</option>
                            <option value="level=7">Star 7</option>
                            <option value="level=8">Star 8</option>
                            <option value="level=9">Star 9</option>
                            <option value="level=10">Star 10</option>
                        </select>
                    </Link>
                </Nav>
                <Link to="/jangan di klik">
                    <button data-testid="btn-dontClick" className={styles.myButton}>Don't Click</button>
                </Link>
                <Link to="/deck">
                    <button data-testid="btn-deck" className={styles.myButton}>Your deck</button>
                </Link>
                <Link to="/">
                    <MyButton typeButton={"random"} returnEvent={getRandomCard} />
                </Link>
                <SearchForm handleFilter={handleFilter} />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarHome