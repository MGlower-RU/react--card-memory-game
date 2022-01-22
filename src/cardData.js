function randomColor() {
  const o = Math.round, r = Math.random, s = 255;
  return `rgb(${o(r()*s)}, ${o(r()*s)}, ${o(r()*s)})`
}

export const cardsData = {
  'japan-food': {
    backface: 'img',
    items: [
      {
        id: 1,
        name: 'onigiri',
        img: 'black'
      },
      {
        id: 2,
        name: 'ramen',
        img: 'yellow'
      },
      {
        id: 3,
        name: 'okonomiyaki',
        img: 'orange'
      },
      {
        id: 4,
        name: 'teppanyaki',
        img: 'burlywood'
      },
      {
        id: 5,
        name: 'sushi',
        img: 'salmon'
      },
      {
        id: 6,
        name: 'yakiniku',
        img: 'pink'
      },
      {
        id: 7,
        name: 'yakitori',
        img: 'brown'
      },
      {
        id: 8,
        name: 'sukiyaki',
        img: 'palevioletred'
      },
      {
        id: 9,
        name: 'fugu',
        img: 'seashell'
      },
      {
        id: 10,
        name: 'unagi',
        img: 'aliceblue'
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