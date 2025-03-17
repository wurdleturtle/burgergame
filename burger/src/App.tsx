import './App.css';
import ActivePlayers from './components/ActivePlayers';
import UpgradesMain from './components/UpgradesMain';

function App() {
  return (
    <>
      {' '}
      <div className="ActivePlayers">
        <ActivePlayers />
      </div>
      <div className="UpgradesMain">
        <UpgradesMain />
      </div>
    </>
  );
}

export default App;
