import React from "react";
import Bille from "./Bille";



export default function Piece(props){
    const x = props.x ;
    const y = props.y ;
    const cord = [{x:x+20,y:y+20},{x:x+20,y:y+93},{x:x+20,y:y+164},
                {x:x+86,y:y+20},{x:x+86,y:y+93},{x:x+86,y:y+164}] 
    const billes = cord.map((bille)=>{
        return(
        <Bille
            x={bille.x}
            y={bille.y}
            cr={props.cp}
            
            

        />
        )
        
        })

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
    
                }       
            }
            
        >
            
        </div>
        {billes}
        </>
    )
}