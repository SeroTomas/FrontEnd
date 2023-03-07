//importamos estilos
import style from "./formSocialPost.module.css";
//importamos hooks
import { v4 as uuidv4 } from "uuid";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { sendPost,cloudinary } from "../../../axiosFunctions";
import { getAllPost } from "../../../redux/action"
// componentes
// IMPORT MATERIAL UI
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar, Box, Typography, TextField, Button,IconButton } from "@mui/material";

const FormSocialPost = ({ user }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState("");
  const text = form.length;
  const token = localStorage.getItem("token")
  const handlerChange = (event) => {
    if (token) {
      const value = event.target.value;
      setForm(value);
    }
    else alert("¡Por favor inicie sesión para publicar en codeCuak!")
  };
   //CLOUDINARY
   const randomId = uuidv4();
   const [imageUrl, setImageUrl] = useState("");
   const [imagen, setImagen] = useState("");
   useEffect(() => {
     if (imageUrl) {
       cloudinary(imagen, randomId).then((res) => {
         setImagen(res);
       });
     }
   }, [imageUrl]);
/////
  const handlerSubmit = async (event) => {
    event.preventDefault();
    await sendPost(form, user.id, token);
    dispatch(getAllPost(1)); // getAllPost de la pagina 1 de posteos para que se renderice el nuevo post
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
        <Box display="flex" justifyContent="center" color="white" flexGrow="1" >
          <form onSubmit={handlerSubmit} style={{ "display": "flex", "flexDirection": "column", "width": "100%" }}>
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
             <Box display="flex" justifyContent="start">
              <IconButton component="label" size="large" color="success">
                <AddPhotoAlternateIcon fontSize="large" />
                <TextField
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setImageUrl(e.target.files[0]);
                  }}
                  style={{ display: "none" }}
                />
              </IconButton>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              margin="1rem"
              position="relative"
            >
              {imageUrl ? (
                <>
                  <img
                    style={{ maxWidth: "50%" }}
                    src={URL.createObjectURL(imageUrl)}
                  />

                  <IconButton
                    aria-label="delete"
                    size="large"
                    style={{
                      position: "absolute",
                      top: -25,
                      right: 160,
                    }}
                    onClick={() => {
                      setImageUrl("");
                    }}
                  >
                    <DeleteIcon fontSize="large" color="success" />
                  </IconButton>
                </>
              ) : null}
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              {text > 1400 ? (
                <Typography color="red" fontWeight="bold">{`${text}/1500 `}</Typography>
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
