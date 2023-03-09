import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/system";
import { editPost } from "../../../axiosFunctions";

export default function FormDialog({ setOption, postId, content }) {
  const [open, setOpen] = useState(true);

  const [post, setPost] = useState(content);

  const token = localStorage.getItem("token");

  const handleClose = () => {
    setOpen(false);
    setOption("");
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setPost(value);
  };

  const handleEdit = () => {
    editPost(post, postId, token);
    setOpen(false);
  };

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent sx={{ width: "35rem", height: "30rem" }}>
          <TextField
            autoFocus
            multiline
            color="success"
            margin="dense"
            id="name"
            label="Que quieres editar?"
            type="text"
            fullWidth
            value={post}
            onChange={handleChange}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="success">
            Cancelar
          </Button>
          <Button onClick={handleEdit} color="success">
            Confirmar edicion
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
