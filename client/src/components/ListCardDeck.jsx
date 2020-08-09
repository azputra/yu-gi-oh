import React, { useState, useEffect } from 'react'
import ItemCardDeck from './ItemCardDeck'
import { useSelector } from 'react-redux'

function ListCardDeck(props) {
    const allCardDeck = useSelector((state) => state.allCardReducer.allCard)
    const [totalLoad, setTotalLoad] = useState(15)

    useEffect(() => {
        const scrollHandler = () => {
            if (document.documentElement.scrollHeight === document.documentElement.scrollTop + document.documentElement.clientHeight) {
                setTotalLoad(totalLoad => totalLoad + 15)
            }
        }
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <>
            {
                allCardDeck.slice(0, totalLoad).map(hero => {
                    return (
                        <ItemCardDeck getDetail={props.getDetail} key={hero.id} hero={hero} />
                    )
                })
            }
            <p data-testid="scroll-more">
                {
                    totalLoad > 10000 ? '' : 'Scroll More For Load'
                }
            </p>
        </>
    )
}

export default ListCardDeck