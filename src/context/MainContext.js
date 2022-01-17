import React, { createContext, useState } from 'react';
import { cardsData } from '../cardData'

export const CardMainContext = createContext();

export default function MainContext(props) {
  const [theme, setTheme] = useState('japan-food')
  const [cardsToPlay, setCardsToPlay] = useState(3)
  const [pickedCard, setPickedCard] = useState(null)
  const [cardsRevealed, setCardsRevealed] = useState(1)

  function shuffleArray(array, cardsToPlay) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    const sliced = array.slice(0, cardsToPlay)
    return sliced.concat(sliced)
  }

  return (
    <CardMainContext.Provider value={{
      cardsData,
      theme, setTheme,
      cardsToPlay, setCardsToPlay,
      pickedCard, setPickedCard,
      cardsRevealed, setCardsRevealed,
      shuffleArray
    }}>
      {props.children}
    </CardMainContext.Provider>
  )
}