import React, { createContext } from 'react';
import { cardsData } from '../cardData'

export const CardMainContext = createContext();

export default function MainContext(props) {
  return (
    <CardMainContext.Provider value={{
      cardsData
    }}>
      {props.children}
    </CardMainContext.Provider>
  )
}