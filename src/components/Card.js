import { useContext } from 'react'
import { CardMainContext } from '../context/MainContext'
import '../styles/card.scss'

export default function Card({name, img}) {
  const {
    pickedCard,
    setPickedCard,
    cardsRevealed,
    setCardsRevealed,
    setAttemptsNumber,
    setCardsGuessed
  } = useContext(CardMainContext)

  function revealCard(e) {
    const card = e.target.closest('.card')

    if(!card.classList.contains('active')) {
      card.classList.add('active')
    }

    setCardsRevealed(val => val - 1)
    if(pickedCard) {
      if(cardsRevealed === 0) {
        setCardsRevealed(1)
        setPickedCard(null)
        setAttemptsNumber(att => att + 1)
      }

      if(pickedCard === name) {
        setCardsGuessed(num => num + 1)
        document.querySelectorAll(`.card[data-card-name=${name}]`).forEach((el) => {
          el.classList.add('picked')
        })
      } else {
        setTimeout(() => {
          document.querySelectorAll(`.card.active`).forEach((el) => {
            el.classList.remove('active')
          })
        }, 300);
      }
    } else {
      setPickedCard(name)
    }
  }

  return (
    <div
      className="card"
      onClick={revealCard}
      data-card-name={name}
    >
      <div className="card__front"></div>
      <div
        className="card__back"
        style={{
          backgroundColor: `${img}`
        }}
      ></div>
    </div>
  )
}