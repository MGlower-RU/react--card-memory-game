import React, { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { cardsData } from '../cardData'

export const CardMainContext = createContext();

export default function MainContext(props) {
  const [theme, setTheme] = useState('japan-food')
  const [cardsToPlay, setCardsToPlay] = useState(3)
  const [pickedCard, setPickedCard] = useState(null)
  const [cardsRevealed, setCardsRevealed] = useState(1)
  const [cardsGuessed, setCardsGuessed] = useState(0)
  const [attemptsNumber, setAttemptsNumber] = useState(0)

  const cardTable = useRef(null)

  function resetGame() {
    setPickedCard(null)
    setCardsRevealed(1)
    setCardsGuessed(0)
    setAttemptsNumber(0)

    document.querySelectorAll(`.card.active`).forEach((el) => {
      el.classList.remove('picked', 'active')
    })
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    const sliced = (cardsToPlay !== '' && cardsToPlay > 2) ? array.slice(0, cardsToPlay) : array.slice(0, 3)
    const doubleSliced = sliced.concat(sliced)

    for (let i = doubleSliced.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i + 1));
      [doubleSliced[i], doubleSliced[j]] = [doubleSliced[j], doubleSliced[i]];
    }
    return doubleSliced
  }

  const duplicateArray = useMemo(() => {
    const { items } = cardsData[theme]

    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    const sliced = (cardsToPlay !== '' && cardsToPlay > 2) ? items.slice(0, cardsToPlay) : items.slice(0, 3)
    const doubleSliced = sliced.concat(sliced)

    for (let i = doubleSliced.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i + 1));
      [doubleSliced[i], doubleSliced[j]] = [doubleSliced[j], doubleSliced[i]];
    }
    return doubleSliced
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, cardsToPlay])

  useEffect(() => {
    if(cardTable) {
      document.querySelectorAll(`.card.active`).forEach((el) => {
        el.classList.remove('active', 'picked')
      })
    }
  }, [theme, cardsToPlay])

  return (
    <CardMainContext.Provider value={{
      cardsData,
      theme, setTheme,
      cardsToPlay, setCardsToPlay,
      pickedCard, setPickedCard,
      cardsRevealed, setCardsRevealed,
      attemptsNumber, setAttemptsNumber,
      cardsGuessed, setCardsGuessed,
      duplicateArray, cardTable,
      resetGame
    }}>
      {props.children}
    </CardMainContext.Provider>
  )
}