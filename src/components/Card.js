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
    setCardsGuessed,
    cardsData,
    theme
  } = useContext(CardMainContext)
  const { backface } = cardsData[theme]
  const backfaceCardStyle = imageCheck(backface) ?
  {
    backgroundImage: `url(${backface})`,
    borderWidth: '5px'
  }
  :
  {
    backgroundColor: backface,
    borderWidth: '5px'
  }

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

  function imageCheck(img) {
    return img.indexOf('.png') > 0 || img.indexOf('.svg') > 0 || img.indexOf('.jpg') > 0
  }

  return (
    <div
      className="card"
      onClick={revealCard}
      data-card-name={name}
    >
      <div
        className="card__front"
        style={backface ? backfaceCardStyle : null}
      ></div>
      {
        imageCheck(img) ?
        <div className="card__back">
          <img src={img} alt="" />
        </div>
        :
        <div
          className="card__back"
          style={{
            background: `${img}`
          }}
        ></div>
      }
    </div>
  )
}