import '../App.css';
import Welcome from './Welcome'
import { playerData } from '../data/playerData'
import Player from './Player'



console.log(playerData);
function App() {
  return (
    <div className="container">
      <Welcome />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
    </div>
  );
}

export default App;
