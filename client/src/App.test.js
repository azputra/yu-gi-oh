import React from 'react';
import { render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import App from './App';
import axiosMock from 'axios'
import Navbar from './components/NavbarHome'

jest.mock('axios')

const getAllCard = () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [
      {
        id: "28985331",
        name: "Armageddon Knight",
        type: "Effect Monster",
        desc: "When this card is Summoned: You can send 1 DARK monster from your Deck to the Graveyard.",
        atk: "1400",
        def: "1200",
        level: "4",
        race: "Warrior",
        attribute: "DARK",
        views: "472433",
        card_images: [
          {
            id: "28985331",
            image_url: "https://storage.googleapis.com/ygoprodeck.com/pics/28985331.jpg",
            image_url_small: "https://storage.googleapis.com/ygoprodeck.com/pics_small/28985331.jpg"
          }
        ]
      }
    ]
  })
}

const getDetailCard = () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [
      {
        id: "51858306",
        name: "Eclipse Wyvern",
        type: "Effect Monster",
        desc: "If this card is sent to the Graveyard: Banish 1 Level 7 or higher LIGHT or DARK Dragon-Type monster from your Deck. If this card is banished from your Graveyard: You can add the monster banished by this card's effect to your hand.",
        atk: "1600",
        def: "1000",
        level: "4",
        race: "Dragon",
        attribute: "LIGHT",
        views: "69627",
        formats: "Duel Links",
        card_images: [
          {
            id: "51858306",
            image_url: "https://storage.googleapis.com/ygoprodeck.com/pics/51858306.jpg",
            image_url_small: "https://storage.googleapis.com/ygoprodeck.com/pics_small/51858306.jpg"
          }
        ]
      }
    ]
  })
}

test('load home page', async () => {
  getAllCard()
  const { findByTestId, debug, queryByTestId, getByText } = render(<App />)
  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  await waitForElement(() =>
    findByTestId('28985331')
  )
  const idCard = queryByTestId('28985331')
  const idCardName = queryByTestId('28985331')
  expect(idCard).toBeInTheDocument()
  expect(typeof idCard).toBe('object')
  expect(idCard).toContainElement(idCardName)
  expect(idCardName).toHaveClass('card')
  const linkElement = getByText(/scroll/i);
  expect(linkElement).toBeInTheDocument();
  expect(queryByTestId("card-image")).toHaveAttribute("src")
})

test('load detail card in home page if click card', async () => {
  getAllCard()
  getDetailCard()
  const { getByTestId, debug } = render(<App />)

  await waitForElement(() =>
    getByTestId("28985331"))

  getDetailCard()
  getAllCard()
  fireEvent.click(getByTestId("card-image"))
  await waitForElement(() =>
    getByTestId("detail-card")
  )
  expect(getByTestId("image-detail-card")).toBeInTheDocument()
  expect(getByTestId("name-detail-card")).toBeInTheDocument()
  expect(getByTestId("type-detail-card")).toBeInTheDocument()

  fireEvent.click(getByTestId("detail-card"))
  expect(getByTestId("my-detail-card")).toBeInTheDocument()
  // debug()
})


test('load my detail card and add favorite', async () => {
  getAllCard()
  const { getByTestId, queryByTestId, getByText, debug } = render(<App />)

  await waitForElement(() =>
    getByTestId("28985331"))

  getDetailCard()
  getAllCard()
  fireEvent.click(getByTestId("btn-favorite"))
  const btnFavorite = queryByTestId('btn-favorite')
  expect(btnFavorite).toHaveTextContent('Add to deck')
  fireEvent.click(getByTestId("btn-deck"))
  await waitForElement(() =>
    getByTestId("favorite-deck")
  )
  expect(getByTestId("image-favorite")).toBeInTheDocument()
  expect(queryByTestId("image-favorite")).toHaveAttribute("src")

  fireEvent.click(getByTestId("remove-card"))
  expect(getByTestId("favorite-deck")).toBeInTheDocument()

  fireEvent.click(getByTestId("btn-dontClick"))
  await waitForElement(() =>
    getByTestId("error-page")
  )

  fireEvent.click(getByTestId("btn-random"))
  await waitForElement(() =>
    getByTestId("detail-card")
  )
  fireEvent.click(getByTestId("logo-web"))
  await waitForElement(() =>
    getByTestId("homepage")
  )

  fireEvent.click(getByTestId("btn-scroll"))

  // debug()
})

test('running test navbar button', async () => {
  getAllCard()
  const { getByTestId, queryByTestId, debug } = render(<App />)

  await waitForElement(() =>
    getByTestId("28985331"))

  getDetailCard()
  getAllCard()
  fireEvent.click(getByTestId("level=4"))
  expect(queryByTestId("card-image")).toHaveAttribute("src")
  debug()
})