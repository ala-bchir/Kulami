
import Bille from "./Bille";
import React,{useState, useContext} from "react";
import { UserContext } from "./Player";

//Pièce à 6 



export default function Piece(props){
    
    const x = props.x ; //postion de la piece sur l'axe des x
    const y = props.y ; //postion de la piece sur l'axe des y 
    const cord = [{x:x+20,y:y+20},{x:x+20,y:y+93},{x:x+20,y:y+164},
                {x:x+86,y:y+20},{x:x+86,y:y+93},{x:x+86,y:y+164}] // tableau des cordonnées des trou pour les billes
    const billes = cord.map((bille)=>{
        return(
        <Bille
            x={bille.x} 
            y={bille.y}
            class={props.class}
            type ={props.type}
        />
        ) //on parcours le tableau des cordonnées et pour chaque x et y on crée un composent bille et on le stock dans le tableau "billes"
    })
    const { player, setPlayer } = useContext(UserContext); // joueur actuelle
    const [score,setScore] = useState(0);

    return(
        <>
            <div
            style={{
                position: 'absolute',
                left: props.x,
                top: props.y,
                width: 150,
                height: 227,
                backgroundColor: "#Eccb52",
                borderRadius: 19
            }}
            >
            
            </div>
            {billes} 
        </>
    )
}