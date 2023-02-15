import React from "react";
import CardPost from "./CardPost";
import { userPrueba } from "../../userPrueba";
import { posts } from "../../postSocial";
import styles from "./Styles/CardsPost.module.css";

const CardsPost=()=>{

    return(
        <div className={styles.container}>
            {posts.map((post)=>{
                return <CardPost props={{post, userPrueba}}/>
            })}
        </div>
    )
}

export default CardsPost