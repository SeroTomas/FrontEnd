import React from "react";
import CardComent from "./CardComent.jsx";
import { useState } from "react";
import styles from "./Styles/CardsComents.module.css";

const Coments=({props})=>{
    const coments = props;
    const [viewComents, setViewComents] = useState(false)
    return(
        <div className={styles.container}>
            <button className={styles.buttonComents} onClick={()=>setViewComents(!viewComents)}>Comentarios</button>
            
            {viewComents? coments.map((coment)=><CardComent props={coment}/>) :
            <></>
            }
        </div>
    )
}

export default Coments;