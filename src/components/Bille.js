import React,{useState,useEffect, useContext} from "react";
import { LastContext } from "./Lastpick";
import { UserContext } from "./Player";

export default function Bille(props){
    
    const rouge ="https://microentreprendre.com/wp-content/uploads/2021/01/cercle-rouge-fond-transparent.png"
    const gris = "https://icones.pro/wp-content/uploads/2021/04/icone-cercle-rempli-gris.png"
    const noir = "https://www.pngkey.com/png/full/439-4396743_wca-black-circle.png"
    const vert = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Rond_vert.png"
    const [color,setColor] = useState(gris)
    const [taken,setTaken] = useState(false)
    const { player, setPlayer } = useContext(UserContext);
    const {lastpick,setLastpick} = useContext(LastContext);
    
    const x = props.x
    const y = props.y
    const piece = props.class
    useEffect(()=>{
        if(((x === lastpick.x && piece !== lastpick.piece)||(y === lastpick.y && piece !== lastpick.piece)) && !taken){
            setColor(vert)
        }
    },[player])
    

    function handleColor(){
        if((!taken )){
            
            setColor(()=>player?rouge:noir)
            setTaken(true)
            setPlayer(prev=>!prev)
            setLastpick({
                x:x,
                y:y,
                piece:props.class
            })
            

            
        }else{
            alert(`placement already taken !`)
            
        }
        
        
    }
    
    
    return(
        <div>
            <img src={color} alt="bille" 
                width = "43" height="43"
                style={
                    {
                        position:"absolute",
                        left: props.x,
                        top: props.y
                    }
            
                
                }
                onClick={handleColor}
            />
    
        </div>
    )
    

}