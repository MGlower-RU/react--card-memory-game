import { useContext } from "react"
import { CardMainContext } from "../context/MainContext"

import '../styles/game-settings.scss'

export default function GameSettings() {
  const {
    theme,
    setTheme,
    cardsData,
    cardsToPlay,
    setCardsToPlay
  } = useContext(CardMainContext)

  const digitsCheck = e => {
    const { value } = e.target
    const itemsLength = cardsData[theme].items.length

    if(value.match(/^\d+$/) || value === '') {
      Number(value) > itemsLength ? setCardsToPlay(itemsLength) :
      setCardsToPlay(value === '' ? '' : Number(value))
    }
  }

  return (
    <div className="memory__selection-settings">
      <div className="memory__selection-setting">
        <span>Theme:</span>
        <select
          name="theme-selection"
          id="theme"
          value={theme}
          onChange={e => setTheme(e.target.value)}
        >
          {
            Object.keys(cardsData).map((el, i) => (
              <option
                value={el}
                key={i}
              >{el}</option>
            ))
          }
        </select>
      </div>
      <div className="memory__selection-setting">
        <span>Number of pairs (min 3):</span>
        <input
          type="text"
          placeholder={`3 - ${cardsData[theme].items.length}`}
          value={cardsToPlay}
          onChange={digitsCheck}
        />
      </div>
    </div>
  )
}