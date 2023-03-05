//importamos estilos
import axios from "axios";
import style from "./formSocialPost.module.css";
import { v4 as uuidv4 } from 'uuid';


//importamos hooks
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendPost, cloud } from "../../../axiosFunctions";
import { getAllPost } from "../../../redux/action";

// componentes
// IMPORT MATERIAL UI
import { Avatar, Box, Typography, TextField, Button } from "@mui/material";

const FormSocialPost = ({ user }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState("");
  const text = form.length;
  const token = localStorage.getItem("token");
  console.log(token);
  const handlerChange = (event) => {
    if (token) {
      const value = event.target.value;
      setForm(value);
    } else alert("¡Por favor inicie sesión para publicar en codeCuak!");
  };
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setpublicId] = useState("");
  const randomId = uuidv4();

const[imagen,setImagen] = useState("")
  const handleImg = () => {
        const formData = new FormData();
    formData.append("image", imageUrl);
    formData.append("publicId", randomId);
    axios
      .post(
        "http://localhost:3001/cloudinary",
        formData
      )
      .then((response) => {
        setImagen(response.data);
        
      });
  };
console.log(imagen);
console.log(form);
  const handlerSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('content', form);
    formData.append('image', imagen)
    
    await sendPost(form,imagen, user.id, token);

    dispatch(getAllPost(1));
    setForm("");
  };

  return (
    <Box className={style.codetext} fontFamily={"Sen"} marginTop="100px" marginBottom="25px" style={token ? {} : { pointerEvents: 'none', opacity: .7 }}>
      <Box width="80%" display="flex" flexDirection="column" justifyContent="center" >
        <Box display="flex" gap="1rem">
          <Box>
            <Avatar src={user.image} alt="foto del usuario" />
          </Box>
          <Typography variant="h6" fontFamily={"Sen"} color="black">
            {user.name}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" color="white" flexGrow="1">
          <form
            onSubmit={handlerSubmit}
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <TextField
              id="outlined-multiline-static"
              label="Que te gustaria postear?"
              multiline
              rows={4}
              margin="normal"
              required
              onChange={handlerChange}
              color="success"
              value={form}
            />
            <input
              type="file"
              accept="image/"
              onChange={(e) => {
                setImageUrl(e.target.files[0]);
              }}
              
            />
            <button onClick={() => handleImg()}>SUBIME ESTA</button>
            <Box display="flex" justifyContent="center">
              {imageUrl ? (
                <>
                  <img width="100px" height="100px" src={URL.createObjectURL(imageUrl)} />
                </>
              ) : (
                <p>image cargando</p>
              )}
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              {text > 1400 ? (
                <Typography
                  color="red"
                  fontWeight="bold"
                >{`${text}/1500 `}</Typography>
              ) : null}
              <Button
                style={{
                  width: 150,
                  height: 40,
                  fontSize: 20,
                }}
                size="large"
                color="success"
                variant="contained"
                sx={{ fontWeight: "bold", fontSize: "100" }}
                type="submit"
                disabled={text > 1500}
              >
                Publicar
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
export default FormSocialPost;
