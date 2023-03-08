import { useState } from "react";
import Button from "@mui/material/Button";
import {
  FormControl,
  Box,
  IconButton,
  Alert,
  CircularProgress,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import { editUser, cloudinary } from "../../../axiosFunctions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function FormEditUser() {
  const userData = useSelector((state) => state.userData);
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState({
    name: "",
    description: "",
    skills: [],
  });
  const [imageUrl, setImageUrl] = useState("");
  const [imagen, setImagen] = useState("");
  useEffect(() => {
    if (userData) {
      setEdit({
        name: userData.name,
        description: userData.description,
        skills: userData.skills?.join(", "),
      });
      setImagen({imagen:userData.image})
    }
  }, [userData]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (property === "skills") {
      setEdit({
        ...edit,
        [property]: value.split(","),
      });
    } else {
      setEdit({
        ...edit,
        [property]: value,
      });
    }
  };
  //CLOUDINARY
  const randomId = uuidv4();

  useEffect(() => {
    if (imageUrl) {
      cloudinary(imageUrl, randomId).then((res) => {
        setImagen(res);
      });
    }
  }, [imageUrl]);
  /////
  console.log(imagen);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {

      const res = await editUser(
        id,
        edit.name,
        edit.description,
        edit.skills,
        imagen,
        token
      );
      console.log(res, "rrrrrrrrrrrrrr");
      if (res?.status === 200) {
        setSuccess("Usuario editado correctamente");
        setTimeout(() => {
          setOpen(false);
          setSuccess("")
          window.location.reload();
        }, 3000);
   
      
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box display="flex" justifyContent="end">
        <IconButton>
          <EditIcon onClick={handleClickOpen} />
        </IconButton>

        <FormControl onSubmit={handleSubmit}>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: { backgroundColor: "#ffffff" },
            }}
          >
            <DialogContent sx={{ width: "30rem", height: "40rem" }}>
              <DialogContentText
                fontSize={30}
                margin="auto"
                color="#1E8449"
                fontFamily={"Sen"}
                >
                Edita tu perfil
              </DialogContentText>
                {success && (
                  <Alert
                    severity="success"
                    sx={{ width: "22rem",marginTop: "2rem" }}
                  >
                    {success}
                  </Alert>
                )}
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginTop="5rem"
              >
                <TextField
                  size="small"
                  required
                  variant="outlined"
                  color="success"
                  sx={{ color: "white", width: "100%" }}
                  label="Nombre y Apellido"
                  value={edit.name}
                  name="name"
                  placeholder="Nombre y Apellido"
                  onChange={handleChange}
                />
                <TextField
                  size="small"
                  required
                  variant="outlined"
                  color="success"
                  sx={{ color: "#ffffff", margin: "5rem", width: "100%" }}
                  label="description"
                  value={edit.description}
                  name="description"
                  placeholder="description"
                  onChange={handleChange}
                />
                <TextField
                  size="small"
                  required
                  variant="outlined"
                  color="success"
                  sx={{ color: "#ffffff", width: "100%" }}
                  label="skills"
                  value={edit.skills}
                  name="skills"
                  placeholder="skills"
                  onChange={handleChange}
                />
              </Box>
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
                        top: 0,
                        right: 0,
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
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="outlined" color="success">
                Cancelar
              </Button>
              <Button onClick={handleSubmit} variant="outlined" color="success">
                Confirmar Cambios
              </Button>
            </DialogActions>
          </Dialog>
        </FormControl>
      </Box>
    </>
  );
}
