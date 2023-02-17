//estilos
import styles from "./comentContainer.module.css";
//hooks
import { useState } from "react";
//componentes
import CardComent from "../CardComent/CardComent.jsx";

const ComentContainer=({props})=>{
    const coments = props;
    
    const [viewComents, setViewComents] = useState(false)
    return(
        <div className={styles.container}>
            <button className={styles.buttonComents} onClick={()=>setViewComents(!viewComents)}>Comentarios</button>
            
            {viewComents? coments?.map((coment)=><CardComent props={coment}/>) :
            <></>
            }
        </div>
    )
}

export default ComentContainer;