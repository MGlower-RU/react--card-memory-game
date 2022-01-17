import { useContext } from "react"
import { CardMainContext } from "../context/MainContext"

export default function GameSettings() {
  const { theme, setTheme, cardsData } = useContext(CardMainContext)

  return (
    <div className="memory__selection-settings">
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
  )
}