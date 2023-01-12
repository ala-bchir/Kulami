import React from "react";
import Bille from "./Bille";



export default function Trio(props){
    const x = props.x ;
    const y = props.y ;
    const cord = [{x:x+20,y:y+20},{x:x+20,y:y+93},{x:x+20,y:y+164}] 
    const billes = cord.map((bille)=>{
        return(
        <Bille
            x={bille.x}
            y={bille.y}
            class={props.class}
            type ={props.type}
            

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
                width: 80,
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