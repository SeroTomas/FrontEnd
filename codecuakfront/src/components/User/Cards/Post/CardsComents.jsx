import React from "react";
import CardComent from "./CardComent.jsx";
import styles from "./Styles/CardsComents.module.css";

const Coments=({props})=>{
    const coments = props;
    return(
        <div className={styles.container}>
            {coments.map((coment)=><CardComent props={coment}/>)}
        </div>
    )
}

export default Coments;