import './App.css';
import ActivePlayers from './components/ActivePlayers';
import Chat from './components/Chat';
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
      <div className="Chat">
        <Chat />
      </div>
    </>
  );
}

export default App;
