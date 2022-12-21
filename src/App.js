import './App.css';
import { useState } from 'react';


import Piece from './components/Piece';
import Carre from './components/Carre';
import Duo from './components/Duo';
import Trio from './components/Trio';

function App() {
  //const[lastpick,setLastpick]= useState({x:0,y:0,piece:"s"})
  const [player,setPlayer] = useState(true)
  function changePlayer(){
    setPlayer(prev=>!prev)
  }
  
  
  
  
  return (
    
    <div className="App">
      <h2>Kulami</h2>
      <Piece x={700} y={150} cp={player} />
      <Piece x={700} y={379} cp={player} />
      <Piece x={852} y={150} cp={player} />
      <Piece x={852} y={379} cp={player} />
      <Carre x={700} y={608} cp={player} />
      <Duo x={618} y={76} cp={player} />
      <Duo x={618} y={228} cp={player} />
      <Trio x={618} y={379} cp={player} />
      
      <button onClick={changePlayer}>End my trun</button>
      <div>Current player {player?"1":"2"}</div>
      
      
     

    </div>
    
  
  );
}

export default App;
