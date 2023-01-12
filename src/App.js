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
import { PlayedContext } from './components/PlayedPlacement';
import { beforeLastContext } from './components/beforeLastpick';


function App() {
  const [player,setPlayer] = useState(true)
  const [lastpick,setLastpick] = useState({x:0,y:0,piece:""})
  const [beforelastpick,setBeforeLastpick] = useState({x:0,y:0,piece:""})
  const [first,setFirst] = useState(true)
  const [free,setFree] = useState(0)
  const [played,setPlayed] = useState([])
  

  

  
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
  
  const [score,setScore] = useState(new Array(9).fill(0));
  const [scoreP1,setScoreP1] = useState(0);
  const [scoreP2,setScoreP2] = useState(0);
  const [p1,setP1] = useState([]);
  const [p2,setP2] = useState([]);
  const [winner,setWinner] = useState("Winner:")

  
  function calculScore() {
    /*Calcule de score pour chaque piece (le tableau new score contient 9 cases , chaque case présente le socre d'une seule pièce  )
    on parcours le tableau des emplacement et pour chaque bille placé on regarde le joueur qui l'a placé et la piece ou elle appartient */
    const newScore = new Array(9).fill(0);
    // calcule le vainqueur de chaque piece 
    played.forEach(element => {
      
      if(element.player === true){
        console.log("rouge")
        newScore[element.piece] += 1;
        setScore(newScore);
      }
      if(element.player === false){
        console.log("noir")
        newScore[element.piece] -= 1 ;
        setScore(newScore);
      }
      
    })
    // atributer a chaque joueur la piece qui l'a emporté 
    for(let i = 0;i < newScore.length;i++){
      console.log(i)
      if(newScore[i]>0){
        setP1(prev=>{
          return [...prev,i]
        })
      }
      if(newScore[i]<0){
        setP2(prev=>{
          return [...prev,i]
        })
      }

    }
    // derterminer le score de chaque joueur 
    p1.forEach(e=>{
      for(let i = 0 ; i< played.length;i++){
        if(e===played[i].piece){
          setScoreP1(prev=>{
            return prev+= played[i].type
          })
          break ;
        }
      
      }
    })

    p2.forEach(e=>{
      for(let i = 0 ; i< played.length;i++){
        if(e===played[i].piece){
          setScoreP2(prev=>{
            return prev+= played[i].type
          })
          break ;
        }
      
      }
    })

    // determiner le vainqueur : 
    if (scoreP1>scoreP2){setWinner("Winner : Rouge")}
    else if (scoreP1<scoreP2){setWinner("Winner : Noir")}
    else if (scoreP1 === scoreP2){setWinner("Winner : Match Null")}

    



    console.log(played)
    console.log("pieces appartenant à  p1: "+ p1)
    console.log("pieces appartenant à p2: "+p2)
    console.log("score du rouge :"+scoreP1)
    console.log("score du Noir: "+scoreP2)
    console.log("pieces appartenant à : "+ p1)
    console.log("pieces appartenant à : "+p2)
    


   
    
  }

  return (
    
    <div className="App">
      

      <FreeContext.Provider value={{free,setFree}}>
      <FirstContext.Provider value={{first,setFirst}}>
      <LastContext.Provider value={{lastpick,setLastpick}}>
      <UserContext.Provider value={{player,setPlayer}}>
      <PlayedContext.Provider value ={{played,setPlayed}}>
      
      <Piece x={350} y={70} class={0} type={6} position ='h'/>
      <Piece x={590} y={70} class={1} type={6} position ='v'/>
      <Trio x={350} y={230} class={2} type={3} position ='h'/>
      <Trio x={750} y={70} class={3} type={3} position ='v'/>
      <Duo x={1000} y={230} class={4} type={2} position ='h'/>
      <Duo x={1000} y={70} class={5} type={2} position ='v'/>
      <Carre x={350} y={430} class={6} type={4} />
      
      
      
      
      </PlayedContext.Provider>
      </UserContext.Provider>
      </LastContext.Provider>
      </FirstContext.Provider>
      </FreeContext.Provider>
      
      <div>{player?"Current Player: 1":"Current Player: 2"}</div>
      <button onClick={calculScore}>click me ! </button>
      <div>{winner}</div>
      <div>{`Joueur Rouge ${scoreP1}`}</div>
      <div>{`Joueur noir ${scoreP2}`}</div>
      
      
      
      
     

    </div>
    
  
  );
}

export default App;
