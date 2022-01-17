import CardsTable from './components/CardsTable';
import GameSettings from './components/GameSettings';

import './styles/App.scss';

export default function App() {
  return (
    <div className="memory__wrapper">
      <GameSettings />
      <CardsTable />
    </div>
  );
}