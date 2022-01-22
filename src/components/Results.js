import { useContext } from "react"
import { CardMainContext } from "../context/MainContext"

export default function Results() {
  const { resetGame, attemptsNumber } = useContext(CardMainContext)

  return (
    <div className="cards-table__finish__overlay">
      <div className="cards-table__finish__attempts">
        Attempts you've made: <span>{attemptsNumber}</span>
      </div>
      <button
        className="cards-table__finish__reset"
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  )
}