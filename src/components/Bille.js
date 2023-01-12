import React,{useState,useEffect, useContext} from "react";
import { FirstContext } from "./First";
import { FreeContext } from "./FreePlacement";
import { LastContext } from "./Lastpick";
import { BeforeLastContext } from "./BeforeLastpick";
import { PlayedContext } from "./PlayedPlacement";
import { UserContext } from "./Player";

export default function Bille(props){    
    
    const rouge ="https://microentreprendre.com/wp-content/uploads/2021/01/cercle-rouge-fond-transparent.png"
    const gris = "https://icones.pro/wp-content/uploads/2021/04/icone-cercle-rempli-gris.png"
    const noir = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rond_bleu_ciel.png"
    const vert = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Rond_vert.png"
    const [color,setColor] = useState(gris) // couleur de l'emplacement de la bille 
    const [taken,setTaken] = useState(false) // l'etat de la bille
    const { player, setPlayer } = useContext(UserContext); // joueur actuelle
    const {lastpick,setLastpick} = useContext(LastContext);
    const {beforelastpick,setBeforeLastpick} = useContext(BeforeLastContext); // derniere placement 
    const {first,setFirst} = useContext(FirstContext) // indique si c'est la premiere mouvement 
    const {free,setFree} = useContext(FreeContext)
    const {played,setPlayed} = useContext(PlayedContext)
    
    
    
    
    const x = props.x
    const y = props.y
    const piece = props.class
    useEffect(()=>{
        if(((x === lastpick.x && piece !== lastpick.piece)||(y === lastpick.y && piece !== lastpick.piece)) && !taken ){
            setColor(vert)

        }
        if(((x!== lastpick.x && y!== lastpick.y) && !taken)||(piece===lastpick.piece && !taken)||(piece=== beforelastpick.piece && !taken)){
            setColor(gris)}

        
        
        
        },[player])
    

    function handleColor(){
        if((!taken && color===vert)||first){
            
            setColor(()=>player?rouge:noir)
            setTaken(true)
            setPlayer(prev=>!prev)
            setBeforeLastpick({
                x: lastpick.x,
                y: lastpick.y,
                piece: lastpick.piece
            })
            setLastpick({
                x:x,
                y:y,
                piece:props.class
                
            })
            setFirst(false)
            
            
            
            setPlayed([...played,{
                player : player,
                piece : piece,
                type : props.type
            }])
            //console.log(played)
            
            
            
            
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