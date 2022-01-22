import Sushi from './images/japanese_food/sushi.svg'
import Bento from './images/japanese_food/bento.svg'
import CakeMochi from './images/japanese_food/cake_mochi.svg'
import Nori from './images/japanese_food/nori.svg'
import Onigiri from './images/japanese_food/onigiri.svg'
import Ramen from './images/japanese_food/ramen.svg'
import Rice from './images/japanese_food/rice.svg'
import Roll from './images/japanese_food/roll.svg'
import Sashimi from './images/japanese_food/sashimi.svg'
import Sataytakoyaki from './images/japanese_food/satay_takoyaki.svg'

export const cardsData = {
  'japan-food': {
    backface: 'img',
    items: [
      {
        id: 1,
        name: 'onigiri',
        img: Onigiri
      },
      {
        id: 2,
        name: 'ramen',
        img: Ramen
      },
      {
        id: 3,
        name: 'bento',
        img: Bento
      },
      {
        id: 4,
        name: 'cake-mochi',
        img: CakeMochi
      },
      {
        id: 5,
        name: 'nori',
        img: Nori
      },
      {
        id: 6,
        name: 'rice',
        img: Rice
      },
      {
        id: 7,
        name: 'roll',
        img: Roll
      },
      {
        id: 8,
        name: 'sataytakoyaki',
        img: Sataytakoyaki
      },
      {
        id: 9,
        name: 'sashimi',
        img: Sashimi
      },
      {
        id: 10,
        name: 'sushi',
        img: Sushi
      },
    ]
  },
  'random-colors': {
    backface: 'img',
    items: [
      {
        id: 1,
        name: 'first',
        img: randomColor()
      },
      {
        id: 2,
        name: 'second',
        img: randomColor()
      },
      {
        id: 3,
        name: 'third',
        img: randomColor()
      },
      {
        id: 4,
        name: 'fourth',
        img: randomColor()
      },
      {
        id: 5,
        name: 'fifth',
        img: randomColor()
      },
      {
        id: 6,
        name: 'sixth',
        img: randomColor()
      },
      {
        id: 7,
        name: 'seventh',
        img: randomColor()
      },
      {
        id: 8,
        name: 'eighth',
        img: randomColor()
      },
      {
        id: 9,
        name: 'nineth',
        img: randomColor()
      },
      {
        id: 10,
        name: 'tenth',
        img: randomColor()
      },
      {
        id: 11,
        name: 'tenth',
        img: randomColor()
      },
      {
        id: 12,
        name: 'twelfth',
        img: randomColor()
      },
      {
        id: 13,
        name: 'thirteenth',
        img: randomColor()
      },
      {
        id: 14,
        name: 'fourteenth',
        img: randomColor()
      },
      {
        id: 15,
        name: 'fiveteenth',
        img: randomColor()
      },
      {
        id: 16,
        name: 'sixteenth',
        img: randomColor()
      },
      {
        id: 17,
        name: 'seventeenth',
        img: randomColor()
      },
      {
        id: 18,
        name: 'eighteenth',
        img: randomColor()
      },
      {
        id: 19,
        name: 'nineteenth',
        img: randomColor()
      },
      {
        id: 20,
        name: 'twentieth',
        img: randomColor()
      },
    ]
  },
  'saiki-kusuo': {
    backface: 'img',
    items: [
      {
        id: 1,
        name: 'saiki',
        img: 'green'
      }
    ]
  },
}

function randomColor() {
  const o = Math.round, r = Math.random, s = 255;
  return `rgb(${o(r()*s)}, ${o(r()*s)}, ${o(r()*s)})`
}