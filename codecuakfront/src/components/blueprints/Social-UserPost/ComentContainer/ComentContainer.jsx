//hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
//componentes
import CardComent from "../CardComent/CardComent.jsx";
import AddComent from "../AddComent/AddComent";
//MUI
import { Box } from "@mui/system";
import { getComments } from "../../../../axiosFunctions";
//dependencias
import axios from "axios";
import Button from '@mui/material/Button'


const ComentContainer = ({ postId }) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState({})
    const [submit, setSubmit] = useState(false)
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


    // Hace Dispatch al llegar al final de la pagina y cumplir las condiciones
    function handleclick() {
        setPage(page + 1);
    };

    useEffect(()=>{
        try {
            axios.get(`https://backend-production-c946.up.railway.app/socialcuak/${postId}/comments?page=${page}`).then(
                response => { setData({
                    ...response.data,
                    results:[...data.results, ...response.data.results]
                }) })
        } catch (error) {
            console.log(error.message)
        }
    },[page])

    return (

        <Box width="90%">
            <Box display="flex" flexDirection="column" justifyContent="center" gap="15px">
                <AddComent
                    postId={postId}
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