import './App.css';
import { useState } from 'react';


import Piece from './components/Piece';
import Carre from './components/Carre';
import Duo from './components/Duo';
import Trio from './components/Trio';
import { UserContext } from './components/Player';
import { LastContext } from './components/Lastpick';
import { FirstContext } from './components/First';
import { FreeContext } from './components/FreePlacement';


function App() {
  //const [test,setTest] = useState(false)
  const [player,setPlayer] = useState(true)
  const [lastpick,setLastpick] = useState({x:0,y:0,piece:""})
  const [first,setFirst] = useState(true)
  const [free,setFree] = useState(0)
  
  
  /*const [formData, setFormData] = useState(
      {choix: "", X:null, Y:null,id:""}
  )
  
  function handleChange(event) {
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [event.target.name]: event.target.value
          }
      })
  }
  function createPieces() {
    if(formData.choix===2){
      return(<Duo x={formData.X} y={formData.Y} class={formData.id}/>)
  
    }
  }
  function toggle(){
    setTest(true)

    <h2>Kulami</h2>
      <input placeholder="choix de la piece" type="number" name="choix" onChange={handleChange}/>
      <input placeholder="Position X" type="number" name="X" onChange={handleChange}/>
      <input placeholder="Position Y" type="number" name="Y"onChange={handleChange}/>
      <input placeholder="id" type="text" name="id"onChange={handleChange}/>
      <button onClick={toggle}>Create </button>
  }*/
  
  
  
  
  return (
    
    <div className="App">
      

      <FreeContext.Provider value={{free,setFree}}>
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
      </FreeContext.Provider>
      <div>{player?"Current Player: 1":"Current Player: 2"}</div>
      
      
      
      
     

    </div>
    
  
  );
}

export default App;
