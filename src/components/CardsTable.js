import { useContext } from "react";
import { CardMainContext } from "../context/MainContext";
import Card from "./Card";

export default function CardsTable() {
  const {
    duplicateArray,
    cardTable
  } = useContext(CardMainContext)

  return (
    <div className="cards-table__wrapper" ref={cardTable}>
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