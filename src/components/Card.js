import { useContext } from 'react'
import { CardMainContext } from '../context/MainContext'
import '../styles/card.scss'

export default function Card({name, img}) {
  const {
    pickedCard,
    setPickedCard,
    cardsRevealed,
    setCardsRevealed
  } = useContext(CardMainContext)

  function revealCard(e) {
    console.log('clicked')
    const card = e.target.closest('.card')

    if(!card.classList.contains('active')) {
      card.classList.add('active')
    }

    setCardsRevealed(val => val - 1)

    if(pickedCard) {
      if(cardsRevealed === 0) {
        setCardsRevealed(1)
        setPickedCard(null)
      }

      if(pickedCard === name) {
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