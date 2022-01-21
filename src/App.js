import { useContext } from 'react';
import CardsTable from './components/CardsTable';
import GameSettings from './components/GameSettings';
import Results from './components/Results';
import { CardMainContext } from './context/MainContext';

import './styles/App.scss';

export default function App() {
  const {
    cardsToPlay,
    cardsGuessed
  } = useContext(CardMainContext)

  return (
    <div className="memory__wrapper">
      <GameSettings />
      <CardsTable />
      { cardsToPlay === cardsGuessed && <Results /> }
    </div>
  );
}