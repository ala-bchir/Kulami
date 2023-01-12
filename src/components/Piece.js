
import Bille from "./Bille";
import dir_v from "../images/6_v.png";
import dir_h from "../images/6_h.png";
//Pièce à 6 



export default function Piece(props){
    
    const x = props.x ; //postion de la piece sur l'axe des x
    const y = props.y ; //postion de la piece sur l'axe des y
    if(props.position === 'v'){ 
        
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
        

        return(
            <div>
               && <img src={dir_v} alt="piece à 6" 
                    width = "150" height="227"
                    style={
                        {
                            position:"absolute",
                            left: x,
                            top: y
                        }
                
                    
                    }
                    
                />
                {billes}
    
        </div>
                
                 
            
        )
    }


    if(props.position === 'h'){ 
        
        const cord = [{x:x+20,y:y+20},{x:x+20,y:y+93},{x:x+152,y:y+20},
                    {x:x+86,y:y+20},{x:x+86,y:y+93},{x:x+152,y:y+93}] // tableau des cordonnées des trou pour les billes
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
        

        return(
            <div>
                <img src={dir_h} alt="piece à 6" 
                    width = "227" height="150"
                    style={
                        {
                            position:"absolute",
                            left: x,
                            top: y
                        }
                
                    
                    }
                    
                />
                {billes}
    
            </div>
                
                 
            
        )
    }
}


/*          <div
                style={{
                    position: 'absolute',
                    left: props.x,
                    top: props.y,
                    width: 150,
                    height: 227,
                    backgroundImage: "./images/6_v.png",
                    borderRadius: 19
                }}
                >
                
                </div>*/