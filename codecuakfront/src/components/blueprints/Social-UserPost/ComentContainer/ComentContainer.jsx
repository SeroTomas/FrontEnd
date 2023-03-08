//hooks
import { useEffect, useState } from "react";
//componentes
import CardComent from "../CardComent/CardComent.jsx";
import AddComent from "../AddComent/AddComent";
//MUI
import { Box } from "@mui/system";
//dependencias
import axios from "axios";
import Button from '@mui/material/Button'


const ComentContainer = ({ postId }) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState({})
    const [update, setUpdate] = useState("");

    function handleclick() {
        setPage(page + 1);
    };

    
    // se cargan todos los datos de la primer pagina en el estado local.
    useEffect(() => {
        try {
            axios.get(`https://backend-production-c946.up.railway.app/socialcuak/${postId}/comments?page=${page}`).then(
                response => {
                    setData(response.data)
                })
        } catch (error) {
            console.log(error.message)
        }
    }, []);

    // se realiza una peticion nuevamente cuando se envia un comentario
    // esto hace que se actualice automaticamente
    useEffect(() => {
        try {
            axios.get(`https://backend-production-c946.up.railway.app/socialcuak/${postId}/comments?page=${page + 1 - page}`).then(
                response => {
                    data.results.length?
                    setData({
                        ...data,
                        results: [response.data.results[0], ...data.results]
                    }) 
                    :
                    setData(response.data)
                })
        } catch (error) {
            console.log(error.message)
        }
    }, [update]);

    // se ejecuta el nuevo llamado cuando se cliquea el boton para cargar mas comentarios
    // se llama a la siguiente pagina y se concatenan los comentarios
    useEffect(() => {
        try {
            axios.get(`https://backend-production-c946.up.railway.app/socialcuak/${postId}/comments?page=${page}`).then(
                response => {
                    setData({
                        ...response.data,
                        results: [...data.results, ...response.data.results]
                    })
                })
        } catch (error) {
            console.log(error.message)
        }
    }, [page])

    return (

        <Box width="90%">
            <Box display="flex" flexDirection="column" justifyContent="center" gap="15px">

                <AddComent
                    postId={postId}
                    setUpdate={setUpdate}
                />

                {
                    data.count ? data.results?.map(comment => <CardComent comment={comment} key={comment.id} />) : null
                }

                {
                    data.count ? <Button disabled={!data.next} onClick={handleclick}>Mostrar mas comentarios</Button> : null
                }

            </Box>

        </Box>
    )
}

export default ComentContainer;