import { useContext } from 'react';
import CardsTable from './components/CardsTable';
import GameSettings from './components/GameSettings';
import Results from './components/Results';
import { CardMainContext } from './context/MainContext';

import './styles/App.scss';

export default function App() {
  const {
    cardsToPlay,
    cardsGuessed,
    minCardsToPlay,
  } = useContext(CardMainContext)

  return (
    <div className="memory__wrapper">
      <GameSettings />
      <CardsTable />
      { ((cardsToPlay === '' || cardsToPlay === 0) ? minCardsToPlay === cardsGuessed : cardsToPlay === cardsGuessed) && <Results /> }
    </div>
  );
}