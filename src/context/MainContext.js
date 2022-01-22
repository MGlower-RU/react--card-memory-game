import React, { createContext, useEffect, useRef, useState } from 'react';
import { cardsData } from '../cardData'

export const CardMainContext = createContext();

export default function MainContext(props) {
  const [theme, setTheme] = useState(Object.keys(cardsData)[0])
  const [cardsToPlay, setCardsToPlay] = useState(3)
  const [minCardsToPlay] = useState(3)
  const [pickedCard, setPickedCard] = useState(null)
  const [cardsRevealed, setCardsRevealed] = useState(1)
  const [cardsGuessed, setCardsGuessed] = useState(0)
  const [attemptsNumber, setAttemptsNumber] = useState(0)
  const [duplicateArray, setDuplicateArray] = useState([])

  const cardTable = useRef(null)

  function resetGame() {
    setPickedCard(null)
    setCardsRevealed(1)
    setCardsGuessed(0)
    setAttemptsNumber(0)

    document.querySelectorAll(`.card`).forEach((el) => {
      el.classList.remove('picked', 'active')
    })

    setDuplicateArray(shuffleArray(cardsData[theme].items))
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    const sliced = (cardsToPlay !== '' && cardsToPlay > 0) ? array.slice(0, cardsToPlay) : array.slice(0, 3)
    const doubleSliced = sliced.concat(sliced)

    for (let i = doubleSliced.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i + 1));
      [doubleSliced[i], doubleSliced[j]] = [doubleSliced[j], doubleSliced[i]];
    }
    return doubleSliced
  }

  useEffect(() => {
    resetGame()
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      resetGame,
      minCardsToPlay
    }}>
      {props.children}
    </CardMainContext.Provider>
  )
}