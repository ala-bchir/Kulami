import './App.css';
import { useState } from 'react';


import Piece from './components/Piece';
import Carre from './components/Carre';
import Duo from './components/Duo';
import Trio from './components/Trio';
import { UserContext } from './components/Player';
import { LastContext } from './components/Lastpick';
import { FirstContext } from './components/First';


function App() {
  
  const [player,setPlayer] = useState(true)
  const [lastpick,setLastpick] = useState({x:0,y:0,piece:""})
  const [first,setFirst] = useState(true)
  
  
  
  
  
  return (
    
    <div className="App">
      <h2>Kulami</h2>
      <FirstContext.Provider value={{first,setFirst}}>
      <LastContext.Provider value={{lastpick,setLastpick}}>
      <UserContext.Provider value={{player,setPlayer}}>
      <Piece x={700} y={150} class="1" />
      <Piece x={700} y={379}  class="2"/>
      <Piece x={852} y={150}  class="3"/>
      <Piece x={852} y={379} class="5"/>
      <Carre x={700} y={608}  class="6"/>
      <Duo x={618} y={150}  class="7"/>
      <Duo x={1004} y={150}  class="8"/>
      <Trio x={618} y={379}  class="9"/>
      </UserContext.Provider>
      </LastContext.Provider>
      </FirstContext.Provider>
      <div>{player?"Current Player: 1":"Current Player: 2"}</div>
      
      
      
      
     

    </div>
    
  
  );
}

export default App;
