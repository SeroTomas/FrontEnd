//estilos
import styles from "./AddComent.module.css";
//hooks
import {  useEffect, useState } from "react";
//actions
import { sendComment } from "../../../../axiosFunctions";
import { Avatar, Box, Button, TextField } from "@mui/material";
import {  useDispatch, useSelector } from "react-redux";

const AddComent = ({postId, updateInfo}) => {
    const userData = useSelector(state => state.userData);
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    const [coment, setComent] = useState("")

    const handlerChange = (event) => {
        const value = event.target.value;
        setComent(value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        sendComment(coment, id, postId, token);
        setComent("");
        updateInfo()
    }



    return (
        <Box display="flex" alignItems="center" gap="15px" width={1}>
            <Avatar src={userData.image} alt={`Imagen de perfil de ${userData.id}`} />
            <TextField
                id="outlined-multiline-static"
                placeholder="Escribe un comentario"
                value={coment}
                onChange={handlerChange}
                fullWidth
                rows={3}
                color="success"
            />
            <Button id="submit" onClick={submitHandler} color="success" variant="contained">Enviar</Button>
        </Box>
    )
}

export default AddComent