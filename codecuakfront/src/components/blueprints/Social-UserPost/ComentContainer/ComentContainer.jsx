//estilos
import styles from "./comentContainer.module.css";
//hooks
import { useState } from "react";
//componentes
import CardComent from "../CardComent/CardComent.jsx";

const ComentContainer=({socialcomments})=>{
    
    const [viewComents, setViewComents] = useState(false);

    return(

        <div className={styles.container}>

            <button className={styles.buttonComents} onClick={()=>setViewComents(!viewComents)}>Comentarios</button>
            
            {viewComents ? socialcomments?.map((comment)=><CardComent comments = {comments}/>) :
            <></>
            }

        </div>
    )
}

export default ComentContainer;