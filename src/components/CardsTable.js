import { useContext, useState } from "react";
import { CardMainContext } from "../context/MainContext";
import Card from "./Card";

export default function CardsTable() {
  const {
    cardsData,
    theme,
    cardsToPlay,
    shuffleArray,
  } = useContext(CardMainContext)
  const [duplicateArray] = useState(shuffleArray(cardsData[theme].items, cardsToPlay))

  return (
    <div className="cards-table__wrapper">
      {
        duplicateArray.map((el, i) => (
          <Card
            key={i}
            name={el.name}
            img={el.img}
          />
        ))
      }
    </div>
  )
}